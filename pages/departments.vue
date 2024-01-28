<template>
  <main style="background-image: url('https://img.freepik.com/free-vector/worldwide-connection-blue-background-illustration-vector_53876-76826.jpg?w=1380&t=st=1706417840~exp=1706418440~hmac=8f5e49608254d1d0525f522a7aaee378db1e6139bc45cdcd2c849430143d0505'); 
    background-size: cover; background-position: center; height: 100vh;">
    <div class="departments-container">
      <h1 class="dept">Departments</h1>
      <!-- Create a container for the department columns with a transparent background -->
      <div class="department-container">
        <div class="department-columns">
          <div v-for="department in sortedDepartments" :key="department.DEPARTMENT_ID" class="department-item">
            {{ department.DEPARTMENT_NAME }}
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="buttons">
        <NuxtLink to="/" class="signup-button">Home</NuxtLink>
        <NuxtLink to="/employees" class="signup-button">Employees</NuxtLink>
        <!-- Add any other navigation buttons as needed -->
      </div>
    </nav>
  </main>
</template>

<style scoped>

.departments-container {
  text-align: center;
  margin: auto;
  max-width: 1000px; /* Adjust the max-width as needed */
}

/* Container for department columns with a transparent background */
.department-container {
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black background */
  padding: 20px; /* Adjust the padding as needed */
  border-radius: 10px; /* Add border-radius for rounded corners */
}

.department-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* Adjust the gap as needed */
}

.department-item {
  padding: 10px;
  border: 1px solid #ccc;
  color: rgb(183, 182, 182); /* Set white font color */
  transition: transform 0.3s ease; /* Add transition for a smooth effect */
}

.department-item:hover {
  transform: scale(1.1); /* Apply zoom effect on hover */
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

.signup-button:hover {
  background-color: #eee; /* Light gray background color on hover */
}

.dept {
  color: white;
  font-size: 3.4em;
  margin: 20px 0; /* Add margin to the bottom */
  transition: color 0.3s ease;
}

.dept:hover {
  color: black;
}
</style>

<script setup>
const { data } = await useFetch("/api/departments", {
  headers: useRequestHeaders(["cookie"]),
});
let departments = data._value.departments;

// Sort the departments alphabetically
const sortedDepartments = departments.slice().sort((a, b) => a.DEPARTMENT_NAME.localeCompare(b.DEPARTMENT_NAME));
</script>
