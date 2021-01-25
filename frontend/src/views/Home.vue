<template>
  <section class="home">
    <a class="btn btn-primary" href="/signup">s'inscrire</a>
    <a class="btn btn-info" href="/login">se connecter</a>
  </section>
</template>

<script>
export default {
  name: 'Home',

  beforeCreate(){
    //si l'utilisateur est déjà connecté, renvoi direct vers la page de forum
    if(localStorage.getItem("token")){
      window.location = window.location.origin + "/forum";
    }
  }
}


</script>

<style scoped lang="scss">
img{
  max-width: 400px;
}

section {
 background-color: teal;
    margin-top: 250px;
    border: solid 2px;
    display: inline-table;
    padding-top: 10px;
}

a{
  font-size: x-large;
  margin: 1% 1% 5% 1%;
}

</style>