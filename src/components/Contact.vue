<template>
  <router-link
    :to="{ name: 'Detail', params: { id: contact.id } }"
    class="contactItem"
  >
    <div class="contactItem__img">
      <img :src="require(`@/assets/images/${contact.img}`)" alt="" />
    </div>
    <div class="contactItem__info">
      <div class="contactItem__info-fullName">{{ contact.firstName }} {{ contact.lastName }}</div>
      <div class="contactItem__info-phoneNumber">{{ contact.phoneNumber }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "contact-com",
  props: {
    contact: Object,
  },
};
</script>

<style lang="scss" scoped>
.contactItem {
  display: flex;
  border-radius: 4px;
  align-items: center;
  -webkit-box-shadow: 0px 0px 6px 1px #c9cdd0;
  box-shadow: 0px 0px 6px 1px #c9cdd0;
  margin-bottom: 15px;
  cursor: pointer;
  &__img {
    width: 60px;
    height: 60px;
    background: #c3c3c3;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    object-fit: cover;
    img {
      width: 100%;
    }
  }
  &__info {
    margin-left: 20px;
    &-fullName {
      color: #80b8d0;
    }
    &-phoneNumber {
      color: #c9cdd0;
    }
  }
}
</style>
