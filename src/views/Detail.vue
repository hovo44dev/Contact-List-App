<template>
  <div class="detail">
    <div class="detail__widget main">
      <router-link to="/" class="detail__widget-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            fill="#c9cdd0"
          />
        </svg>
        BACK
      </router-link>
      <div class="detail__widget-avatar">AR</div>
      <div class="detail__widget-contactInfo">
        <div class="detail__widget-contactInfo-sections">
          <span>First Name</span>
          <p>{{ GET_CURRENT_CONTACT.firstName }}</p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Last Name</span>
          <p>{{ GET_CURRENT_CONTACT.lastName }}</p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Phone Number</span>
          <p>{{ GET_CURRENT_CONTACT.phoneNumber }}</p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Email Address</span>
          <p>{{ GET_CURRENT_CONTACT.email }}</p>
        </div>
      </div>
      <div class="actions">
        <div class="wr-icon">
          <div class="edit" @click="gotoEdit">
            <img src="@/assets/images/edit.svg" alt="" />
          </div>
          <div class="delete" @click="deleteCurrentContact">
            <img src="@/assets/images/delete.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "detail-views",
  computed: {
    ...mapGetters(["GET_CURRENT_CONTACT", "GET_CURRENT_CONTACT"]),
  },
  methods: {
    ...mapMutations(["deleteContact", "setIsEdit"]),
    deleteCurrentContact() {
      this.deleteContact(this.GET_CURRENT_CONTACT.id);
      this.$router.push("/");
    },
    gotoEdit() {
      this.setIsEdit(true);
      this.$router.push({
        name: "Edit",
        params: { id: this.GET_CURRENT_CONTACT.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
