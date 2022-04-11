<template>
    <div>
        <!-- {{allMemebers[0].parent}} -->
        <!-- {{allMemebers[0].user_profile}} -->

        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64" color="white"></v-progress-circular>
        </v-overlay>
        <v-container>
            <h1 class="text--secondary">All memebers</h1>
        </v-container>
        <div>
            <v-container>

                <v-text-field dense prepend-inner-icon="search" outlined placeholder="search" v-model="search">
                </v-text-field>
            </v-container>
        </div>
        <div class="mx-3">
            <v-card width="100%">
                <v-simple-table fixed-header height="100%" :loading="true" loading-text="Loading... Please wait">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">#index</th>
                                <th class="text-left">ID</th>
                                <th class="text-left">Profile</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">phone_number</th>
                                <th class="text-left">Level</th>
                                <th class="text-left">Left</th>
                                <th class="text-left">Right</th>
                                <th class="text-left">Parent</th>
                                <th class="text-left">Country</th>
                                <th class="text-left">City</th>
                                <th class="text-left">Account Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(memeber,index) in filterdUser" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>
                                    <v-btn color="primary" outlined @click="getUUID(memeber.id)">get ID</v-btn>
                                </td>
                                <td>
                                    <v-avatar v-if="memeber.user_profile">
                                        <v-img :src="memeber.user_profile.profile_pic"
                                            lazy-src="https://picsum.photos/id/11/10/6"></v-img>
                                    </v-avatar>
                                </td>
                                <td class="text-lowercase">{{ memeber.first_name }} {{ memeber.last_name }}</td>
                                <td>{{ memeber.email }}</td>
                                <td>{{ memeber.phone_number }}</td>
                                <td>{{ memeber.level }}</td>
                                <td>{{ memeber.lft }}</td>
                                <td>{{ memeber.rght }}</td>
                                <td v-if="memeber.parent">{{ memeber.parent.email}}</td>
                                <td v-if="memeber.user_profile">{{ memeber.user_profile.country}}</td>
                                <td v-if="memeber.user_profile">{{ memeber.user_profile.city}}</td>
                                <td v-if="memeber.user_profile">{{ memeber.user_profile.account_number}}</td>

                            </tr>
                        </tbody>

                    </template>
                </v-simple-table>

            </v-card>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    // import {
    //     Bus
    // } from '../../main'
    // import alert from '../../components/alert.vue'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'Home',
        metaInfo: {
            title: 'yefikirmaed',
            titleTemplate: '%s - all-users',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        },
        data() {
            return {
                overlay: false,
                search: '',
                allMemebers: []
            }
        },
        computed: {
            ...mapGetters({
                // allMemebers: 'memeber/allMemebers'
            }),
            filterdUser: function () {
                return this.allMemebers.filter((memeber) => {
                    return memeber.first_name.match(this.search)
                })
            }
        },
        methods: {
            ...mapActions({
                adminGetMembers: 'memeber/adminGetMembers',
            }),
            getUUID(id) {
                alert(id)
            }
        },
        created() {
            this.overlay = true
            axios.get('members').then((res) => {
                this.allMemebers = res.data
                this.overlay = false
            })
        }

    }
</script>