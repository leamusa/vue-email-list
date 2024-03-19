const { createApp } = Vue;

createApp({
  data() {
    return {
      numEmail: 10,
      email: [],
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },

  methods: {
    getEmail() {
      axios.get(this.apiUrl).then((result) => {
        console.log(result.data.response);
        this.email.push(result.data.response);
      });
    },
  },
  mounted() {
    for (let i = 0; i < this.numEmail; i++) {
      this.getEmail();
    }
  },
}).mount("#app");
