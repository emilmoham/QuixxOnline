<template>
    <button class="colorButton " :class="{ selected: isSelected }" v-on:mousedown="toggleCross()" >{{ label }}</button>
</template>

<script>
export default {
  name: "CrossButton",
  props: {
    label: Number
  },
  data: function () {
    return {
      isSelected: false
    }
  },
  methods: {
    toggleCross: function() {
      this.isSelected = !this.isSelected
    }
  }
}
</script>

<style scoped>
button {
  font-size: large;
	text-align: center;
	border: 0;
	border-radius: 15%;
	
	width: 40px;
	height: 40px;
	
	margin: 0px 2px 0px 2px;
}
</style>