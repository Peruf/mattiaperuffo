<template>
<div class="container-fluid dark pb-4">
  <titolo ToBack="/" back="Home" :data="null" nome="Portfolio" to="Curriculum" ToForward="/curriculum"></titolo>  
  <div class="rowm d-sm-none d-block p-3"></div>
  <div class="row dark justify-content-around">
      <card img="Muse.png" path="/portfolio/semiotic_project" data="March 2019 - May 2019" titolo="Semiotic Course Project" descrizione="We had to propose a plan in order to increase the income of Muse of 10% and create a card to promote it."></card>
      <card img="PocketPlant.png" path="/portfolio/pig_project" data="September 2019 - January 2020" titolo="PIG Course Project" descrizione="Our target was desining a mobile application in order to help everyone who wants to buy a plant from our garden."></card>
      <card img="Boardgame.svg" path="/portfolio/IT_project" data="March 2020 - June 2020" titolo="IT Course Project" descrizione="We had to make a website with API, Vue.JS, Firebase and following Material Design rules."></card>
  </div>
</div>
</template>

<script>
import card from '../components/card.vue'
import titolo from '../components/title'

export default {
  title: 'Mattia Peruffo | Portfolio',
  components:{
    card: card,
    titolo: titolo,
  },

}
</script>

<style scoped>
.container-fluid{
  min-height: 100vh;
}
</style>