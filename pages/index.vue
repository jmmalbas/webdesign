<template>
  <div class="welcome-page">
    <nav class="navbar">
      <div class="buttons">
        <!--<button class="login-button">Login</button>-->
        <NuxtLink to="/login" class="sign-button">Log In</NuxtLink>
        <!--<button class="signup-button">Sign Up</button>-->
        <NuxtLink to="/signup" class="sign-button">Sign Up</NuxtLink>
        <NuxtLink to="/employees" class="sign-button">Employees</NuxtLink>
        <NuxtLink to="/departments" class="sign-button">Departments</NuxtLink>
      </div>
    </nav>
    <div class="content-container">
      <h1 class="title">CPRG - 206</h1>
      <h1 class="title">Database Web Integration</h1>
      <div class="image-container">
        <img class="course-image" src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18135.jpg?w=1060&t=st=1706246053~exp=1706246653~hmac=626caa7bcfd6466ffa003c31eee7873a461558e8562972b874fe3cb7d0528930" alt="Course Image">
      </div>
      <div class="textbox">
        <p class="description">
          Welcome to our dynamic website creation course! In this course, you will gain the
          knowledge and skills needed to build exciting and interactive websites. You'll
          learn the process of creating dynamic sites that pull content from a database.
          Additionally, you'll master the art of designing web interfaces for databases,
          allowing seamless data input without the need for HTML or database expertise.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ... your component options ...
}
</script>

<style scoped>
.welcome-page {
  text-align: center;
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7) url('https://img.freepik.com/free-vector/worldwide-connection-blue-background-illustration-vector_53876-76826.jpg?w=1380&t=st=1706417840~exp=1706418440~hmac=8f5e49608254d1d0525f522a7aaee378db1e6139bc45cdcd2c849430143d0505') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.sign-button {
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
.sign-button:hover {
  background-color: #eee; /* Light gray background color on hover */
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.title {
  color: white;
  font-size: 3.4em;
  margin: 0;
  transition: color 0.3s ease;
}

.title:hover {
  color: black;
}

.image-container {
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.course-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-image:hover {
  transform: scale(1.1);
}

.textbox {
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 560px; /* Fixed width */
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.textbox:hover {
  transform: scale(1.05); /* Zoom in a bit on hover */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Add a bit more shadow on hover */
}

.description {
  margin: 0;
  line-height: 1.6;
  font-size: 1.2em;
  color: #333;
}
</style>
