<template>
    <div class="home container">
        <Contacts/>
    </div>
</template>

<script>
// @ is an alias to /src
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'home',
  components: {
    Contacts
  }
}
</script>
