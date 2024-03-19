const app = Vue.createApp({
  data() {
    return {
      emailList: [],
      numEmail: 10,
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  methods: {
    getEmail() {
      axios.get(this.apiUrl).then((result) => {
        this.emailList.push(result.data.response);
      });
    },
    getApi() {
      for (let i = 0; i < this.numEmail; i++) {
        this.getEmail();
      }
    },
  },
  mounted() {
    this.getApi();
  },
});

app.mount("#app");
