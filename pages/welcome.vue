<template>
  <div class="welcome-page">
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

<style scoped>
.welcome-page {
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

.zoom-text:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
