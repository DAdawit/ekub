<template>
    <div>
        <v-container>
            <h1 class="text--secondary"> 4TH Generation</h1>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <teamLeader />
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <v-card width="100%">
                        <v-card-title>4TH Generation Members</v-card-title>
                        <br><br>
                        <v-simple-table fixed-header height="300px">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">MEMBER ACCOUNT INFO</th>
                                        <th class="text-left">SPONSOR ACCOUNT INFO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <v-row> -->
                                    <!-- </v-row> -->
                                </tbody>
                                <p class="d-flex justify-center">NO MEMBERS LISTED IN THE 4TH GENERATION LEVEL YET!..
                                </p>
                            </template>
                        </v-simple-table>
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
    import teamLeader from './teamLeader.vue'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            teamLeader
        },

        data() {
            return {
                dialog: false
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
            })
        },

        created() {

                if (this.user.received_count >= 6 && this.user.has_donated == false) {
                    this.dialog = true
                } else {
                    this.dialog = false
                }

        }
    }
</script>