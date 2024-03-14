const { createApp, h, reactive } = Vue;

const app = createApp({
  setup() {
    const data = reactive({
      title: "はじめてのVue.js",
      ISBN: 12345,
    });
    console.log(h("h1", `ISBN${this.ISBN}-${this.title}`));
    // hはレンダー関数で、コンポーネントの描画を制御するために使用
    return () => h("h1", `ISBN${data.ISBN}-${data.title}`);
  },
});
app.mount("#app1");
const elem = document.createElement("p");
console.log(elem);
console.log(document);
//JavaScriptオブジェクトのプロパティをすべて見る
console.dir(document);
