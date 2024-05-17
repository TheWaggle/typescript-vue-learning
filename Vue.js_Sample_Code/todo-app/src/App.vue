<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { type TodoItem } from '@/types/TodoItem'
import { TodoState } from '@/types/TodoState'
import TodoStorageService from '@/services/TodoStorageService'

export default defineComponent({
  setup() {
    // services
    const todoStorageService = new TodoStorageService()

    // data
    const current = ref(TodoState.None)
    const labels = [
      { id: TodoState.None, name: '全て' },
      { id: TodoState.Working, name: '作業中' },
      { id: TodoState.Done, name: '完了' }
    ]
    const todos = ref<TodoItem[]>([{ id: 1, name: '牛乳を買う', state: TodoState.Working }])

    const newTodoName = ref('')

    // computed
    const filteredTodos = computed(() => {
      return current.value === 0
        ? todos.value
        : todos.value.filter((todo) => todo.state === current.value)
    })

    // methods
    const addTodo = () => {
      if (!newTodoName.value) {
        return
      }
      const todo: TodoItem = {
        id: todoStorageService.nextId,
        name: newTodoName.value,
        state: TodoState.Working
      }
      todos.value.push(todo)
      newTodoName.value = ''
    }

    const removeTodo = (todo: TodoItem) => {
      todos.value = todos.value.filter((t) => t.id !== todo.id).map((t, i) => ({ ...t, id: i + 1 }))
    }

    const toggleState = (todo: TodoItem) => {
      todo.state = todo.state === TodoState.Working ? TodoState.Done : TodoState.Working
    }

    // watch
    watch(
      todos,
      (todos) => {
        todoStorageService.save(todos)
      },
      { deep: true }
    )

    // Todoの初期化
    todos.value = todoStorageService.fetchAll()

    return {
      current,
      labels,
      todos,
      newTodoName,
      addTodo,
      removeTodo,
      toggleState,
      filteredTodos
    }
  }
})
</script>

<template>
  <div id="app">
    <h1>Todo リスト</h1>
    <label v-for="label in labels" :key="label.id">
      <input type="radio" v-model="current" :value="label.id" />
      {{ label.name }}
    </label>
    {{ filteredTodos.length }}件を表示
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">タスク内容</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in filteredTodos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td class="state">
            <button @click="toggleState(todo)">
              {{ labels[todo.state].name }}
            </button>
          </td>
          <td class="button">
            <button @click.shift="removeTodo(todo)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>※削除ボタンは SHIFT を押しながらクリックしてください</p>
    <h2>新しいタスクの追加</h2>
    <form class="add-item" @submit.prevent="addTodo">
      <label for="task">タスク内容</label>
      <input type="text" id="task" v-model="newTodoName" />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#app {
  max-width: 640px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
thead th + th {
  border-left: 1px solid #eee;
}
tbody tr td + td {
  border-left: 1px solid #eee;
}

th,
th {
  padding: 0 8px;
  line-height: 40px;
}

thead th.id,
.check {
  width: 50px;
}

thead th.state {
  width: 100px;
}

thead th.button {
  width: 60px;
}

tbody td.check,
tbody td.button,
tbody td.state {
  text-align: center;
}

tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: All 0.4s;
}

tbody tr.Done td,
tbody tr.Done th {
  background: #f8f8f8;
  color: #bbb;
}

tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}

button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}
</style>
