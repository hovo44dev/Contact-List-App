import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store({
  state: {
    phoneList: [
      {
        id: 1,
        firstName: "Bob",
        lastName: "Marley",
        phoneNumber: "+374 91235634",
        img: "person.jpeg",
        email: "bobmarley@mail.ru",
      },
      {
        id: 2,
        firstName: "Cristiano",
        lastName: "Ronaldo",
        phoneNumber: "+374 933335634",
        img: "person.jpeg",
        email: "cristiano@mail.ru",
      },
      {
        id: 3,
        firstName: "Linux",
        lastName: "Towards",
        phoneNumber: "+374 91299634",
        img: "person.jpeg",
        email: "linuxtowards@mail.ru",
      },
      {
        id: 4,
        firstName: "Maria",
        lastName: "Sharapova",
        phoneNumber: "+374 91299634",
        img: "person.jpeg",
        email: "maria@mail.ru",
      },
      {
        id: 5,
        firstName: "Frank",
        lastName: "Sinatra",
        phoneNumber: "+374 91299634",
        img: "person.jpeg",
        email: "sinatra@mail.ru",
      },
      {
        id: 6,
        firstName: "Pablo",
        lastName: "Escobar",
        phoneNumber: "+374 91299634",
        img: "person.jpeg",
        email: "escobar@mail.ru",
      },
      {
        id: 7,
        firstName: "Leonardo",
        lastName: "Da Vinci",
        phoneNumber: "+374 91299634",
        img: "person.jpeg",
        email: "leo@mail.ru",
      },
    ],
    currentContact: {},
    isEdit: false,
    search: "",
  },
  getters: {
    GET_PHONE_LIST: (state) => state.phoneList,
    GET_CURRENT_CONTACT: (state) => state.currentContact,
    GET_IS_EDIT: (state) => state.isEdit,
    GET_SEARCH: (state) => state.search,
  },
  mutations: {
    setCurrentContact(state, newValue) {
      state.currentContact = newValue;
    },
    deleteContact(state, id) {
      state.phoneList = state.phoneList.filter((contact) => contact.id !== id);
    },
    addNewContact(state, newContact) {
      state.phoneList.push(newContact);
    },
    editContact(state, contact) {
      state.phoneList.map((element, index) => {
        if (element.id === contact.id) {
          state.phoneList[index] = { ...element, ...contact };
        }
      });
    },
    setIsEdit(state, bool) {
      state.isEdit = bool;
    },
    updateSearch(state, newValue) {
      state.search = newValue;
    },
  },
  actions: {},
  plugins: [vuexLocal.plugin],
});
