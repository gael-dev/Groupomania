<template>
  <div id="app">
    <div id="nav">
      <a href="/forum" id="home"><img src="./assets/icon-left-font-monochrome-black.svg" alt="Logo Groupomania" id="logoGroupomania"></a>
      <button class="btn btn-info" id="disconnect">Deconnexion</button>
      <h1>Bienvenue sur le réseau social Made by <img src="../public/Gm mono.png" alt="monogramme" id="monogramme" > !</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: relative;
  background-color: teal;
  border-bottom: solid 3px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body{
  background-color: #0b1f44;
}


#disconnect{
  position: absolute;
  right: 10%;
}

img{
  max-width: 80%;
}

#monogramme {
  width: 5%;
  margin-top: 5px;
}

*{
  
  color: #d3515c;
}

.btn{
  background-color:  #0b1f44;
  border : solid #0b1f44;
}

.none{
  display: none;
}

@media all and (max-width : 960px){
  #nav{
      display: flex;
      flex-direction: column-reverse;
  }

  #disconnect{
      position: initial;
      max-width: 119px;
  }
}

</style>

<script>
  export default{
    mounted(){
      const disconnect = document.getElementById("disconnect");
      const home = document.getElementById("home");
      const logo = document.getElementById("logoGroupomania");
      const location = window.location;
      const origin = window.location.origin;
      //disparrition du boutton de déconnexion sur les pages où l'utilisateur n'est pas connecté + changement du lien principal
      if(location == origin + "/" || location == origin + "/signup" || location == origin + "/login"){
        disconnect.setAttribute("class", "none");
        home.setAttribute("href", "/");
        logo.setAttribute("src", "icon-left-font-monochrome-white.svg");
      }
      //événement de déconnexion
      disconnect.addEventListener("click", function(e){
        e.preventDefault();
        //suppression du token d'authentification, du UserIs et du modérateur
        localStorage.clear();
        window.location = origin + "/"
        return false;
      })
    }
  }
</script>
