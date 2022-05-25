<template>
  <div class="home">
    <div class="home__widget main">
      <h3 class="home__widget-title">MY CONTACT</h3>
      <div class="home__widget-search">
        <Search />
      </div>
      <div class="home__widget-contact">
        <Contact
          v-for="contact in filteredList"
          :key="contact.id"
          :contact="contact"
          @click.native="setCurrentContact(contact)"
        />
      </div>
      <div class="actions">
        <router-link to="/add-contact">
          <div class="wr-icon">
            <div class="add"><img src="@/assets/images/add.svg" alt="" /></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Contact from "@/components/Contact.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home-view",
  components: {
    Search,
    Contact,
  },
  computed: {
    ...mapGetters(["GET_PHONE_LIST", "GET_SEARCH"]),

    filteredList() {
      return this.GET_PHONE_LIST.filter((contact) => {
        return (
          contact.firstName.toLowerCase().includes(this.GET_SEARCH.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(this.GET_SEARCH.toLowerCase())
        );
      });
    },
  },
  methods: {
    ...mapMutations(["setCurrentContact"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__widget {
    &-title {
      color: #c9cdd0;
      font-size: 1rem;
      padding: 0 5px;
    }
    &-search {
      margin: 20px 0;
      padding: 0 5px;
    }
    &-contact {
      height: 450px;
      overflow-y: scroll;
      padding: 5px;
      &::-webkit-scrollbar {
        width: 0px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
}
</style>
