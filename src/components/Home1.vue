<template>
  <div>
    <img src="../assets/Me.png" draggable="false">
    <div class="centered">
        <div class="txt">
            <h1 class="iam display-4">I am</h1>
            <h1 class="name display-4">MATTIA PERUFFO</h1>
        </div>
        <button type="button" class="btn btn-lg">Portfolio</button>
        <button type="button" class="btn btn-lg">Curriculum</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(45deg,#eeaf1e 5%, #f8eb1f 30%, #3dc353);
  color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.iam{
  font-weight: 100;
}
.name{
  font-weight: 700;
}
.btn{
  background-color: transparent;
  border-color: #fff ;
  color: #fff;
  margin: 10%;
  text-shadow: -4px 0px 30px rgba(0,0,0,0.50); 
  /* box-shadow: -4px 10px 46px -21px rgba(0,0,0,0.75);  */
}
.btn:hover{
  background-color: #3dc353;
  border-color: transparent;
  color: white;
}
.txt{
  text-shadow: -4px 10px 46px rgba(0,0,0,0.75); 
  
}
#app{
  margin: auto;
  width: 50%;
  padding: 10px;
}
img{
  position: fixed;
  user-select: none;
  bottom: 0%;
  right: 100px;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>