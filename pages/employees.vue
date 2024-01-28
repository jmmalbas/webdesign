<template>
  <main style="background-image: url('https://img.freepik.com/free-vector/worldwide-connection-blue-background-illustration-vector_53876-76826.jpg?w=1380&t=st=1706417840~exp=1706418440~hmac=8f5e49608254d1d0525f522a7aaee378db1e6139bc45cdcd2c849430143d0505'); 
  background-size: cover; background-position: center; height: 100vh;">
    <div class="employees-container">
          <h1 class="emp">Employees</h1>
      <!-- Create a container for the employee columns with a transparent background -->
      <div class="employee-container">
        <div class="employee-columns">
          <div v-for="employee in sortedEmployees" :key="employee.EMPLOYEE_ID" class="employee-item">
            {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="buttons">
        <NuxtLink to="/" class="signup-button">Home</NuxtLink>
        <NuxtLink to="/departments" class="signup-button">Departments</NuxtLink>
        <!-- Add any other navigation buttons as needed -->
      </div>
    </nav>
  </main>
</template>

<style scoped>


.employees-container {
  text-align: center;
  margin: auto;
  max-width: 1500px; /* Adjust the max-width as needed */
}

/* Container for employee columns with a transparent background */
.employee-container {
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black background */
  padding: 20px; /* Adjust the padding as needed */
  border-radius: 10px; /* Add border-radius for rounded corners */
}

.employee-columns {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px; /* Adjust the gap as needed */
}

.employee-item {
  padding: 10px;
  border: 1px solid #ccc;
  color: rgb(183, 182, 182); /* Set white font color */
  transition: transform 0.3s ease; /* Add transition for a smooth effect */
}

.employee-item:hover {
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

.emp {
  color: white;
  font-size: 3.4em;
  margin: 20px 0; /* Add margin to the bottom */
  transition: color 0.3s ease;
}

.emp:hover {
  color: black;
}

</style>

<script setup>
  const { data } = await useFetch("/api/employees", {
    headers: useRequestHeaders(["cookie"]),
  });
  let employees = data._value.employees;

  // Sort the employees alphabetically
  const sortedEmployees = employees.slice().sort((a, b) => a.FIRST_NAME.localeCompare(b.FIRST_NAME));
</script>
