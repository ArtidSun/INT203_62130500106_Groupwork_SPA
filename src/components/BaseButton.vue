<template>
  <button @click="buttonClick" class="btn" :class="[bgcolor, txtcolor]">
    <slot>{{ label }} </slot>
  </button>
</template>
<script>
export default {
  props: ['bgcolor', 'txtcolor', 'label'],

  emits: ['btn-click'],

  methods: {
    buttonClick() {
      this.$emit('btn-click', {
        label: this.label
      })
    }
  }
}
</script>
