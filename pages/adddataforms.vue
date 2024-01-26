<!-- AddDataForm.vue -->

<template>
  <form @submit.prevent="submitForm">
    <label for="column1">Column 1:</label>
    <input v-model="formData.column1" type="text" id="column1" required>

    <label for="column2">Column 2:</label>
    <input v-model="formData.column2" type="text" id="column2" required>

    <!-- Add more input fields for other columns -->

    <button type="submit">Add Data</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '~/plugins/supabase'; // Import your Supabase instance

const formData = ref({
  column1: '',
  column2: '',
  // Add more properties for other columns
});

const submitForm = async () => {
  try {
    // Use Supabase function to insert data into the table
    const { data, error } = await supabase.from('your_table_name').upsert([
      {
        column1: formData.column1,
        column2: formData.column2,
        // Add more properties for other columns
      },
    ]);

    if (error) {
      console.error('Error adding data:', error.message);
    } else {
      console.log('Data added successfully:', data);
      // Reset form data after successful submission
      formData.value = {
        column1: '',
        column2: '',
        // Reset other columns
      };
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};
</script>
