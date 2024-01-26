<template>
  <main>
    <div class="centered-container">
      <h1>Employees</h1>
      <!-- render the fetched and sorted data in two columns -->
      <div class="employee-columns">
        <div v-for="employee in sortedEmployees" :key="employee.EMPLOYEE_ID" class="employee-item">
          {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.centered-container {
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
  transition: transform 0.3s ease; /* Add transition for smooth effect */
}

.employee-item:hover {
  transform: scale(1.1); /* Apply zoom effect on hover */
}
</style>

// Example in Employees.vue
// Inside Employees.vue or Departments.vue
<script setup>
  const { data, error } = await useFetch("/api/employees", {
    headers: useRequestHeaders(["cookie"]),
  });
  console.log("Data:", data);
  console.log("Error:", error);
  
  let employees = data._value.employees;

  // Sort the employees alphabetically
  const sortedEmployees = employees.slice().sort((a, b) => a.FIRST_NAME.localeCompare(b.FIRST_NAME));
</script>
