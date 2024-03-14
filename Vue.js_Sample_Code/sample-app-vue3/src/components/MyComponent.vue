<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const message = 'Good!'
    const onClick = () => {
      window.alert(message)
    }
    return {
      message,
      onClick
    }
  }
}
</script>
