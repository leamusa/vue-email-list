// Create a Vue application instance
const app = Vue.createApp({
  // Define the data properties
  data() {
    return {
      // Array to store the list of emails retrieved from the API
      emailList: [],
      // Number of email addresses to retrieve from the API
      numEmail: 10,
      // URL of the API to fetch random email addresses
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  // Define methods
  methods: {
    // Method to make a GET request to the API to retrieve a random email address
    getEmail() {
      return axios.get(this.apiUrl); // Return the axios promise
    },
    // Method to fetch multiple email addresses using getEmail method
    fetchEmails() {
      // Call getEmail method numEmail times and wait for all promises to resolve
      Promise.all(Array.from({ length: this.numEmail }, () => this.getEmail()))
        .then((results) => {
          // Extract responses from resolved promises and add them to emailList array
          this.emailList = results.map((result) => result.data.response);
        })
        .catch((error) => {
          // Handle errors if any during fetching of data
          console.error("Error fetching data:", error);
        });
    },
  },
  //  Vue instancemounted to the DOM
  mounted() {
    // Call fetchEmails method to start fetching email addresses after the instance has been mounted
    this.fetchEmails();
  },
});

// Mount the Vue application instance to the DOM element with id "app"
app.mount("#app");
