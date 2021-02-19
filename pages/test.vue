<template>
  <div>
    {{ $store.getters['whatsOnNow/whatsOnNow'] }}
  </div>
</template>

<script>
export default {
  name: 'TestPage'
}
</script>
