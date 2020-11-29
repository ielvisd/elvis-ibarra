<template>
  <div class="flex justify-between">
    <NuxtLink class="text-primary font-bold hover:underline">
      <slot>default</slot>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>
