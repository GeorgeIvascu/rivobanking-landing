<template>
  <div class="header">
    <v-row>
      <div class="left-side">
        <v-img max-height="200" max-width="200" src="../assets/rivo-logo-new.png">
        </v-img>
      </div>

      <div class="right-side">
        <v-btn class="ma-1" color="white" small plain> About </v-btn>
        <v-btn class="ma-1" color="white" small plain> Whitepaper </v-btn>
        <v-btn class="ma-1" color="white" small plain> Docs </v-btn>
        <v-btn class="ma-1" color="white" small plain> Blog </v-btn>
        <v-btn class="enter-app ma-1" color="#A9D2E0" medium outlined> Enter App </v-btn>

      </div>
    </v-row>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';

.header {
  height: 120px;
  width: 100%;
  background-color: $primary-color;
  display: flex;

  .row {
    align-content: center;
    align-items: center;
    justify-content: space-between;

    .left-side {
      padding: 20px;
      width: 300px;
      margin-left: 30px;
    }

    .right-side{
        margin-right: 50px;
        
    }
  }
}
</style>