<template>
  <div class="container-fluid">
      <navbar></navbar>
      <titolo ToBack="/portfolio" back="Portfolio" data="september 2019 - january 2019" nome="PIG Course Project" to="IT Project" ToForward="/portfolio/IT_project"></titolo>
      <div class="row dark pt-5 pb-5 h75">
        <div class="col"></div>
        <div class="col-12 col-sm-12 col-xl-3 col-md-3 col-lg-3 align-self-center">
            <h2>INTRODUCTION</h2>
            <p>Our target was desining a mobile application in order to help everyone who wants to buy a plant from our nurseryman</p>
            <h2>MY ROLE</h2>
            <ul>
                <li>Design the search panel</li>
                <li>Design the report</li>
            </ul>
            <h2>PROCESS</h2>
            <ul>
                <li>Design Brief</li>
                <li>Map the Stakeholders</li>
                <li>Domain Analysis</li>
                <li>Identify Pain Points and Personas</li>
                <li>Design Concept</li>
                <li>High Fidelty Prototype</li>
            </ul>
        </div>
        <div class="col-12 col-sm-12 col-xl-3 col-md-3 col-lg-3">
            <img src="../../public/pig/Logo.png" alt="" class="mr-5">
        </div>
        <div class="col"></div>
      </div>
      <div class="row light pt-5 justify-content-around pb-5">
          <div class="col-3">
            <h2>STAKEHOLDERS</h2>
            <img src="../../public/pig/Stakeholders.png" alt="">
          </div>
          <div class="col-3">
            <h2>DOMAIN ANALYSIS</h2>
            <img src="../../public/pig/DomainAnalysis.png" alt="">
          </div>
          <div class="col-3">
            <h2>PERSONAS</h2>
            <img src="../../public/pig/Personas.png" alt="">
          </div>
      </div>
      <div class="row light pb-5 pt-5">
          <div class="col-1"></div>
          <div class="col-4 align-self-center">
              <h2>DESIGN CONCEPT</h2>
              <p>We decided to implement three main pages reachable with a bottom navi-gation bar: <br>
 - Search: for searching plants, witvh some filter or with the name. <br>
                 You can also use it for watching the catalog <br>
 - Favourites: in order to save the plants and set notification about position of the plants and to remind when you have to water them. <br>
 - Chat: for chatting with the nurseryman if you have problems or doubt. <br> <br>

You can also scan a QR code located in the plot sold by the nurseryman. </p>
          </div>
          <div class="col-1"></div>
          <div class="col">
              <img src="../../public/pig/DesignConcept.png" alt="">
          </div>
          <div class="col-1"></div>
      </div>
      <div class="row dark pb-5 pt-5 justify-content-center">
          <div class="col-5 align-self-center">
              <img src="../../public/pig/Prototype.png" alt="">
          </div>
          <div class="col-1"></div>
          <div class="col-5 align-self-center">
              <h2>HIGH FIDELTY PROTOTYPE</h2>
              <h4>Search</h4>
              <p>It is the main page. It can be reached by clicking the first icon of bottom navigation bar. Without 
any filter you can see the list of all the plants in the nursery. Every card che be opened making v
isible other informations about plants. You can also add the plant to your favourites.
Clicking on QR code icon you can scan a plant which can be added to favourites. It also gives some 
information about the plant you have scanned.</p>
              <h4>Favourites</h4>
              <p>This page can be reached clicking on the second icon of bottom navigation bar. This page contains 
every plant that has been added to favourites. If no plants had been added, an advertise would appear.
Every card has a slider that permits you to see the entire life and evolution of the plant. It is possible 
to add notifications clicking “Aggiungi + ” or remove it by pressing “Rimuovi - ”. </p>
              <h4>Chat</h4>
              <p>This page can be reached clicking on the third icon of bottom navigation bar.
You can use it for chatting with the nurseryman if you have problems or doubt. </p>
                <p>Link of the prototype: <a href="https://xecnyk.axshare.com/" class="orange link" target="_blank">https://xecnyk.axshare.com/</a> </p>
          </div>
      </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import titolo from '../components/title'
export default {
    title: 'Mattia Peruffo | PIG Project',
    components: {
        navbar: navbar,
        titolo: titolo
    }
}
</script>

<style scoped>
.h25{
    height: 25vh;
}
.h75{
    height: 75vh;
}
</style>