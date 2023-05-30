<template>
  <div>
    <div class="step1">
      <h2>算出プロパティ</h2>
      <h3>{{ upperCaseTitle }}</h3>
      <p>{{ upperCaseMsg }}</p>
      <h2>Filter</h2>
      <h3>{{ title | upperCase }}</h3>
      <p>{{ msg | upperCase }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  filters: {
    upperCase(val: string): string | null {
      if (!val) {
        return null;
      }
      return val.toUpperCase();
    },
  },
})
export default class OriginalFilter extends Vue {
  title = "hello vue.js";
  msg = "the progressive javascript framework";
  //computed
  get upperCaseTitle(): string {
    return this.title.toUpperCase();
  }
  get upperCaseMsg(): string {
    return this.msg.toUpperCase();
  }
}
</script>
<style></style>
