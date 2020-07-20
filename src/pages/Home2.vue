<template>
  <div class="container-fluid">
    <div class="row first-row">
      <div class="imgS col-lg col-md-12 col-sm-12 col-xl d-block d-lg-none">
      </div>
      <div class="txt col-lg col-md-12 col-sm-12 col-xl light">
          <div class="container centered">
            <div class="row justify-content-around">
              <div class="col-2 d-none d-lg-block"></div>
              <p class="col iam display-4 align-self-center">I am</p>
            </div>
            <div class="row justify-content-around">
              <div class="col-2 d-none d-lg-block"></div>
              <p class="col name display-4">MATTIA PERUFFO</p>
            </div>
            <div class="row justify-content-center buttons">
              <div class="col-md-7 col-lg-3 portfolio"><router-link to="/portfolio" class="btn  btn-outline-primary btn-block">PORTFOLIO</router-link></div>
              <div class="col-md-7 col-lg-3 curriculum"><router-link to="/curriculum" class="btn  btn-outline-primary btn-block">CURRICULUM </router-link></div>
            </div>
          </div>
          <footer class="fixed-bottom container mb-lg-5">
              <div class="row justify-content-center">
                  <a class="col-md-1 col-sm-1 col-2 fab fa-facebook fa-lg" href="https://www.facebook.com/mattia.peruffo.790" target="_blank"></a>
                  <a class="col-md-1 col-sm-1 col-2 fab fa-instagram fa-lg" href="https://www.instagram.com/mattia_peruffo/" target="_blank"></a>
                  <a class="col-md-1 col-sm-1 col-2 fab fa-twitter fa-lg" href="https://twitter.com/mattia_peruffo" target="_blank"></a>
              </div>
          </footer>
      </div>
      <div class="img col-lg col-md-12 col-sm-12 col-xl d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  title: 'Mattia Peruffo'
}
</script>

<style> 
body{
  width: 100vw;
  height: 100vh;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
}
.img, .txt{
  height: 100vh;
}
body, html {
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
.white{
  color: white;
  opacity: 60%;
}
/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.txt{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
} 
.img{
    background-image: url(../assets/Me_Ferragosto.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}
.imgS{
    height: 25vh;
    background-image: url(../assets/SfondoCell.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}
.iam{
  font-weight: 100;
}
.name{
  font-weight: 700;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dark{
    background-color: #165f96 !important;
    color: #efefef !important;
}
.light{
    background-color: #fafafa !important;
    color: #165f96 !important;
}
.btn:hover, .button:active{
  background-color: #165f96 !important;
  border-color: transparent;
  color: white !important;
}
.btn-dark{
  background-color: transparent;
  border-color: #fff ;
  color: #fff;
}
.btn-dark:hover, .button:active{
  background-color: white !important;
  border-color: transparent;
  color: #165f96 !important;
}
footer{
  position: absolute !important;
  right: 0 !important;
  width: 50vw !important;
}
a{
  text-decoration: none !important;
  padding: 3% !important;
  color: white !important;
}
.btn{
  background-color: transparent;
  border-color: #165f96 ;
  color: #165f96 !important;
}
.fab{
  color: #165f96 !important;
}
.title{
    text-align: center;
    width: 100%;
    margin-top: 5vh;
}
.highlight {
  background: linear-gradient(180deg,rgba(255,255,255,0) 70%, #ea882f 40%);
}
.date{
    font-weight: 200 !important;
}
h2, h3, h4{
    font-weight: 700;
}
.display-3{
    font-weight: 400;
    letter-spacing: 2px;
}
.back{
    font-weight: 700;
    vertical-align: baseline;
}
p, li{
    font-size: 16px;
}
.orange{
    color: #ea882f !important;
}
.link{
  padding: 0 !important;
} 
/* medium device */
@media only screen and (max-width: 991.98px){
  .curriculum, .portfolio{
    margin-top: 3% !important;
  }
  .imgS{
    height: 50vh;
  }
  .txt{
    height: 67vh;
  }
}
/* telefono verticale */
@media only screen and (max-width: 600px){
  .imgS{
    height: 30vh;
  }
  .txt{
    height: 67vh;
  }
  .centered {
    position: absolute;
    top: 30vh;
  }
  .portfolio{
    margin-bottom: 5vh !important;
  }
  html, body {
    overflow: scroll;
  }
  .titleSmart{
      height: 100vh;
  }
  .tit{
      position: absolute;
      margin: 0;
      top: 50%;
      transform: translateY(-50%);
  }
}
/* lg device */
@media (min-width: 992px) { 
  .h25{
    min-height: 25vh;
  }
  .h75{
    min-height: 75vh;
  }
}
</style>