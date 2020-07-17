<template>
  <div class="container-fluid dark">
    <navbar></navbar>
    <titolo ToBack="/" back="Home" :data="null" nome="Curriculum" to="Portfolio" ToForward="/portfolio"></titolo> 
    <div class="row">
      <div class="col-12 col-lg-1"></div>
      <div class="col-12 col-lg-5 pt-5 pl-5 pr-5">
        <h5>EMPLOYMENT</h5>
        <hr />
        <h5>JULY 2019 - SEPTEMBER 2019</h5>
        <div class="ml-0 ml-md-5 mt-4">
          <h2>Waiter for Il Gelataio di Vicenza srl</h2>
          <ul>
            <li>Customer service desk</li>
            <li>Cleaning the machines and the place</li>
          </ul>
        </div>
        <h5>JULY 2017 - SEPTEMBER 2017</h5>
        <div class="ml-0 ml-md-5 mt-4">
          <h2>Trainership for Open Sky srl</h2>
          <ul>
            <li>Testing ADSL and Sat technologies</li>
            <li>Coding in Bash Script</li>
          </ul>
        </div>
        <h5>EDUCATION</h5>
        <hr />
        <h5>SEPTEMBER 2018 - NOW </h5>
        <div class="ml-0 ml-md-5 mt-4">
          <p>Università degli Studi di Trento</p>
          <h2>Bachelor Degree in UX Design</h2>
          <ul>
            <li>Course focus sed on human-computer interaction</li>
            <li>Studies in research with people</li>
            <li>Studiesin application’sprototyping</li>
          </ul>
        </div>
        <h5>SEPTEMBER 2013 - AUGUST 2018</h5>
        <div class="ml-0 ml-md-5 mt-4">
          <p>ITIS A. Rossi</p>
          <h2>IT Tech</h2>
          <ul>
            <li>Studies of programming languages</li>
            <li>Studies of network and computer systems</li>
          </ul>
        </div>
        <h5>HOBBIES</h5>
        <hr />
        <div class="ml-0 ml-md-5 mt-4">
          <h2>Playing the Guitar</h2>
          <p>I love music and playing various musical instrument like guitar and ukulele. I'm attempting to play piano and harmonica</p>
        </div>
        <div class="ml-0 ml-md-5 mt-4">
          <h2>Graphic Design</h2>
          <p>In my free time I realise photo manipulation and digital illustrations</p>
        </div>
      </div>
      <div class="col-12 col-lg-1"></div>
      <div class="col p-5">
        <h5>INFORMATIONS</h5>
        <hr />
        <div class="container d-none d-md-block">
          <div class="row">
            <div class="col bold">
              <p>Name:</p>
              <p>DoB:</p>
              <p>Nationality:</p>
              <p>Email:</p>
              <p>Phone:</p>
              <p>Address:</p> <br>
              <p>Role:</p>
            </div>
            <div class="col right">
              <p>Mattia Peruffo</p>
              <p>10 December 1999</p>
              <p>Italian</p>
              <p>mattia.peruffo.99@gmail.com</p>
              <p>3455856697</p>
              <p>Via Da Palestrina 142 <br> 36100 - Vicenza</p>
              <p>UX/UI Designer</p>
            </div>
          </div>
        </div>
        <div class="container-fluid d-block d-md-none">
          <div class="row">
            <div class="col px-0">
              <p><b>Name: </b> Mattia Peruffo</p>
              <p><b>DoB: </b> 10 December 1999</p>
              <p><b>Nationality: </b>Italian</p>
              <p><b>Email: </b>mattia.peruffo.99@gmail.com</p>
              <p><b>Phone: </b>3455856697</p>
              <p><b>Address: </b>Via Da Palestrina 142 (VI)</p> 
              <p><b>Role: </b>UX/UI Designer</p>
            </div>
          </div>
        </div>
        <h5 class="mt-4">LANGUAGES</h5>
        <hr />
        <div class="container d-none d-md-block">
          <div class="row">
            <div class="col bold">
              <p>Native Speaker:</p>
              <p>Second Language:</p>
              <p>Third Language:</p>
            </div>
            <div class="col right">
              <p>Italian</p>
              <p>English - B2</p>
              <p>Spanish - A1/b</p>
            </div>
          </div>
        </div>
        <div class="container-fluid d-block d-md-none">
          <div class="row">
            <div class="col px-0">
              <p><b>Native Speaker: </b>Italian</p>
              <p><b>Language: </b>English - B2</p>
              <p><b>Third Language: </b>Spanish - A1/b</p>
            </div>
          </div>
        </div>
        <h5 class="mt-4">ABOUT ME</h5>
        <hr />
        <p>I'm a solar person. I play the guitar but unfortunatly not in a band. I'm a transfer student in Trento so I'm indipendent
          and resourcefoul. I made volunteering for Poplar in 2019, one of the biggest festival in Trento. I'm a scout and I was an 
          educator. I played basketball for several years in many teams in Vicenza, so I'm a big fan of teamwork.
        </p>
        <h5 class="mt-4">PROFESSIONAL SKILLS</h5>
        <hr />
        <h2>Programming Languages</h2>
        <div class="container d-none d-md-block">
          <div class="row">
            <div class="col bold">
              <p>Main:</p> <br>
              <p>Framework:</p><br>
              <p>Other:</p>
            </div>
            <div class="col right">
              <p>HTML - PHP - CSS <br> MYSQL- JavaScript</p>
              <p>Vue.js - Bootstrap <br> Vue Material </p>
              <p>C - C++ - C# - Java</p>
            </div>
          </div>
        </div>
        <div class="container-fluid d-block d-md-none">
          <div class="row">
            <div class="col px-0">
              <p><b>Main: </b>HTML - PHP - CSS - MYSQL - JavaScript</p>
              <p><b>Framework: </b>Vue.js - Bootstrap - Vue Material</p>
              <p><b>Other: </b> C - C++ - C# - Java</p>
            </div>
          </div>
        </div>
        <h2>Software</h2>
        <div class="container d-none d-md-block">
          <div class="row">
            <div class="col ">
              <p>Main:</p><br>
              <p>Other:</p>
            </div>
            <div class="col right">
              <p>Photoshop - Axure <br> Illustrator - Balsamiq</p>
              <p>InDesign - InVision</p>
            </div>
          </div>
        </div>
        <div class="container-fluid d-block d-md-none">
          <div class="row">
            <div class="col px-0">
              <p><b>Main: </b> Photoshop - Axure - Illustrator - Balsamiq</p>
              <p><b>Other: </b> InDesign - InVision</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import titolo from '../components/title'
import navbar from '../components/navbar'

export default {
  title: "Mattia Peruffo | Curriculum",
  components: {
    titolo: titolo,
    navbar: navbar
  }
};
</script>

<style>
hr{
  height: 1px;
  background-color: #ea882f;
  color: #ea882f;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
h5{
  color: #ea882f !important;
  font-weight: 400;
}
b, .bold{
  font-weight: 700;
}
.right{
  text-align: right;
}
@media only screen and (max-width: 600px){
}
</style>