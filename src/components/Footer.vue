<template>
  <div class="footer-container">
    <v-footer padless class="footer">

      <v-row class="col-md-12">
        <div class="left col-md-4">
          <div class="logo">
               <v-img
            max-height="100"
            max-width="200"
            src="../assets/rivo-logo-new.png"
          >
          </v-img>
          </div>
          <div class="content ma-2">
            <p>Rivo banking is a fully decentralized application which aims to deliver a fully rounded banking experience and solve the problem of under-collateralized loans</p>
          </div>
        </div>

        <div class="center col-md-4">
          <v-btn class="ma-1" color="white" small plain> About </v-btn>
        <v-btn class="ma-1" color="white" small plain> Whitepaper </v-btn>
        <v-btn class="ma-1" color="white" small plain> Docs </v-btn>
        <v-btn class="ma-1" color="white" small plain> Blog </v-btn>
        </div>
        <div class="right col-md-4">
<div>
            <h4 style="color: #2c3e50" class="ma-2">Socials</h4>
          </div>
          
          <SocialButtons />
        </div>
      </v-row>
    

      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Rivo Banking</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import SocialButtons from './SocialButtons.vue'
export default {
  components: {
    SocialButtons: SocialButtons
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
.footer-container {
  text-align: left;
  margin-top: 7em;

  .footer {
    background-color: $primary-color;
  }

  .footer-links {
    display:flex;
    flex-direction: column;
    text-align: left;
  }

  .content {
    p {
      color: #405f7d;
      font-size: 0.8rem;
      font-weight: 450;
    }
  }

  .center {
    display:flex;
    flex-direction: column;
  }
}
</style>