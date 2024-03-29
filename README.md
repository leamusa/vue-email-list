# vue-email-list

# Description:

Through the Boolean API https://flynn.boolean.careers/exercises/api/random/mail generate 10 email addresses and print them on page within a list.

# Bonus

Only display email addresses when they have all been generated.

# Tools

1. Define an object with a method `data()`, which returns an object containing three properties:

- `emailList`: an empty array that will be populated with the email addresses obtained from the API.
- `numEmail`: the number of email addresses you want to get from the API, set to 10 by default.
- `apiUrl`: the URL of the API that returns random email addresses.

2. Mount the Vue application on the element with the id `app` in HTML, using the `mount("#app")` method.

3. Use the `mounted()` method to call `getApi()`. This ensures that once the Vue application is mounted, the email addresses will be fetched and displayed in the HTML.

4. Methods:

- `getEmail()`: This method uses Axios to make a GET request to the specified API. Once the response is received, the email address is added to the `emailList` array.
- `getApi()`: This method calls `getEmail()` a number of times equal to the value of `numEmail`, thus populating the `emailList` array with a predefined number of email addresses.
