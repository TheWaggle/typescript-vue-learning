<template>
  <div class="directive-container">
    <h2>v-bind、v-on、v-modelの練習</h2>
    <h2>v-bind</h2>
    <div class="flex-wrapper">
      <div class="step1">
        <h3>基本の書き方</h3>
        <a v-bind:href="url">コーポレートサイト</a>
      </div>
      <div class="step2">
        <h3>省略記法</h3>
        <a :href="url">コーポレートサイト</a>
      </div>
      <div class="step3">
        <h3>動的な引数</h3>
        <a :[arributeName]="url">コーポレートサイト</a>
      </div>
    </div>

    <h2>v-on</h2>
    <div class="step1">
      <h3>基本の書き方・省略記法・動的な引数</h3>
      <div class="flex-wrapper">
        <button v-on:click="num++">カウントアップ</button>
        <button @click="increment">メソッドでカウントアップ</button>
        <button @click="num--">カウントダウン</button>
        <button @[event]="num = num * 2">2倍カウントアップ</button>
      </div>
      <p>カウントアップ結果：{{ num }}</p>
    </div>
    <div class="step2">
      <h3>イベント修飾子stopとprevent</h3>
      <p @mousemove="changeMouseposition($event, 100)">
        この部分にマウスをのせるとマウスの座標軸を100倍した値を取得します。<span @mousemove.stop
          >この部分はマウスをのせても何も反応しません</span
        >
      </p>
      <p>マウスのx座標{{ position.x }}</p>
      <p>マウスのy座標{{ position.y }}</p>
      <a :href="url" @click.prevent>遷移させたくない</a>
    </div>
    <h2 class="title">v-bindとv-onの組み合わせ</h2>
    <div class="step2">
      <h3 :class="{ 'color-green': isActive, 'color-orange': !isActive }">
        ボタンが押されると文字の色が変わります
      </h3>
      <button @click="isActive = !isActive">文字色変更</button>
      <p :class="{ active: isActive }">activeクラスが付与されるとフォントサイズが大きくなります</p>
      <p :class="{ 'color-green': isActive, underline: isError }">
        文字色が変更され、アンダーラインがつきます
      </p>
      <p :style="{ color: '#red', fontSize: '20px' }">
        インラインスタイルを適用カラーは赤でフォントサイズは20px
      </p>
    </div>
    <h2>v-model</h2>
    <div class="flex-wrapper">
      <div class="step1">
        <h3>テキストボックス</h3>
        <label for="name">お名前</label>
        <input id="name" type="text" v-model="userInfo.name" />
        <p>お名前：{{ userInfo.name }}</p>
      </div>
      <div class="step2">
        <h3>チェックボックス1</h3>
        <label><input type="checkbox" v-model="userInfo.checked" />同意する</label>
        <p>同意する：{{ userInfo.checked }}</p>
        <h3>チェックボックス2</h3>
        <div class="flex-wrapper">
          <!-- <label><input type="checkbox" v-model="userInfo.request" />入会希望</label>
          <label><input type="checkbox" v-model="userInfo.request" />メルマガ希望</label> -->
          <!-- <label><input type="checkbox" v-model="userInfo.request" />どちらも希望しない</label> -->
          <label
            ><input type="checkbox" v-model="userInfo.request" value="入会希望" />入会希望</label
          >
          <label
            ><input
              type="checkbox"
              v-model="userInfo.request"
              value="メルマガ希望"
            />メルマガ希望</label
          >
          <label
            ><input
              type="checkbox"
              v-model="userInfo.request"
              value="どちらも希望しない"
            />どちらも希望しない</label
          >
        </div>
        <p>リクエスト内容：{{ userInfo.request }}</p>
      </div>
      <div class="step3">
        <h3>セレクトボックス</h3>
        <select id="prefectures" v-model="userInfo.prefecture">
          <option value="" disabled>選択してください</option>
          <option>東京</option>
          <option>名古屋</option>
          <option>大阪</option>
        </select>
        <p>所在地：{{ userInfo.prefecture }}</p>
      </div>
      <div class="step4">
        <h3>ラジオボタン</h3>
        <label><input type="radio" v-model="userInfo.gender" value="男" />男性</label>
        <label><input type="radio" v-model="userInfo.gender" value="女" />女性</label>
        <p>性別：{{ userInfo.gender }}</p>
      </div>
      <div class="step5">
        <h3>テキストエリア</h3>
        <label for="message">メッセージ</label>
        <textarea id="message" cols="30" rows="10" v-model="userInfo.message"></textarea>
        <p>メッセージ内容：{{ userInfo.message }}</p>
      </div>
    </div>
    <h2>v-if、v-show、v-forの練習</h2>
    <h2>v-if</h2>
    <div class="step1">
      <label for="bloodtype"></label>
      <input type="text" id="bloodtype" v-model="bloodtype" />
      <p v-if="bloodtype == 'A'">あなたはA型ですね</p>
      <p v-else-if="bloodtype == 'B'">あなたはB型ですね</p>
      <p v-else-if="bloodtype == 'O'">あなたはO型ですね</p>
      <p v-else-if="bloodtype == 'AB'">あなたはAB型ですね</p>
      <p v-else-if="bloodtype == ''">血液型を入力してください</p>
      <p v-else>血液型を正しく入力てきていません</p>
    </div>
    <h2>v-show</h2>
    <div class="step2">
      <button type="button" @click="isActive = !isActive">表示非表示切り替えボタン</button>
      <p v-show="isActive">v-showボタン表示非表示エリア</p>
    </div>
    <h2>v-for</h2>
    <div class="step1">
      <h3>配列</h3>
      <ul>
        <li v-for="(nav, index) in navs" :key="index">{{ index }}:{{ nav }}</li>
      </ul>
    </div>
    <div class="step2">
      <h3>オブジェクト</h3>
      <ul>
        <li v-for="(val, name, index) in todo" :key="index">{{ index }}:{{ name }}:{{ val }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    // v-bind
    const url = 'https://www.lakeel.com/ja/index.html'
    const arributeName = 'href'
    const num = ref(0)
    const event = 'click'
    const isActive = ref(false)
    const isError = ref(true)

    // v-on
    const increment = () => {
      num.value++
    }
    const position = ref({
      x: 0,
      y: 0
    })

    // v-model
    const userInfo = ref({
      name: '',
      checked: false,
      request: [],
      prefecture: '',
      gender: '',
      message: ''
    })
    const changeMouseposition = ($event: MouseEvent, num: number) => {
      position.value.x = $event.clientX * num
      position.value.y = $event.clientY * num
    }

    // v-if
    const bloodtype = ref('')
    // v-for
    const navs = ['Home', 'About', 'Works', 'Contact']
    const todo = {
      title: 'メールを送る',
      priority: '高',
      data: new Date()
    }

    return {
      url,
      arributeName,
      num,
      event,
      isActive,
      isError,
      increment,
      position,
      changeMouseposition,
      userInfo,
      bloodtype,
      navs,
      todo
    }
  }
}
</script>

<style scoped>
.color-orange {
  color: orange;
}
.color-green {
  color: green;
}
.directive-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.flex-wrapper {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.active {
  font-size: 3rem;
}
.underline {
  border-bottom: 2px dotted red;
}
</style>
