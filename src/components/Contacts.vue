<template>
    <div>
        <h1>Contacts</h1>
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="(contact, index) in contacts" :key="index">
                <contact :contact="contact" v-on:open-edit="editContact(contact)"></contact>
            </div>

            <div class="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
                <a href="#" v-b-modal.modal>
                    <i class="far fa-plus-square fa-5x"></i>
                </a>
            </div>
        </div>

        <b-modal id="modal" centered hide-footer>
            <template slot="modal-title">
                <span v-if="this.change">
                    Edit contact
                </span>
                <span v-else>
                    Add new contact
                </span>
            </template>
            <form class="mb-4" @submit.prevent="addContact">
                <div class="">
                    <b-alert show v-if="errors.length">
                        <b>Please correct the following error(s):</b>

                        <ul class="">
                            <li class=""
                                v-for="error in errors" :key="error">{{ error }}
                            </li>
                        </ul>
                    </b-alert>

                    <div class="form-group">
                        <label for="fullname">Name:</label>
                        <input required id="fullname" name="name" type="text" placeholder="Name and Surname" class="form-control"
                               v-model.trim="contact.name">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Address" class="form-control"
                               v-model.trim="contact.address">
                    </div>
                    <div class="form-group">
                        <label for="">Company</label>
                        <input type="text" placeholder="Company" class="form-control" v-model.trim="contact.company">
                    </div>
                    <div class="form-group">
                        <label for="">Company address</label>
                        <textarea placeholder="Text" class="form-control" v-model.trim="contact.text"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Position</label>
                        <input type="text" placeholder="Position" class="form-control" v-model.trim="contact.title">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input required id="phone" maxlength="15" name="phone" type="tel"
                               placeholder="Phone" class="form-control"
                               v-model.trim="contact.phone">
                    </div>
                </div>
                <div class="form-group text-right">
                    <button class="btn btn-success">
                        <template v-if="this.change">
                            <i class="fas fa-pencil-alt"></i> Edit
                        </template>
                        <template v-else>
                            <i class="fas fa-plus"></i> Add
                        </template>
                    </button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Contact from './Contact'

export default {
  name: 'Contacts',
  components: { Contact },
  computed: {
    contacts () {
      return this.$store.state.contacts
    }
  },
  mounted () {
    this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
      this.change = false
      this.contact = {
        img: require('@/assets/sandra smith.jpg')
      }
    })
  },
  data () {
    return {
      errors: [],
      change: false,
      contact: {
        img: require('@/assets/sandra smith.jpg'),
        phone: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      add: 'add',
      edit: 'edit'
    }),
    editContact (contact) {
      this.contact = contact
      this.change = true
      this.$root.$emit('bv::toggle::modal', 'modal')
    },
    addContact () {
      this.errors = []

      if (!this.contact.phone) {
        this.errors.push('You need write phone number')
      } else if (!this.validPhone(this.contact.phone)) {
        this.errors.push('Phone number not correct! ')
      }
      if (this.errors.length) {
        return false
      }
      if (this.change) {
        this.edit(this.contact)
        this.$root.$emit('bv::toggle::modal', 'modal')
        this.change = false
      } else {
        this.add(this.contact)
        this.$root.$emit('bv::toggle::modal', 'modal')
      }
      this.contact = {
        img: require('@/assets/sandra smith.jpg')
      }
    },
    validPhone (phone) {
      let re = /(?:\(?\+\d{2}\)?\s*)?\d+(?:[ -]*\d+)*$/
      return re.test(phone)
    }

  }

}
</script>
