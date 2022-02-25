<template>

  <div class="home">
    <myToolbar/>


    <b-container border-variant="dark" style="padding: 300px;">
      <b-input v-model="searhKey" type="search" id="search" placeholder="Rechercher" autocomplete="off"></b-input><br>
      <div>
        <b-card
            overlay
            img-src="/service.jpg"
            img-alt="Image service"
            text-variant="black"
            title="Besoin d'un service?"
        >

          <b-button pill href="/Demande" >Cliquez ici</b-button>
        </b-card>
      </div><br><br>

      <div class="row">

        <div v-for="SERVICE in services " :key="SERVICE.NUMSERVICE">

          <b-col>


            <b-card border-variant="dark" class="overflow-hidden" style="max-width: 540px; align-content: center">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="/jardin.jpg" rounded fluid alt="thème jardinage "
                              v-if="SERVICE.IDTHEME === 1"></b-card-img>
                  <b-card-img src="/bricolage.jpg" fluid alt="thème bricolage "
                              v-else-if="SERVICE.IDTHEME === 2"></b-card-img>
                  <b-card-img src="/course.jpg" fluid alt="thème course "
                              v-else-if="SERVICE.IDTHEME === 3"></b-card-img>
                  <b-card-img src="/menage.jpg" fluid alt="thème tâches ménagères "
                              v-else-if="SERVICE.IDTHEME === 4"></b-card-img>
                  <b-card-img src="/transport.jpg" fluid alt="thème transport "
                              v-else-if="SERVICE.IDTHEME === 5"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="SERVICE.INTITULE">

                    <b-card-text>
                      {{ SERVICE.DESCRIPTIFSERVICE }}
                    </b-card-text>
                  </b-card-body>
                  <b-button href="#" block pill variant="primary">Voir plus</b-button>
                </b-col>
              </b-row>
            </b-card><br>
          </b-col>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import myToolbar from "@/components/MyToolbar";



export default {
  name: "app",
  components: {myToolbar},
  data() {
    return {
      services: ["Jardinage", "Bricolage", "Course", "Tâches ménagères", "Transport"],
      searhKey: '',

    };
  },
  mounted() {
    axios
        .get("http://192.168.218.2/api/returnService")
        .then(reponse => (this.services = reponse.data))
  },
  computed: {
    searchKey:'',
    filteredList(){
      return this.services.filter((SERVICE) => {
        return SERVICE.INTITULE.toLowerCase().includes(this.searchKey.toLowerCase());
      })
    }
  }
};


</script>

<style>


</style>
