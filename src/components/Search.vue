<template>
  <div class="search">
    <input type="text" v-model="search" placeholder="Type name or number" />
    <div class="search__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          fill="#c9cdd0"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "search-com",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GET_SEARCH"]),
    search: {
      get() {
        return this.GET_SEARCH;
      },
      set(value) {
        this.updateSearch(value);
      },
    },
  },
  methods: {
    ...mapMutations(["updateSearch"]),
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  -webkit-box-shadow: 0px 0px 6px 1px #c9cdd0;
  box-shadow: 0px 0px 6px 1px #c9cdd0;
  align-items: center;
  border-radius: 3px;
  padding: 7px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 3px;
  }
  &__icon {
    width: 15px;
  }
}
</style>
