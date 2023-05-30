<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: "<button @click=onClick>Click!</click>",
})
export default class MyComponent extends Vue {
  message: string = "Good!";
  onClick(): void {
    window.alert(this.message);
  }
}
</script>
