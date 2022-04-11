<template>
    <div>
        <!-- {{seedToMemeber}} -->
        <div v-show="false">
            num of harvest i approved <h1>{{numAprovedHarvest}}</h1>
            num of appoved seeds <h1>{{myApprovedSeeds}}</h1>
            seed to memeber length <h1>{{sTML}}</h1>
            show form <h1 type="hidded">{{showform}}</h1>
        </div>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <div v-if="user.level < 3">
            <br><br>
            <br>
            <h1 class="d-flex justify-center">You are among the three default users that you can't seed to anyone.</h1>
            <h2 class="d-flex justify-center text--secondary">But you can still hervest from your downlines.</h2>
        </div>


        <div v-else>
            <v-container>
                <h1 class="text--secondary">seed</h1>
            </v-container>
            <div v-if="seedToMemeber.seed_is_waiting">
                <v-container>
                    <v-row class="d-flex justify-content-center">
                        <v-card width="100%" flat tile>
                            <v-card-title class="d-flex justify-center">
                                <h1>
                                    The person to be paid is yet to pay his own seed,</h1>
                                <h3>Please wait until he has secured his
                                    payment. </h3>
                            </v-card-title>
                            <v-card-text class="d-flex justify-center">
                                <v-chip class="text--secondary">
                                    <h1> {{seedTimeLeft[0]}}day {{seedTimeLeft[1]}}houre {{seedTimeLeft[2]}}minutes
                                        {{seedTimeLeft[3]}}seconds</h1>
                                </v-chip>
                            </v-card-text>
                            <v-card-text class="d-flex justify-center">
                                <v-img src="/remaing_time.png" height="300" max-width="400"></v-img>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-container>
            </div>

            <div v-else>
                <v-card class="mx-auto" max-width="434" tile v-if="sTML>0">
                    <v-img height="100%" src="/banner2.jpg">
                        <v-row align="end" class="fill-height">
                            <v-col align-self="start" class="pa-0" cols="12">
                                <v-avatar class="profile" color="grey" size="164" tile>
                                    <v-img
                                        :src="`https://api.yefikrmead.com/media/${seedToMemeber.user_profile.profile_pic}`">
                                    </v-img>
                                </v-avatar>
                            </v-col>
                            <v-col class="py-0">
                                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                                    <v-list-item-content>
                                        <v-list-item-title class="title black--text">
                                            {{seedToMemeber.first_name}}
                                            {{seedToMemeber.last_name}}</v-list-item-title>
                                        <v-list-item-subtitle class="black--text">{{seedToMemeber.email}} <br>
                                            {{seedToMemeber.phone_number}} <br>
                                            <template v-if="seedToMemeber.user_profile">
                                                account_number:{{seedToMemeber.user_profile.account_number}}
                                            </template>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-img>
                </v-card>
                <br><br>

                <v-row class="d-flex justify-space-around">
                    <v-container v-if="showform">
                        <div class="d-flex justify-end">
                            <v-card width="100%">
                                <v-card-title class="headline grey lighten-2 mb-2">
                                    Seed to user
                                </v-card-title>
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form @submit.prevent="handleSubmit(save)">
                                        <v-card-text>
                                            <ValidationProvider rules="required|integer" name="amount"
                                                v-slot="{ errors }">
                                                <v-text-field dense outlined label="amount" v-model="seed.amount"
                                                    :error="errors.length > 0" :error-messages="errors[0]">
                                                </v-text-field>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" name="description" v-slot="{ errors }">
                                                <v-textarea outlined label="description" v-model="seed.description"
                                                    :error="errors.length > 0" :error-messages="errors[0]">
                                                </v-textarea>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" name="round" v-slot="{ errors }">
                                                <v-select v-model="seed.round"
                                                    :items="['First Round','Second Round','Third Round','Fourth Round','Fivth Round']"
                                                    label="round" outlined dense :error="errors.length > 0"
                                                    :error-messages="errors[0]">
                                                </v-select>
                                            </ValidationProvider>
                                            <label>Proof image</label><br>
                                            <ValidationProvider rules="image" name="image proof" v-slot="{ errors }">
                                                <input type="file" @change="selectImage">
                                                <br>
                                                <small class="red--text pl-3">{{errors[0]}}</small>
                                            </ValidationProvider>
                                            <br><br>

                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" :loading="loading" type="submit">
                                                save
                                            </v-btn>
                                        </v-card-actions>
                                    </form>
                                </ValidationObserver>
                            </v-card>
                        </div>
                    </v-container>
                </v-row>
            </div>

            <br><br>
            <v-container>
                <v-tabs grow>
                    <v-tab to="/app/seed/pennding">pending</v-tab>
                    <v-tab to="/app/seed/approved">approved</v-tab>
                    <v-tab to="/app/seed/rejected">rejected</v-tab>
                </v-tabs>
                <router-view></router-view>
            </v-container>


        </div>
        <alert />
        <!-- <seedList /> -->




        <template class="mx-10">
            <div class="text-center">
                <v-dialog persistent v-model="dialog" width="auto">
                    <v-card-text>
                        <v-alert prominent type="error">
                            <v-row align="center">
                                <v-col class="grow">
                                    It is time for Service charge , Please Pay! <small>and you will not see this
                                        message</small>
                                </v-col>
                                <v-col class="shrink">
                                    <v-btn to="/app/charityDonation">go to Service Charge</v-btn>
                                </v-col>
                            </v-row>
                        </v-alert>
                    </v-card-text>
                </v-dialog>
            </div>
        </template>
    </div>
</template>


</div>
</template>
<script>
    // import seedList from './seedList';
    // import counter from '../../components/Counter'
    import axios from 'axios'
    import {
        Bus
    } from '../../main'
    import alert from '../../components/alert.vue'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        components: {
            alert,
            // seedList,
            // counter
        },
        data() {
            return {
                dialog:false,
                seed: {},
                selectedImage: null,
                loading: false,
                showform: null,
                overlay: false,
                nAH: 0,
                mAdS: 0,
                sTML: 0,
            }
        },
        computed: {
            ...mapGetters({
                seedTimeLeft: "seed/seedTimeLeft",
                seedToMemeber: "seed/seedToMemeber",
                exp_y_m_d: "seed/exp_y_m_d",
                exp_h_m_s: "seed/exp_h_m_s",
                user: 'auth/user',
                numAprovedHarvest: 'harvest/numAprovedHarvest',
                myApprovedSeeds: "seed/myApprovedSeeds",
                seedToMemeberLength: 'seed/seedToMemeberLength'
            })
        },
        methods: {
            ...mapActions({
                saveSeed: 'seed/saveSeed',
                seed_to_memeber: 'seed/seed_to_memeber',
                getHarvestList: 'harvest/getHarvestList',
                getSeeds: 'seed/getSeeds',
            }),
            selectImage(e) {
                this.selectedImage = e.target.files[0]
                // console.log(this.selectedImage);
            },
            save() {
                this.loading = true;
                const fd = new FormData();
                fd.append("file_upload", this.selectedImage, this.selectedImage.name);
                fd.append("amount", this.seed.amount)
                fd.append("description", this.seed.description)
                fd.append("round", this.seed.round)
                fd.append("_to", this.seedToMemeber.id)
                this.saveSeed(fd).then(() => {
                    this.loading = false
                    Bus.$emit('showalert', 'successs !')
                }).catch((errors) => {
                    this.loading = false
                    Bus.$emit('showError', errors.response.data.errors.detail[0])
                    // console.log(errors.response.data.errors.detail[0])
                    this.loading = false;
                })
            },
            // deleteSeed(id) {
            //     this.deleteMySeed(id)
            // }
        },
        created() {
                if (this.user.received_count >= 6 && this.user.has_donated == false) {
                    this.dialog = true
                } else {
                    this.dialog = false
                }
            this.getSeeds()
            this.seed_to_memeber()
            this.getHarvestList()
            this.nAH = this.numAprovedHarvest
            this.mAdS = this.myApprovedSeeds
            this.sTML = this.seedToMemeberLength
            // console.log('created', this.sTML);
        },
        beforeUpdate() {
            // console.log('num harvest i approved', this.numAprovedHarvest)
            this.nAH = this.numAprovedHarvest
            this.mAdS = this.myApprovedSeeds
            this.sTML = this.seedToMemeberLength

            let numharvest = this.mAdS * 8
            // console.log(numharvest)

            if (this.nAH == 0) {
                this.nAH = this.nAH + 1
                // console.log("numapprovedharvest", this.nAH);
            }

            if (this.sTML < 1) {
                this.showform = false
            } else {
                if (this.mAdS < 1 || (this.mAdS > 0 && this.nAH % numharvest == 0)) {
                    this.showform = true
                } else {
                    this.showform = false
                }
            }


            this.overlay = false

            // console.log('show form', this.showform)
        },
        update() {
            // console.log('update', this.showform)
        }

    }
</script>