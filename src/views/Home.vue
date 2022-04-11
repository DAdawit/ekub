<template>
  <div>
    <v-img id="bg2"
      src="/loginbanner5.jpeg">
     <v-row>
          <v-col cols="12" lg="12" md="12" sm="12" class="d-flex justify-center">
      <v-img src="/logo3.jpg"  class="ma-5 d-flex justify-center" height="350" max-width="350"></v-img>
          </v-col>
     </v-row>
      <!-- <v-img src="/logo3.jpg"  class="ma-5 d-flex justify-center" height="350" max-width="350"></v-img> -->
      <div class="des d-flex align-start">
        <v-row>
          <v-col cols="12" lg="12" md="12" sm="12" class="d-flex justify-center">
            <h2 class="white--text px-5">{{description}}</h2><br>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="d-flex justify-center">
            <v-btn rounded class="primary ml-10 mb-10" to="/login" large>start now</v-btn>
          </v-col>
        </v-row>
      </div>

      <!-- <v-row >
        <v-container class="text d-none d-sm-flex">
          <h2 class="white--text px-5">{{description}}</h2><br>
        </v-container>
        <v-container class=" d-flex d-sm-none mt-12">
          <h3 class="mx-2 px-5 white--text">{{description}}</h3><br>
        </v-container>
      </v-row> -->
      <!-- <v-row class="d-flex justify-center d-flex d-sm-none">
        <v-container class="d-flex justify-center">
          <v-btn rounded class="primary ml-10 mb-10" to="/login">start now</v-btn>
        </v-container>
      </v-row> -->
      <!-- <v-row class="d-flex justify-center">
        <v-container class="d-flex justify-center">
          <v-btn rounded class="primary ml-10 mb-10" to="/login">start now</v-btn>
        </v-container>
      </v-row> -->
    </v-img>
    <!-- <div class="back">

    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    metaInfo: {
      title: 'yefikirmaed',
      titleTemplate: '%s - Home',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    data() {
      return {
        description: 'የፍቅር መዓድ በፍቃደኝነት ላይ የተመሰረተ የስጦታ ሲስተም ስልጠና ማዕከል ኃ. የተ.ግ .ማ በአዉታረ መረብ እኛዉ በኛዉ ወደኛዉ የስጦታ መቀባበያ ብልሃት በትክክለኛ ጥረት እና መንገድ የሰዎችን ህይወት በስልጠና፣ በአስተሳሰብ፣ በገንዘብ እና በሁለንተናዊ ስብዕና የመቀየሪያ ስልት ነው።',
      }
    }
  }
</script>

<style scoped>
  .des {
    height: 100%;
  }

  #bg {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 50%;
    min-height: 100%;
  }

  h1 {}

  .text {
    position: relative;
    top: 350px;
  }

  .button {
    position: relative;
    top: 350px;
  }

  h3 {}

  #bg2 {
    position: fixed;
    top: 0%;
    left: 0%;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }

  .back {
    background-image: url("/homebanner.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    background-color: black;
  }
</style>