<script setup>
// TODO: Set up the supabase client
const supabase = useSupabaseClient();
// TODO: set up input variables
const email = ref("");
const password = ref(null);

// TODO: create sign in function
async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) throw error;
}
// TODO: access the logged in user and show the users information
const user = useSupabaseUser();
</script>
<template>
  <main>
    <h1>Login Page</h1>
    <section>
      <label for="email">
        email
        <input type="email" v-model="email" />
      </label>
      <label for="password">
        password
        <input type="password" v-model="password" />
      </label>

      <button @click="signIn">Sign In with E-Mail</button>
    </section>
    <section>
      <h1>Active user information</h1>
      <!-- Show user information -->
      <p>{{ user.email }}</p>
    </section>
  </main>
</template>
