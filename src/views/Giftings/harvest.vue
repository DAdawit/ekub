<template>
    <div>
        <template>
            <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                    <v-card>
                        <v-img :src="profeImage"></v-img>
                    </v-card>
                </v-dialog>
            </div>
        </template>

        <!-- seedToMemeber.seed_is_waiting -->
        <div v-if="harvestMemeberList.harvest_is_waiting">
            <br><br><br>
            <v-container>
                <v-row class="d-flex justify-content-center">
                    <v-card width="100%" flat tile>
                        <v-card-title class="d-flex justify-center">
                            <h1>
                                You have to secure your payment to get paid the next round !</h1><br>
                            <h4>Remaing time until you secure your payment or it will pass you</h4>
                        </v-card-title>
                        <v-card-text class="d-flex justify-center">
                            <v-img src="/remaing_time.png" height="300" max-width="400"></v-img>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-container>
            <!-- {{seedTimeLeft}} -->
        </div>

        <v-card class="mx-3" v-else>
            <v-card-title class="d-flex justify-center">HARVEST MEMEBERS LIST</v-card-title>
            <v-item-group class=" px-3">
                <v-row class="pt-5 d-flex justify-content-start">
                    <v-col v-for="memeber in harvestMemeberList.data" :key="memeber.id" cols="12" xs="6" sm="4" md="4"
                        lg="3">
                        <v-item cols="12" xs="1" sm="6" md="4" lg="3">
                            <v-card class="mx-auto" max-width="434" tile>
                                <v-img height="100%" src="/banner.jpg">
                                    <v-row align="end" class="fill-height">
                                        <v-col align-self="start" class="pa-0" cols="12">
                                            <v-avatar class="profile" color="grey" size="164" tile>
                                                <v-img
                                                    :src="`https://api.yefikrmead.com/media/${memeber.user_profile.profile_pic}`">
                                                </v-img>
                                            </v-avatar>
                                        </v-col>
                                        <v-col class="py-0">
                                            <v-list-item color="rgba(0, 0, 0, .4)" dark>
                                                <v-list-item-content>
                                                    <v-list-item-title class="title">
                                                        <!-- {{memeber.first_name}}
                                                        {{memeber.last_name}} -->
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>{{memeber.email}} <br>
                                                        <!-- {{memeber.phone_number}}  -->
                                                        <br>
                                                        <!-- account_number:{{memeber.user_profile.account_number}} -->
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                </v-img>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-card>

        <harvestList />

        <v-card width="100%" class="mx-3">
            <v-card-title class="pl-10">NO GIFT RECORD AVAILABLE FOR DISPLAY YET!</v-card-title>
        </v-card>
        <alert />

        <template class="mx-10">
            <div class="text-center">
                <v-dialog persistent v-model="dialog2" width="auto">
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
    import harvestList from './harvestList.vue'
    import alert from '../../components/alert.vue'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        components: {
            alert,
            harvestList,
        },
        data() {
            return {
                dialog2: false,
                approveing: false,
                rejecting: false,
                dialog: false,
                profeImage: '',
                seedTimeLeft: [2, 2, 2, 31],
                approveStatus: {
                    status: 'Received'
                },
                RejectStatus: {
                    status: 'Rejected'
                },
            }
        },
        computed: {
            ...mapGetters({
                harvestMemeberList: 'harvest/harvestMemeberList',
                user: "auth/user",

            })
        },
        methods: {
            ...mapActions({
                fetchMyHarvestMemebers: 'harvest/fetchMyHarvestFromMemeber',
            }),
        },
        created() {
            if (this.user.received_count >= 6 && this.user.has_donated == false) {
                this.dialog2 = true
            } else {
                this.dialog2 = false
            }
            this.fetchMyHarvestMemebers();
        }
    }
</script>