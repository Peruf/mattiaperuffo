<template>
    <div>
        <div class="col-1 d-block d-sm-none"></div>
        <div class="col-lg-3 col-md-5 col pb-5 justify-content-center align-self-center">
            <div class="card light mb-3" style="width: 18rem;">
                <img :src="img" class="card-img-top pointer" @click="to(path)">
                <div class="card-body">
                    <span class="md-caption light">{{data}}</span>
                    <h5 class="card-title pointer" @click="to(path)">{{titolo}}</h5>
                    <p class="card-text">{{descrizione}}</p>
                </div>
            </div>
        </div>
        <div class="col-1 d-block d-sm-none"></div>
    </div>
</template>

<script>
export default {
    methods:{
        to: function(route){
            this.$router.push({path: route});
        }
    },
    props:['img','path','data','titolo','descrizione']
}
</script>

<style>
.pointer{
  cursor: pointer;
}
.card{
    height: 460px;
}
</style>