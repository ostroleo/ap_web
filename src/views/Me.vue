<template>
  <div class="Me">
    <myToolbar/>
    <b-container border-variant="dark" style="padding: 100px 300px;">
  <b-card border-variant="dark" >
    <h1 class="b-card__title">Espace Perso</h1>
    <p class="b-card__subtitle">Voilà donc qui je suis...</p>
<!--   <p>{{INTERNAUTE.NOMINTER}} {{INTERNAUTE.PRENOMINTER}} {{INTERNAUTE.EMAILINTER}}</p>-->
    <b-img center src="/user.png" alt="image utilisateur"></b-img><br>


    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </b-card>
    </b-container>
  </div>

</template>

<script>

import myToolbar from "@/components/MyToolbar";
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {myToolbar},
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId === -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 100%;
}

body {
/*  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  min-height: 100vh;*/
  padding:32px;
}

img {
  max-width: 100%;
  border-radius: 8px;
}

.card {
  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.card__title {
  text-align:center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}

.button {
  background: #2196F3;
  color:white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: .4s background-color;
}

.card__action {
  color:#2196F3;
  text-decoration: underline;
}

.card__action:hover {
  cursor:pointer;
}

.button:hover {
  cursor:pointer;
  background: #1976D2;
}

.button--disabled {
  background:#cecece;
  color:#ececec
}
.button--disabled:hover {
  cursor:not-allowed;
  background:#cecece;
}
</style>