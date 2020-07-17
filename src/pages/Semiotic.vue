<template>
  <div class="container-fluid">
      <navbar></navbar>
      <titolo ToBack="/portfolio" back="Portfolio" data="march 2019 - may 2019" nome="Semiotic Course Project" to="PIG Progect" ToForward="/portfolio/pig_project"></titolo>  
      <div class="row dark pb-5">
        <div class="col-2"></div>
        <div class="col-12 col-sm-12 col-xl-3 col-md-3 col-lg-3 mt-5">
            <h2>INTRODUCTION</h2>
            <p>We had to propose a plan in order to increase the income of Muse of 10% and create a card to promote it</p>
            <h2>MY ROLE</h2>
            <ul>
                <li>Think about the proposal</li>
                <li>Design the card</li>
                <li>Design the report</li>
            </ul>
            <h2>PROCESS</h2>
            <ul>
                <li>Profiling of Users</li>
                <li>Profiling of Consumers</li>
                <li>Create VPD and FIT</li>
                <li>Implementing the idea</li>
                <li>Printing tests</li>
                <li>Realize the final product</li>
            </ul>
        </div>
        <div class="col-12 col-sm-12 col-xl-5 col-md-5 col-lg-5 pt-5 pt-md-0">
            <img src="../../public/semiotic/Pc.png" alt="" class="mr-5">
        </div>
      </div>
      <div class="row light pb-5">
          <div class="col-1 d-none d-md-block"></div>
            <div class="col-5 mt-5 align-self-center d-none d-md-block">
                <img src="../../public/semiotic/VPD.png" alt="VPD" class="vpd">
            </div>
            <div class="col-12 col-md mt-5 ml-md-5">
                <h2>PROFILING OF USERS</h2>
                <p>We defined the possible target for our product. <br> We chose the primary school because if they like it they will probably return with their parents.</p>
                <h2>PROFILING OF CONSUMERS</h2>
                <p>The teachers are the target for our product. <br> 
                Seeing the flyer they will probably decide to support the initiative. <br> 
                In a second moment they will give the flyer to the class and help the students fold it in an origami. <br>
                In this way the experience will already start at school.
                </p>
                <h2>CREATING VPD AND FIT</h2>
                <p>We focussed on how the school trip is a more dynamic way of learning than frontal lessons.  <br>
                It also helps the class to form a solid group.  <br>
                Furthermore we wanted to reduce teachers’ stress and offer them a trip in which they could learn something instead of just following the children.</p>
                <h2>IMPLEMENTING THE IDEA</h2>
                <p>We had a brainstorming session in which we decided that we wanted to entertain the children with a multisensory experience and develop specific courses for the teachers. <br>
                We thought about a flyer that would contain all the information and could be transformed into an origami, the key to enter the laboratory.</p>
                <h2>PRINTING TESTS</h2>
                <p>We did some printing tests to make sure the origami was simple to do and that there would not be problem with the card thickness. </p>
            </div>
            <div class="col-2"></div>
            <div class="col-12 mt-5 align-self-center d-block d-md-none">
                <img src="../../public/semiotic/VPD.png" alt="VPD" class="vpd">
            </div>
    </div>
    <div class="row dark pb-5 pt-5">
        <div class="col-2 d-none d-md-block"></div>
        <div class="col-1 d-block d-md-none"></div>
        <h2 class="col">FINAL PRODUCT</h2>
        <div class="col-1 d-block d-md-none"></div>
    </div>
    <div class="row dark pb-5 justify-content-around">
        <div class="col-1"></div>
        <img src="../../public/semiotic/VolantinoRetro.png" alt="" class="col-md-3 col">
        <img src="../../public/semiotic/VolantinoFronte.png" alt="" class="col-md-3 col">
        <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import titolo from '../components/title'
export default {
    title: 'Mattia Peruffo | Semiotic Project',
    components: {
        navbar: navbar,
        titolo: titolo
    },
    data: function(){
        return{
            ciao: '/portfolio',
        }
    }
}
</script>

<style scoped>
img{
    max-height: 800px;
}
.row{
    overflow-x: hidden;
}
</style>