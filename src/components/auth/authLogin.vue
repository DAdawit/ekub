<template>
  <div>
    <v-img id="bg" class="d-flex align-center"
      src="/login2.jpg">
      <div class="d-flex justify-center">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(login)">
            <v-card max-width="500" class="mb-15">
              <v-row class="d-flex justify-center pt-5">
                
              </v-row>
              <v-row class="d-flex justify-center">
                <v-col cols="10">
                  <v-card-title class="d-flex justify-center">የፍቅር መዓድ</v-card-title>
                  <ValidationProvider rules="required" name="email" v-slot="{ errors }">
                    <v-text-field prepend-inner-icon="email" placeholder="E-mail" dense outlined
                      v-model="user.email" :error="errors.length > 0" :error-messages="errors[0]"></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider rules="required" name="password" v-slot="{ errors }">
                    <v-text-field prepend-inner-icon="lock" placeholder="password" dense outlined
                      :type="show1 ? 'text' : 'password'" v-model="user.password" :error="errors.length > 0"
                      :error-messages="errors[0]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1">
                    </v-text-field>
                  </ValidationProvider>
                  <router-link to="/forgetPassword" class="d-flex justify-end">forget password?</router-link>
                </v-col>

                <small class="red--text" small> {{error}}</small>
                <v-col cols="10">
                  <v-btn block class="primary" type="submit" :loading="loading">login</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </form>
        </ValidationObserver>
      </div>
    </v-img>
  </div>
</template>
<script>
  import router from '../../router/index'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        loading: false,
        error: '',
        show1: false,
        user: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters({

      })
    },
    methods: {
      ...mapActions({
        loginUser: "auth/loginUser"
      }),

      login() {
        this.loading = true;
        this.loginUser(this.user).then(() => {
          this.loading = false;
          // console.log(res)
          router.push('/app/dashboard')
          window.location.reload()
          // alert('success')
        }).catch((errors) => {
          this.loading = false;
          this.error = errors.response.data.errors.detail[0]
        })
      }
    }

  }
</script>
<style scoped>
  #bg {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
</style>