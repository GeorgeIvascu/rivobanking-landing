<template>
  <div class="container">
    <v-row>
      <div class="left fade-in-animation">
        <h1 class="big-header ">
          DeFi banking <br />
          made <span class="accent-text glow-animation-text">easy</span>.
        </h1>
        <h4 class="sub-header text-left ma-1">
          All the investment tools necessary under the same roof
        </h4>
        <div class="call-to-action text-left">
          <v-btn class="enter-app ma-1" color="white" large outlined>
            Read the docs
          </v-btn>
          <v-btn class="enter-app ma-1" color="#A9D2E0" large outlined>
            Enter App
          </v-btn>
        </div>

        <SocialButtons />
      </div>

      <div class="right fade-in-animation">
        <v-img class="floating-animation" max-height="500" max-width="500" src="../assets/landing-ill.png">
        </v-img>
      </div>
    </v-row>

    <v-row class="features">
      <v-col class="col-md-12 mb-5">
        <div>
          <h2>Features</h2>
        </div>
      </v-col>

      <v-row class="col-md-12">
        <v-card
          elevation="12"
          dark
          max-width="500"
          class="col-md-4"
        >
          <v-card-title>
            <div class="icon">
              <v-img
                max-height="80"
                max-width="80"
                src="../assets/exchange-icon.png"
              >
              </v-img>
              <!-- <v-icon>mdi-chart-bell-curve-cumulative</v-icon> -->
            </div>
            Exchange
          </v-card-title>
          <v-card-subtitle
            >Swap tokens easily with our built-in exchange powered by 1inch
            protocol
          </v-card-subtitle>
          <v-card-text>
            <v-btn text small color="#ffc357"> Explore </v-btn>
          </v-card-text>
        </v-card>

        <v-card 
          elevation="12"
          dark
          max-width="500"
          class="col-md-4 "
        >
          <v-card-title>
            <div class="icon">
              <v-img
                max-height="80"
                max-width="80"
                src="../assets/index-funds-icon.png"
              >
              </v-img>
            </div>
            Index funds
          </v-card-title>
          <v-card-subtitle
            >Diversify your portofolio with tokenized index funds to spread the
            risk
          </v-card-subtitle>
          <v-card-text>
            <v-btn text small color="#ffc357"> Explore </v-btn>
          </v-card-text>
        </v-card>

       <v-hover
        v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 12"
          dark
          max-width="500"
          class="col-md-4"
        >
          <v-card-title>
            <div class="icon">
              <v-img
                max-height="80"
                max-width="80"
                src="../assets/loan-icon.png"
              >
              </v-img>
            </div>
            Under-collateralized loans
          </v-card-title>
          <v-card-subtitle>
            Borrow more with less. Use the loan as financial crutch to achieve
            your desired goal
          </v-card-subtitle>
          <v-card-text>
            <v-btn text small color="#ffc357"> Explore </v-btn>
          </v-card-text>
        </v-card>
       </v-hover>
      </v-row>
    </v-row>

     <v-row class="rivo-protocol col-md-12">
      <div class="left col-md-6">
        <h1 class="main-header">Why <span class="glow-animation-text">Rivo</span>?</h1>
        <p class="main-text">Access to all your DeFi banking needs.<br>All under the same roof.</p>
        <v-btn small outlined color="#ffc357"> Read more </v-btn>
      </div>
      <div class="right col-md-6">
        <ul class="main-list">
          <li>Under-collateralized Loans</li>
          <li>Fiat Gateway</li>
          <li>Bult-in Exchange</li>
          <li>Invest in Index Funds</li>
          <li>Earn with Deposits</li>
          <li>Lend Assets</li>
        </ul>
      </div>
    </v-row>

    <v-row class="powered-by">
      <div>
        <h2>Powered by</h2>
      </div>

      <v-row>
        <v-img
          max-height="200"
          max-width="200"
          src="../assets/polygon-logo.png"
        >
        </v-img>
        <v-img
          max-height="200"
          max-width="200"
          src="../assets/1inch_bw_white.png"
        >
        </v-img>

        <v-img
          max-height="200"
          max-width="200"
          src="../assets/token-set-logo.png"
        >
        </v-img>
        <v-img
          max-height="200"
          max-width="300"
          src="../assets/compound-logo.png"
        >
        </v-img>
      </v-row>
    </v-row>

   

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import SocialButtons from "../components/SocialButtons.vue";

export default {
  components: {
    Footer: Footer,
    SocialButtons: SocialButtons,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.container {
  //display: flex;
  margin-top: 100px;

  .row {
    align-items: center;
    justify-content: space-around;
  }
  .left {
    .big-header {
      font-size: 70px;
      text-align: left;
      line-height: 1;
      color: $text-color;
    }

    .sub-header {
      padding-top: 10px;
      color: $accent-color;
      font-weight: 500;
    }

    .call-to-action {
      padding-top: 20px;
    }

    .socials {
      padding-top: 20px;
    }
    span {
      color: $secondary-color;
    }
  }

  .features {
    margin-top: 15rem;

    .v-card {
      height: 450px;
      background-color: $primary-color !important;
    }

    .v-card__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 600;
      font-size: 1.3rem;
      margin-bottom: 16px;

      .icon {
        padding-top: 20px;
        i {
          font-size: 80px;
          padding: 20px;
          color: $secondary-color;
        }
      }
    }

    .v-card__subtitle {
      padding: 50px;
      color: $text-color;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .v-card__text {
      .v-btn {
        //background-color: $primary-color;
      }
    }
  }


  .powered-by {
    margin-top: 200px;
    display: flex;
    flex-direction: column;

    .v-card__text {
      display: flex;
      flex-direction: row;
    }

    .v-image {
      margin: 30px;
      opacity: 0.9;
    }
    .v-image__image {
      background-size: contain;
    }
  }


  .rivo-protocol {
    margin-top: 200px;

    .right {
      border-left: 3px solid $accent-color;
    }
    .main-header {
      color: $secondary-color;
      font-size: 3rem;
    }

    .main-text {
      color: $text-color;
      font-weight: 500;
    }

    .main-list {
      list-style: none;
      li {
        color: $secondary-color;
        font-weight: 500;
        padding: 10px;
      }
    }

    
  }
}
</style>
