<template>
    <div class="ScoreCard">
        <color-group id="red" v-on:changeScore="updateScore($event)"></color-group>
        <color-group id="yellow"></color-group>
        <color-group id="green" v-bind:reversed="true"></color-group>
        <color-group id="blue" v-bind:reversed="true"></color-group>
        <div class="belowColors">
          <div class="left">
            <div class="pointsDescription ">
              <p>x</p>
              <hr>
              <p>points</p>
            </div>
            <div 
              v-for="(crossCountValue, index) in crossCountValues"
              :key="index"
              class="pointsDescription">
              <p>{{ index + 1 }}</p>
              <hr>
              <p>{{ crossCountValue }}</p>
            </div>
          </div>
          <div class="right">
            <p>Skip = - {{ skipPenalty }}</p>
            <input v-for="n in allowedSkips" class="skip" type="checkbox" :key="n"/>
          </div>
        </div>
        <div class="score">
          <div><input class="tbScore" id="red" value="0" readonly /></div>
          <p>+</p>
          <div><input class="tbScore" id="yellow" value="0" readonly /></div>
          <p>+</p>
          <div><input class="tbScore" id="green" value="0" readonly /></div>
          <p>+</p>
          <div><input class="tbScore" id="blue" value="0" readonly /></div>
          <p>-</p>
          <div><input class="tbScore" id="skipPenalty" value="0" readonly /></div>
          <p>=</p>
          <div><input class="tbScore" id="Total" value="0" readonly /></div>
        </div>
    </div>
</template>

<script>
import ColorGroup from './ColorGroup.vue'

export default {
  name: 'ScoreCard',     
  components: {
    ColorGroup
  },
  data: function() {
    return {
      crossCountValues: [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78],
      allowedSkips: 4,
      skipPenalty: 5
    }
  },
  methods: {
    updateScore: function(stuff) {
      this.console.log(stuff);
    }
  }
}
</script>

<style>

.ScoreCard {
  display: inline-block;
  max-width: 600px;
}

.left {
  float: left;
}

.right {
  float: right;
}

#red {
  background-color: #c63343;
}

#red button.colorButton {
  background-color: #d7c3be;
	color: #c63343
}
#red button.colorButton.selected {
  background-color: #c77763;
}


#yellow {
  background-color: #ddb225;
}

#yellow button.colorButton {
  background-color: #d9d2bf;
	color: #ddb225;
}
#yellow button.colorButton.selected {
  background-color: #e5c457;
}


#green {
  background-color: #327f58;
}

#green button.colorButton {
  background-color: #b4c3be;
	color: #327f58;
}
#green button.colorButton.selected {
  background-color: #5fa48d;
}


#blue {
  background-color: #445ca0;
}

#blue button.colorButton {
  background-color: #b3bacd;
	color: #445ca0;
}
#blue button.colorButton.selected {
  background-color: #5d71a9;
}

.pointsDescription {
	display: inline-block;
	
	font-size: small;
	text-align: center;
	
	border: 2px solid black;
	border-radius: 10px;

  min-width: 30px;
	
	margin: 0 2px 0 2px;
}


.belowColors {
  width: 100%;
}

.score {
  width: 100%;
  text-align: center;
  clear: both;
}

.score div {
  display: inline-block;
  width: 10%;
}

.score p {
  display: inline-block;
  width: 5%;
}

.tbScore {
  width: 100%;
  text-align: center;
  border: 1px solid black;
}

</style>