<template>
  <main>
    <div class="centered-container">
      <h1>Departments</h1>
      <!-- render the fetched and sorted data in two columns -->
      <div class="department-columns">
        <div v-for="department in sortedDepartments" :key="department.DEPARTMENT_ID" class="department-item">
          {{ department.DEPARTMENT_NAME }}
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

.department-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px; /* Adjust the gap as needed */
}

.department-item {
  padding: 8px;
  border: 1px solid #ccc;
  background-color: black; /* Set black background */
  color: white; /* Set white font color */
  transition: transform 0.3s ease; /* Add transition for smooth effect */
}

.department-item:hover {
  transform: scale(1.1); /* Apply zoom effect on hover */
}
</style>

<!-- Fetch data and sort departments -->
<script setup>
const { data, error } = await useFetch("/api/departments", {
  headers: useRequestHeaders(["cookie"]),
});
console.log("Data:", data);
console.log("Error:", error);

let departments = data._value.departments;

// Sort the departments alphabetically
const sortedDepartments = departments.slice().sort((a, b) => a.DEPARTMENT_NAME.localeCompare(b.DEPARTMENT_NAME));
</script>
