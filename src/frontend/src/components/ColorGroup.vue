<template>
    <div v-if="reversed === true" class="colorGroup">
        <cross-button
          v-for="(rollValue,index) in rollSetDescending" 
          :key="index"
          v-on:changedState="select(index)"
          v-bind:label="rollValue" ></cross-button>
    </div>
    <div v-else class="colorGroup">
        <cross-button
          v-for="(rollValue,index) in rollSetAscending" 
          :key="index" 
          v-on:changedState="select(index)"
          v-bind:label="rollValue" ></cross-button>
    </div>
</template>

<script>
import CrossButton from './CrossButton.vue'

export default {
  name: 'ColorGroup',
  components: {
    CrossButton
  },
  props: {
    reversed: Boolean
  },
  data: function() {
    return {
      rollSetAscending: [2,3,4,5,6,7,8,9,10,11,12],
      rollSetDescending: [12,11,10,9,8,7,6,5,4,3,2],
      crossed: [false,false,false,false,false,false,false,false,false,false,false,false]
    }
  },
  methods: {
    select: function(buttonIndex) {
      this.crossed[buttonIndex] = !this.crossed[buttonIndex];
      this.$emit('changeScore', this.getScore());
    },
    getScore: function() {
      return this.crossed.filter(x => x == true).length
    },
    log: function(message) {
      console.log(message);
    }
  }
}
</script>

<style scoped>
div.colorGroup {
  border: 1px solid black;
	padding: 10px;
	margin: 5px;
  text-align: center;
}
</style>



