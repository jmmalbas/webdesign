<template>
  <main>
    <div class="employees-container">
      <h1>Employees</h1>
      <!-- render the fetched and sorted data in two columns -->
      <div class="employee-columns">
        <div v-for="employee in sortedEmployees" :key="employee.EMPLOYEE_ID" class="employee-item">
          {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}
        </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="buttons">
        <NuxtLink to="/" class="signup-button">Home</NuxtLink>
        <!-- Add any other navigation buttons as needed -->
      </div>
    </nav>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: url('https://www.chesterapps.co.uk/wp-content/uploads/2022/04/data-intregration.png') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.employees-container {
  text-align: center;
  margin: auto;
  max-width: 800px; /* Adjust the max-width as needed */
}

.employee-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px; /* Adjust the gap as needed */
}

.employee-item {
  padding: 8px;
  border: 1px solid #ccc;
  background-color: black; /* Set black background */
  color: white; /* Set white font color */
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
</style>

<script setup>
  const { data } = await useFetch("/api/employees", {
    headers: useRequestHeaders(["cookie"]),
  });
  let employees = data._value.employees;

  // Sort the employees alphabetically
  const sortedEmployees = employees.slice().sort((a, b) => a.FIRST_NAME.localeCompare(b.FIRST_NAME));
</script>
