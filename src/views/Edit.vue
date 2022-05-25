<template>
  <div class="edit">
    <div class="edit__widget main">
      <div @click="$router.go(-1)" class="edit__widget-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            fill="#c9cdd0"
          />
        </svg>
        BACK
      </div>
      <div class="edit__widget-avatar">AR</div>
      <div class="edit__widget-contactInfo">
        <div class="detail__widget-contactInfo-sections">
          <span>First Name</span>
          <input type="text" v-model.trim="$v.contactForm.firstName.$model" />
          <p
            class="error"
            v-show="$v.contactForm.firstName.$error && erorrStatus"
          >
            This field is required
          </p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Last Name</span>
          <input type="text" v-model.trim="$v.contactForm.lastName.$model" />
          <p
            class="error"
            v-show="$v.contactForm.lastName.$error && erorrStatus"
          >
            This field is required
          </p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Phone Number</span>
          <input
            type="tel"
            v-model.trim="$v.contactForm.phoneNumber.$model"
          />
          <p
            class="error"
            v-show="$v.contactForm.phoneNumber.$error && erorrStatus"
          >
            This field is required
          </p>
        </div>
        <div class="detail__widget-contactInfo-sections">
          <span>Email Address</span>
          <input type="email" v-model.trim="$v.contactForm.email.$model" />
          <p class="error" v-show="$v.contactForm.email.$error && erorrStatus">
            Should be a valid email
          </p>
        </div>
      </div>
      <div class="actions">
        <div class="wr-icon">
          <div class="save" @click="saveEdit">
            <img src="@/assets/images/save.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "edit-views",
  data() {
    return {
      contactForm: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
      erorrStatus: false,
    };
  },
  validations: {
    contactForm: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      phoneNumber: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    ...mapGetters(["GET_IS_EDIT", "GET_CURRENT_CONTACT"]),
  },
  created() {
    if (this.GET_IS_EDIT) {
      const obj = {
        firstName: this.GET_CURRENT_CONTACT.firstName,
        lastName: this.GET_CURRENT_CONTACT.lastName,
        phoneNumber: this.GET_CURRENT_CONTACT.phoneNumber,
        email: this.GET_CURRENT_CONTACT.email,
      };
      this.contactForm = obj;
    }
  },
  // destroyed() {
  //   this.setCurrentContact({});
  // },
  methods: {
    ...mapMutations(["addNewContact", "editContact", "setCurrentContact"]),
    saveEdit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.erorrStatus = true;
      } else {
        if (this.GET_IS_EDIT) {
          this.editContact({
            ...this.contactForm,
            id: this.GET_CURRENT_CONTACT.id,
          });
          this.$router.push("/");
        } else {
          const obj = {
            ...this.contactForm,
            img: "person.jpeg",
            id: `${this.contactForm.firstName}${new Date().toLocaleString()}`,
          };

          this.addNewContact(obj);
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  font-size: 0.75rem;
  color: rgb(215, 39, 39);
}
.edit__widget-back {
  cursor: pointer;
}
.detail__widget-contactInfo-sections {
  input {
    outline: none;
    padding: 7px;
    color: #c9cdd0;
    font-size: 1.3rem;
    width: 100%;
    border: none;
    border-bottom: 2px solid #c9cdd0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
