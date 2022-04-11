<template>
    <div>
        <br>
        <br>
        <!-- {{membersList.first_tier_members}} -->
        <v-container>
            <h1 class="text--secondary">Active Network</h1>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <teamLeader />
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8" v-if="user.parent">
                    <v-card width="100%">
                        <v-card-title class="p-10">My Sponsor</v-card-title>
                    </v-card>
                    <v-row class="d-flex justify-center my-15">
                        <v-card width="50%">
                            <v-card-title class="d-flex justify-center">Spring</v-card-title>
                            <v-divider></v-divider>

                            <v-card-text class="d-flex justify-center ">
                                <template v-if="user.parent.user_profile !== null">
                                    <v-avatar size="200">
                                        <v-img src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                        </v-img>
                                    </v-avatar>
                                </template>
                                <template v-else>
                                    <v-avatar size="200">
                                        <v-icon>person</v-icon>
                                    </v-avatar>
                                </template>
                                <br>
                            </v-card-text>
                            <v-card-title class="d-flex justify-center">{{user.parent.first_name}}
                                {{user.parent.last_name}}</v-card-title>

                            <article class="d-flex justify-center">{{user.parent.email}}</article>
                            <article class="d-flex justify-center">{{user.parent.phone_number}}</article>
                            <v-divider></v-divider>
                            <v-row class="d-flex justify-space-between px-10 my-3 pb-5">
                                <v-icon class="d-flex justify-center" color="#64B5F6">mdi-facebook</v-icon>
                                <v-icon class="d-flex justify-center" color="#64B5F6">mdi-twitter</v-icon>
                            </v-row>
                        </v-card>
                    </v-row>

                    <!-- <h1>hello</h1> -->
                    <!-- {{membersList}} -->

                    <v-card width="100%">
                        <v-card-title class="">My Network</v-card-title>
                    </v-card>
                    <v-card width="100%">
                        <v-card-title class="pl-10 mt-2">Number 1st Tier Team Members Available</v-card-title>
                        <div v-for="(memeber,index) in membersList.first_tier_members" :key="index">
                            <v-card max-width="100%" class="px-5 pt-3 mx-2">
                                <v-row class="d-flex justify-start mt-2">


                                    <template v-if="memeber.user_profile !== null">
                                        <v-list-item-avatar>
                                            <v-img
                                                :src="`https://api.yefikrmead.com/media/${memeber.user_profile.profile_pic}`"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>
                                    <template v-if="memeber.user_profile === null">
                                        <v-list-item-avatar>
                                            <v-img src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>

                                    <v-card-title>
                                        {{memeber.first_name}}
                                        {{memeber.last_name}}
                                    </v-card-title>
                                    <v-card-title>
                                        {{memeber.email}}
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="show1 = !show1">
                                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-expand-transition>
                                    <div v-show="show1">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>Sponser</v-card-title>
                                                    <v-card-subtitle>
                                                        <span
                                                            class="font-weight-bold">Name:</span>{{memeber.parent.first_name}}{{memeber.parent.first_name}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Phone:</span>{{memeber.parent.phone_number}}
                                                        <br>
                                                    </v-card-subtitle>
                                                </v-col>

                                                <!-- profile_pic: "IMG_20210909_153101_955_siKZZFf.jpg" -->
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>Profile</v-card-title>
                                                    <v-card-subtitle v-if="memeber.user_profile">
                                                        <span class="font-weight-bold">Account
                                                            number:</span>{{memeber.user_profile.account_number}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Country:</span>{{memeber.user_profile.country}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">city:</span>{{memeber.user_profile.city}}
                                                    </v-card-subtitle>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </div>
                    </v-card>





                    <v-card width="100%">
                        <v-card-title class="pl-10 mt-2">Number 2nd Tier Team Members Available</v-card-title>
                        <div v-for="(memeber,index) in membersList.second_tier_members" :key="index">
                            <v-card max-width="100%" class="px-5 pt-3 mx-2">
                                <v-row class="d-flex justify-start mt-2">

                                    <template v-if="memeber.user_profile !== null">
                                        <v-list-item-avatar>
                                            <v-img
                                                :src="`https://api.yefikrmead.com/media/${memeber.user_profile.profile_pic}`"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>
                                    <template v-if="memeber.user_profile === null">
                                        <v-list-item-avatar>
                                            <v-img src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>

                                    <v-card-title>
                                        {{memeber.first_name}}
                                        {{memeber.last_name}}
                                    </v-card-title>
                                    <v-card-title>
                                        {{memeber.email}}
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="show2 = !show2">
                                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-expand-transition>
                                    <div v-show="show2">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>Sponser</v-card-title>
                                                    <v-card-subtitle>
                                                        <span
                                                            class="font-weight-bold">Name:</span>{{memeber.parent.first_name}}{{memeber.parent.first_name}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Phone:</span>{{memeber.parent.phone_number}}
                                                        <br>
                                                        <!-- <span
                                                            class="font-weight-bold">Plane:</span>{{memeber.parent.plane}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Position:</span>{{memeber.parent.position}} -->
                                                    </v-card-subtitle>
                                                </v-col>

                                                <!-- profile_pic: "IMG_20210909_153101_955_siKZZFf.jpg" -->
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>Profile</v-card-title>
                                                    <v-card-subtitle v-if="memeber.user_profile">
                                                        <span class="font-weight-bold">Account
                                                            number:</span>{{memeber.user_profile.account_number}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Country:</span>{{memeber.user_profile.country}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">city:</span>{{memeber.user_profile.city}}
                                                    </v-card-subtitle>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </div>
                    </v-card>
                    <v-card width="100%">
                        <v-card-title class="pl-10 mt-2">Number 3rd Tier Team Members Available</v-card-title>
                        <div v-for="(memeber,index) in membersList.third_tier_members" :key="index">
                            <v-card max-width="100%" class="px-5 pt-3 mx-2">
                                <v-row class="d-flex justify-start mt-2">

                                    <template v-if="memeber.user_profile !== null">
                                        <v-list-item-avatar>
                                            <v-img
                                                :src="`https://api.yefikrmead.com/media/${memeber.user_profile.profile_pic}`"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>
                                    <template v-if="memeber.user_profile === null">
                                        <v-list-item-avatar>
                                            <v-img src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg"
                                                lazy-src="https://image.freepik.com/free-vector/user-icon_126283-435.jpg">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </template>

                                    <v-card-title>
                                        {{memeber.first_name}}
                                        {{memeber.last_name}}
                                    </v-card-title>
                                    <v-card-title>
                                        {{memeber.email}}
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="show3 = !show3">
                                        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-expand-transition>
                                    <div v-show="show3">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>sponser</v-card-title>
                                                    <v-card-subtitle v-if="memeber.parent">
                                                        <span
                                                            class="font-weight-bold">Name:</span>{{memeber.parent.first_name}}{{memeber.parent.first_name}}
                                                        <br>
                                                        <span class="font-weight-bold">Phone:</span>
                                                        {{memeber.parent.phone_number}}
                                                        <br>
                                                        <!-- <span
                                                            class="font-weight-bold">Plane:</span> {{memeber.parent.plane}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Position:</span> {{memeber.parent.position}} -->
                                                    </v-card-subtitle>
                                                </v-col>

                                                <!-- profile_pic: "IMG_20210909_153101_955_siKZZFf.jpg" -->
                                                <v-col cols="12" sm="6" md="6" lg="6">
                                                    <v-card-title>Profile</v-card-title>
                                                    <v-card-subtitle v-if="memeber.user_profile">
                                                        <span class="font-weight-bold">Account
                                                            number:</span>{{memeber.user_profile.account_number}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">Country:</span>{{memeber.user_profile.country}}
                                                        <br>
                                                        <span
                                                            class="font-weight-bold">city:</span>{{memeber.user_profile.city}}
                                                    </v-card-subtitle>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <template class="mx-10">
            <div class="text-center">
                <v-dialog persistent v-model="dialog" width="auto">
                    <v-card-text>
                        <v-alert prominent type="error">
                            <v-row align="center">
                                <v-col class="grow">
                                    It is time for charity Donation , Please Donate! <small>and you will not see this
                                        message</small>
                                </v-col>
                                <v-col class="shrink">
                                    <v-btn to="/app/charityDonation">go to charity donation</v-btn>
                                </v-col>
                            </v-row>
                        </v-alert>
                    </v-card-text>
                </v-dialog>
            </div>
        </template>
    </div>
</template>
<script>
    import axios from 'axios'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import teamLeader from './teamLeader.vue'
    export default {
        components: {
            teamLeader
        },
        data() {
            return {
                dialog: false,
                show1: false,
                show2: false,
                show3: false,

            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                membersList: 'memeber/membersList',

            })
        },
        methods: {
            ...mapActions({
                getMembersListf: 'memeber/getMembersList'
            })
        },
        created() {
            
                if (this.user.received_count >= 6 && this.user.has_donated == false) {
                    this.dialog = true
                } else {
                    this.dialog = false
                }
            this.getMembersListf()
        }
    }
</script>