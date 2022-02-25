<template>
  <div class="Demande">
    <myToolbar/>
    <div>
      <b-alert show variant="danger" style="padding: 150px">
        <h4 class="alert-heading">Oups...</h4>
        <p>
          Dommage, vous venez ici trop tôt
        </p>
        <hr>
        <p class="mb-0">
         Cependant vous pouvez retourner au menu.
        </p>
        <b-button pill variant="outline-danger" href="/" >Cliquez ici</b-button>
      </b-alert>
    </div>
  </div>
</template>

<script>
import myToolbar from "@/components/MyToolbar";



export default {
  name: "Demande",
  components: {myToolbar},
}
</script>

<style scoped>
