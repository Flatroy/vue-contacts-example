import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    contacts: [
      {
        name: 'Alex Jonathan',
        title: 'CEO',
        img: require('@/assets/alex jonathan.jpg'),
        address: '491  Pride Avenue, Brooklyn, NY',
        company: 'Twitter, Inc.',
        text: '795 Folson Ave, Suite 600 <br>San Francisco, CA 95323',
        phone: '(123) 4567890'
      },
      {
        name: 'John Smith',
        title: 'Graphic Designer',
        img: require('@/assets/john-smith.jpg'),
        address: '491  Pride Avenue, Brooklyn, NY',
        company: 'Twitter, Inc.',
        text: '795 Folson Ave, Suite 600, San Francisco, CA 95323',
        phone: '(123) 4567890'
      },
      {
        name: 'Sandra Smith',
        title: 'Graphic Designer',
        img: require('@/assets/sandra smith.jpg'),
        address: '1700  Harrison Street, CA',
        company: 'Twitter, Inc.',
        text: '795 Folson Ave, Suite 600, San Francisco, CA 95323',
        phone: '(123) 4567890'
      }
    ]
  },
  mutations: {
    add ({ contacts }, contact) {
      contacts.push(contact)
    },
    edit: ({ contacts }, contact) => {
      contacts[contacts.indexOf(contact)] = contact
      // contacts[contacts.indexOf(contact)].edit = !contact.edit
    },
    remove: ({ contacts }, contact) => {
      contacts.splice(contacts.indexOf(contact), 1)
    }
  },
  actions: {

  }
})
