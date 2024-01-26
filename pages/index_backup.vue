<template>
  <div id="app">
    <div class="login-form">
      <form>
        <div class="image-container">
          <img src="https://banner2.cleanpng.com/20180418/gre/kisspng-human-resources-login-management-information-payro-track-5ad7cda3586cb1.5605091515240923233622.jpg" alt="Image Description" class="image">
        </div>
        <div>
          <label for="username" class="label bold">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username">
        </div>
        <div>
          <label for="password" class="label bold">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <header>
      <div class="logo">
        <!-- Uncomment the following line if you want to add a logo -->
        <!-- <img src="https://www.sait.ca/assets/images/events/ev-sait-logo-500x500.jpeg" alt="Logo"> -->
      </div>
      <div class="branding">
        <div class="buttons">
          <!-- Remove or comment out the following line to hide the "Welcome" text -->
          <!-- <p v-if="false">{{ user.email }}</p> -->
        </div>
        <nav>
          <!--<NuxtLink to="about">About</NuxtLink>-->
          <NuxtLink to="/employees">Employees</NuxtLink>
          <NuxtLink to="/departments">Departments</NuxtLink>
          <NuxtLink to="/signup">Create Account</NuxtLink>
          <!--<button type="button" @click="goToSignup">Signup</button> -->
        </nav> 
      </div>
    </header>

    <main>
      <!-- Your main content goes here -->
    </main>
    
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style scoped>
#app {
  background: url('https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=1380&t=st=1706121222~exp=1706121822~hmac=20200cdfd404e55f5d3f83ee821a2e152ae4ee0592401a0446aa85f14b019ea7') center center/cover no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px;
  text-align: center;
}

.image-container {
  text-align: center;
}

.image {
  width: 270px;
  height: 200px;
  margin-bottom: 16px;
  background: none;
}

.label {
  color: #007BFF;
  margin-bottom: 4px;
}

.label.bold {
  font-weight: bold;
}

input {
  margin-bottom: 8px;
  padding: 8px;
}

button {
  padding: 8px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
}

header {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.logo img {
  width: 70px;
  height: auto;
}

.branding {
  display: flex;
  align-items: center;
  margin-right: auto;
}

nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 20px;
}

a, div {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #007BFF;
}

.buttons {
  display: flex;
  gap: 8px;
}

.CPRG {
  color: rgba(0, 0, 0, 0.7);
  margin-left: 10px;
  font-size: 40px;
}
</style>

