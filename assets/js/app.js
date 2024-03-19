const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },

  methods: {
    getApi() {
      axios.get(this.apiUrl).then((response) => {
        this.email = response.data.response;
      });
    },
  },
}).mount("#app");
