<template>
  <div class="container-fluid">
    <navbar></navbar>
    <titolo ToBack="/portfolio" back="Portfolio" data="march 2020 - june 2020" nome="IT Course Project" to="Curriculum" ToForward="/curriculum"></titolo>
    <div class="row dark pb-5 pt-5 h75">
        <div class="col"></div>
        <div class="col-12 col-sm-12 col-xl-3 col-md-3 col-lg-3 align-self-center">
            <h2>INTRODUCTION</h2>
            <p>We had to make a website with API, Vue.JS, Firebase and following Material Design rules. <br> 
            Our project is a web application where you can search for boardgames, rate them and get informations about them. </p>
            <h2>MY ROLE</h2>
            <ul>
                <li>Attend the graphic of the pages</li>
                <li>Design the games list page and the game informations page</li>
            </ul>
            <h2>PROCESS</h2>
            <ul>
                <li>Design Brief</li>
                <li>Design Concept</li>
                <li>Create the website</li>
            </ul>
        </div>
        <div class="col-1"></div>
        <div class="col-12 col-sm-12 col-xl-3 col-md-4 col-lg-5 align-self-center">
            <img src="../../public/it/Boardgame.png" alt="" class="mr-5">
        </div>
        <div class="col"></div>
    </div>
    <div class="row light pb-5 pt-5">
      <div class="col-1"></div>
          <div class="col-3 align-self-center">
            <h2>DESIGN BRIEF</h2>
            <p>In this phase we decided the argument of our project and what we want to do. <br>
            We immediatly decided to design a website about boardgames. <br>
            The next step was to find the APIs. We easily found them on<a class="orange" href="https://www.boardgameatlas.com/api/docs" target="_blank">Boardgameatlas.</a>
            </p>
            <h2>DESIGN CONCEPT</h2>
            <p>We decided to have a home page with the list of all games displayed as cards. Each card would have the image of the game, his name and the year of publication. <br>
            We implemented several page in order to filter the games, based on year of publication, number of players ecc... <br>
            The single game page has the game image and the main informations like, the price, the medium rate and the possibility to rate the game and add it to your favorites. <br>
            Since we wanted the site to be responsive we made the mockup even of the smartphone version.
            </p>
          </div>
          <div class="col">
              <img src="../../public/it/DesignConcept.png" alt="">
          </div>
          <div class="col-1"></div>
    </div>
    <div class="row dark pb-5 pt-5 justify-content-center">
          <div class="col-5 align-self-center">
              <img src="../../public/it/Cell.png" alt="">
          </div>
          <div class="col-1"></div>
          <div class="col-5 align-self-center">
              <h2>CREATE THE WEBSITE</h2>
              <h4>Search</h4>
              <p>Testo</p>
          </div>
      </div>
      <div class="row dark p-5 justify-content-center">
        <div class="col"><img src="../../public/it/Home.png" alt=""></div>
        <div class="col-1"></div>
        <div class="col"><img src="../../public/it/Drawer.png" alt=""></div>
      </div>
      <div class="row dark p-5 justify-content-center">
        <div class="col align-self-center"><img src="../../public/it/Gioco.png" alt=""></div>
        <div class="col-1"></div>
        <div class="col align-self-center"><img src="../../public/it/Giocatori.png" alt=""></div>
      </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import titolo from '../components/title'

export default {
  title: 'Mattia Peruffo | IT Project',
  components: {
        navbar: navbar,
        titolo: titolo
  }
};
</script>

<style>
.h25{
    height: 25vh;
}
.h75{
    height: 75vh;
}
</style>