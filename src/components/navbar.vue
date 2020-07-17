<template>
  <div>
      <div class="toolbar dark row d-lg-none d-block navbar">
        <div class="col"><i class="fas fa-bars fa-lg mt-3" @click="showNavigation = true" id="burger"></i></div>
    </div>
    <md-drawer :md-active.sync="showNavigation" md-swipeable class="light">
        <div class="container dark pb-5">
            <div class="row">
                <div class="col mt-3 ml-2">
                    <img src="../../public/MeDrawer.png" alt="Mattia Peruffo" class="round mb-3">
                    <p class="bold mt-2 mb-0">Mattia Peruffo</p>    
                    <a href="mailto:mattia.peruffo.99@gmail.com" class="link">mattia.peruffo.99@gmail.com</a>
                </div>
            </div>
        </div>
        <md-list class="light ml-2">
            <md-list-item to="/portfolio" @click="showNavigation = false">
                <span class="light bold">PORTFOLIO</span>
            </md-list-item>
            <md-list-item to="/portfolio/semiotic_project" @click="showNavigation = false">
                <span class="light">Semiotic Project</span>
            </md-list-item>

            <md-list-item to="/portfolio/pig_project" @click="showNavigation = false">
                <span class="light">PIG Project</span>
            </md-list-item>

            <md-list-item to="/portfolio/IT_project" @click="showNavigation = false">
                <span class="light">IT Project</span>
            </md-list-item>
            <hr class="drawerHr">
            <md-list-item to="/curriculum" @click="showNavigation = false">
                <span class="light bold">CURRICULUM</span>
            </md-list-item>
        </md-list>
    </md-drawer>
    
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            showNavigation: false
        }
    },
}
</script>

<style>
.md-toolbar{
    color: white!important;
    font-weight: 700;
    font-size: 20px;
}
.round{
    height: 70px !important;
    border-radius: 50px;
}
.drawerHr{
    height: 0.3px;
    width: 90%;
    background-color: #165f96;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 100%;
}
.bold{
    font-weight: 700;
}

</style>