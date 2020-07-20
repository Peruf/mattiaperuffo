<template>
  <div class="row dark pb-5 titolo">
          <router-link :to="ToBack" class="col-2 mt-5 pl-5 d-none d-lg-block">
              <i class="fas fa-arrow-left fa-lg"></i>
              <span class="back ml-2">{{back}}</span>
          </router-link>
          <div class="title col">
            <span class="date md-title text-white">{{data}}</span>
            <p class="mt-3"><span class="display-3 highlight pl-2 pr-2">{{nome}}</span></p>
          </div>
          <router-link :to="ToForward" class="col-2 mt-5 pr-5 d-none d-lg-block">
              <span class="back">{{to}}</span>
              <i class="fas fa-arrow-right fa-lg ml-2"></i>
          </router-link>
      </div>
</template>

<script>
export default {
    props: ['ToBack','back','data','nome','to','ToForward']
}
</script>

<style>
.titolo{
    width: 100vw;
}
@media only screen and (max-width: 600px){
    .titolo{
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }
}
</style>