<template>
  <section>
    <h1>Inscription</h1>
    <p>Veuillez renseigner tous les champs ci-dessous pour vous inscrire.</p>
    <form class="container" name="signup" id="signup">
      
      <div class="row">

        <div class="col-md-5 offset-md-1">
          <label for="name">Nom :</label>
          <input type="text" required name="name" id="name">
        </div>

        <div class="col-md-4">
          <label for="surname">Prénom :</label>
          <input type="text" required name="surname" id="surname">
        </div>

      </div>

      <div class="row">

        <div class="col-md-5 offset-md-1">
          <label for="pseudo">Pseudo :</label>
          <input type="text" required name="pseudo" id="pseudo">
        </div>

        <div class="col-md-4">
          <label for="email">Email :</label>
          <input type="email" id="email" required name="email">
        </div>

      </div>

      <div class="row">

        <div class="col-md-5 offset-md-1">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" required name="password">
        </div>

        <div class="col-md-4">
          <label for="password-confirmation">Confirmation :</label>
          <input type="password" id="password-confirmation" required>
        </div>

      </div>
  
      <div class="row">

        <div class="col-md-5 offset-md-1">
          <label for="job">Poste dans l'entreprise :</label>
          <input type="text" required name="job" id="job">
        </div>

      </div>

      <button class="btn btn-primary">Inscription</button>

    </form>
  </section>
</template>

<script>

export default {
  name: 'signup',
  mounted(){
    //vérification de la saisie de l'utilisateur au moment de celle-ci
    const inputs = document.getElementsByTagName("input");
    for(let input of inputs){
      input.addEventListener("input", function(){
        if(input.value.length < 3){
          input.className = "invalid";
        }
        else{
          input.className = "valid";
        }
      });
    }
    //vérification de la saisie d'un email conforme
    const regexEmail = /^\S+@[a-zA-Z]{2,}\.[a-zA-Z]{2,4}$/;
    const email = document.getElementById("email");
    email.addEventListener("input", function(){
      if(!regexEmail.test(email.value)){
        email.className = "invalid";
      }
      else{
        email.className = "valid";
      }
    });
    //Vérification que le deuxième mot de passe est identique au premier
    const password = document.getElementById("password");
    const passwordConfirmation = document.getElementById("password-confirmation");
    passwordConfirmation.addEventListener("input", function(){
      if(passwordConfirmation.value !=  password.value){
      passwordConfirmation.className = "invalid";
      password.className = "invalid";
      }
      else{
        passwordConfirmation.className = "valid";
        password.className = "valid";
      }
    })

    //Evénement à l'envoi du formulaire
    const signup = document.getElementById("signup");
    signup.addEventListener("submit", function(e){
      e.preventDefault();
      //Si le formulaire n'est pas conforme
      if(document.getElementsByClassName("invalid").lenght > 0){
        alert("Inscription impossible, veuillez renseigner correctement le formulaire.");
      }
      //Si le formulaire est conforme
      else{
        //récupération des données du formulaire
        const form = new FormData(signup);
        let user = {};
        for(let key of form.keys()){
          user[key] = form.get(key);
        }
        //options de la requêtes
        const options = {
          headers : {
            "Content-type" : "application/json"
          },
          method : "POST",
          body : JSON.stringify({user : user})
        };
        //envoi du formulaire
        fetch("http://localhost:3000/api/auth/signup", options)
        .then(function(response){
          if(response.ok){
            alert("Vous êtes bien inscrit! Vous pouvez maintenant vous connecter.");
            window.location = window.location.origin;
          }
          else{
            console.log("Mauvaise réponse du réseau.");
          }
        })
        .catch(function(error){
          console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
        });
      }
      return false
    });
  }
};

</script>

<style scoped lang="scss">
section {
    display: inline-table;
    background-color: teal;
    margin-top: 150px;
    border: solid 2px;
}
h1{
  margin-bottom: 2%;
}
p{
  margin-bottom: 2%;
}
.container{
  max-width: 1000px;
}
.col-md-5, .col-md-4{
  text-align: end;
  margin-bottom: 4%;
}

input{
  margin-left: 5px;
  margin-right: 5%;
}

.valid{
  border-color: green;
}

.invalid{
  border-color: red;
}

button{
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: large;
}

img{
    max-width: 80%;
}

@media all and (max-width : 768px){
  .col-md-5, .col-md-4{
    text-align: start;
  }
}
</style>
