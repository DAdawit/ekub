<template>
    <div>
        <v-container>
            <h1 class="text--secondary my-8">Activity</h1>
        </v-container>
        <v-row class="mx-3">
            <v-card width="100%">

                <v-timeline align-top dense>
                    <v-timeline-item color="pink" small>
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>5pm</strong>
                            </v-col>
                            <v-col>
                                <strong>No Activity</strong>
                                <!-- <div class="caption">Mobile App</div> -->
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>3-4pm</strong>
                            </v-col>
                            <v-col>
                                <strong>Account Activation</strong>
                                <div class="caption mb-2">Activation of Account belonging to a new member under my downline - [ Endalk Belete ]</div>
                                <v-avatar>
                                    <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown">
                                    </v-img>
                                </v-avatar>
                                <v-avatar>

                                    <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned">
                                    </v-img>
                                </v-avatar>
                                <v-avatar>
                                    <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale">
                                    </v-img>
                                </v-avatar>
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="pink" small>
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>12pm</strong>
                            </v-col>
                            <v-col>
                                <strong>Gifting</strong>
                                  <div class="caption mb-2">Upload of proof of payment made to water - [ Meseret Tesfaye ]</div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>9-11am</strong>
                            </v-col>
                            <v-col>
                                <strong>Gifting</strong>
                                <div class="caption">Gift offered to Water - [ Meseret Tesfaye ]</div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card>


        </v-row>
    </div>
</template>
<script>
    export default {
        data: () => ({
            years: [{
                    color: 'cyan',
                    year: '1960',
                },
                {
                    color: 'green',
                    year: '1970',
                },
                {
                    color: 'pink',
                    year: '1980',
                },
                {
                    color: 'amber',
                    year: '1990',
                },
                {
                    color: 'orange',
                    year: '2000',
                },
            ],
        }),
    }
</script>