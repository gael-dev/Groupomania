<template>
  <section id="talk">
    <h1>Exprimez-vous !</h1>
    <form id="post">
      <label for="text">message :</label>
      <textarea name="message" rows="5" cols="100" id="text" required></textarea>
      <button class="btn btn-info" >Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'post',

  mounted(){
    const post = document.getElementById("post");
    //événement submit de l'envoi d'un nouveau message
    post.addEventListener("submit", function(e){
      e.preventDefault();
      //récupération du texte écrit par l'utilisateur
      const message = document.getElementById("text").value;
      //options de la requête
      const options = {
        headers : {
          "Content-type" : "application/json",
          authorization : localStorage.getItem("userId") + " " + localStorage.getItem("token")
        },
        method : "POST",
        body : JSON.stringify({message : message, userId : localStorage.getItem("userId")})
      };
      //envoi du nouveau message
      fetch("http://localhost:3000/api/messages/", options)
      .then(function(response){
        if(response.ok){
          //l'envoi a réussi
          //redirection vers la page du forum
          window.location = window.location.origin + "/forum";
        }
        else{
          console.log("Mauvaise réponse du réseau.");
        }
      })
      .catch(function(error){
        console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
      });
    });
  }
}
</script>

<style scoped lang="scss">
h1{
  margin-bottom: 3%;
}

form{
    display: inline-table;
    background-color: teal;
    margin-top: 150px;
    border: solid 2px;
    padding: 5px;
}

label{
  display: block;
}

textarea{
  max-width: 95%;
}

button{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
