<template>
  <div class="signup-form">
    <form @submit.prevent="signup">
      <h3>Signup</h3>

      <label for="firstname">First Name:</label>
      <input type="firstname" id="firstname" v-model="userData.password" required />

      <label for="lastname">Last Name:</label>
      <input type="lastname" id="lastname" v-model="userData.password" required />

      <label for="username">Username:</label>
      <input type="username" id="username" v-model="userData.password" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="userData.email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="userData.password" required />


      <button type="submit">Signup</button>
    </form>
    <nav class="navbar">
      <div class="buttons">
        
        <NuxtLink to="/" class="signup-button">Home</NuxtLink>
        <!--<button class="signup-button">Sign Up</button>-->
        <!--<NuxtLink to="/signup" class="signup-button">Sign Up</NuxtLink>-->
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async signup() {
      // ... your signup logic ...
    },
  },
};
</script>

<style scoped>
.signup-form {
  text-align: center;
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7) url('https://www.chesterapps.co.uk/wp-content/uploads/2022/04/data-intregration.png') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

h3 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 0.7); /* Background color for the navbar */
  padding: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle effect */
  margin: auto; /* Center the navbar */
  display: flex; /* Align the buttons horizontally */
  justify-content: flex-end; /* Push the buttons to the right */
}


.buttons {
  margin-right: 30px; /* Adjusted margin to move buttons a bit to the left */
}

.login-button,
.signup-button {
  padding: 5px 30px;
  font-size: 1em;
  color: #333;
  background-color: #fff; /* White background color */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover,
.signup-button:hover {
  background-color: #eee; /* Light gray background color on hover */
}
</style>