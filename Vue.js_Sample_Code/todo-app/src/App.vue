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
    <p>※削除ボタンは〇〇〇を押しながらクリックしてください</p>
    <h2>新しいタスクの追加</h2>
    <form class="add-item" @submit.prevent="addTodo">
      <label for="task">タスク内容</label>
      <input type="text" id="task" ref="taskName" />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TodoStorage from "./todoStorage";
import { State, TodoItem } from "./todoItem";

const todoStorage = new TodoStorage();

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  todos: TodoItem[] = [];
  labels = [
    {
      id: State.All,
      name: "全て",
    },
    {
      id: State.Working,
      name: "作業中",
    },
    {
      id: State.Done,
      name: "完了",
    },
  ];
  priorities: string[] = ["低", "中", "高"];
  current: State = State.All;
  get filteredTodos() {
    return this.todos.filter((t) => {
      return this.current === State.All ? true : this.current === t.state;
    });
  }
  created() {
    this.todos = todoStorage.fetchAll();
  }
  addTodo() {
    const name = this.$refs.taskName as HTMLInputElement;
    if (!name.value.length) {
      return;
    }
    this.todos.push({
      id: todoStorage.nextId,
      name: name.value,
      state: State.Working,
    });
    name.value = "";
  }

  removeTodo(todo: TodoItem) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  toggleState(todo: TodoItem) {
    todo.state = todo.state === State.Working ? State.Done : State.Working;
  }
  @Watch("todos", { deep: true })
  private onTodoChanged(todos: TodoItem[]) {
    todoStorage.save(todos);
  }
}
</script>

<style>
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
