<template>
    <div>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-container>
            <h1 class="text--secondary my-8">Transactions</h1>
        </v-container>
        <v-row class="mx-3">
            <v-card width="100%">
                <v-simple-table fixed-header height="300px" loading loading-text="Loading... Please wait">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">#ID</th>
                                <th class="text-left">TYPE</th>
                                <th class="text-left">DETAILS</th>
                                <th class="text-left">AMOUNT</th>
                                <th class="text-left">DATE</th>
                            </tr>
                        </thead>
                        <tbody v-if="transactions">
                            <tr v-for="(transaction,index) in transactions.results" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ transaction.round }}</td>
                                <td>{{ transaction.description }}</td>
                                <td>{{ transaction.amount }}</td>
                                <td>{{moment(transaction.created_at).format('YYYY-MM--DD')}}</td>

                            </tr>
                        </tbody>
                        <p class="d-flex justify-center" v-else>NO ENTRY AVAILABLE FOR LISTING.</p>
                    </template>
                </v-simple-table>
            </v-card>
        </v-row>


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
    export default {
        data() {
            return {
                dialog: false,
                overlay: false,
                country: '',
                region: ''
            }
        },

        computed: {
            ...mapGetters({
                transactions: 'transaction/transactions'
            })
        },
        methods: {
            ...mapActions({
                get_transactions: 'transaction/get_transactions'
            })
        },
        created() {
                this.get_transactions().then(() => {
                        this.overlay = false
                    })


        }
    }
</script>
<style scoped>
    select {
        height: 20px;
        width: 100%;
        border-left: 4px solid black
    }
</style>