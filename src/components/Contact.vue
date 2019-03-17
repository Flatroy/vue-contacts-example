<template>
    <div class="card card-contact">
        <div class="card-body">
            <div class="d-flex">
                <div class="card-contact__avatar">
                    <img :src="contact.img" alt="" class="card-contact__avatar-img">
                    <div class="card-contact__title">{{ contact.title }}</div>
                </div>
                <div class="card-contact__info">
                    <h6 class="card-contact__name">{{ contact.name }}</h6>
                    <div class="card-contact__address"><i class="fas fa-map-marker-alt"></i> {{ contact.address }}</div>
                    <div class="mb-2" v-if="this.coordinates.length">Coordinates: {{ this.coordinates[0] }}, {{ this.coordinates[1] }}</div>

                    <div class="card-contact__company">{{ contact.company }}</div>
                    <div class="card-contact__text">
                        <address v-html="contact.text"></address>
                        <div><abbr title="Phone">P:</abbr> {{ contact.phone }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-buttons">
            <button class="btn btn-link btn-sm" @click="$emit('open-edit')"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn btn-link btn-sm" @click="remove(contact)"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
</template>

<style lang="scss">
    .card-buttons {
        position: absolute;
        bottom: 5px;
        right: 5px;
        .btn {
            color: #000;
            &:hover {
                opacity: .75;
            }
        }
    }

    .card-contact {
        height: 100%;
        position: relative;
        color: #6f7274;
        /*border-color: #e7eaec;*/
        &__ {
            &avatar {
                text-align: center;
                &-img {
                    border-radius: 50%;
                    margin-bottom: 10px;
                }
            }
            &title {
                color: #6f7274;
                font-weight: bolder;
            }
            &info {
                margin-left: 20px;
                text-align: left;
                margin-bottom: 30px;
            }
            &name {
                color: #6f7274;
                font-weight: bold;
                font-size: 1.25rem;
            }
            &address {
                margin-bottom: 10px;
            }
            &company {
                font-weight: bold;
            }
            &text {
            }
        }
    }
</style>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'Contact',
  props: {
    contact: {
      required: true
    }
  },
  data () {
    return {
      coordinates: []
    }
  },
  mounted () {
    this.getCoordinates()
  },
  methods: {
    ...mapMutations({
      remove: 'remove'
    }),
    getCoordinates () {
      axios
        .get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(this.contact.address) + '.json?access_token=pk.eyJ1IjoiZmxhdHJveSIsImEiOiJjanQ1dHF0ZGkwOHFlNDNvY280dW01aXk3In0.mryFicNXR1kVraf_nuUoPA')
        .then(response => {
          this.coordinates = response.data.features[0]['geometry']['coordinates']
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
