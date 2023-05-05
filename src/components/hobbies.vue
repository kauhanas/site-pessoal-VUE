<template>
      <div class="hobbieleft">
          <i class="bi bi-instagram"></i>
          <h1>teste </h1>
          <img src="@/assets/img/kauhana.jpg" height="300"/>
      </div>
      <div class="hobbieright">
          <img src="@/assets/img/kauhana.jpg" height="300"/>
          <h1>teste </h1>
          <i class="bi bi-instagram"></i>
      </div>
  </template>

<style scoped>

div.hobbieleft {
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding-top: 3vh;
  padding-inline-start: 15%;
  padding-inline-end: 30%;
  align-items: center;
}

div.hobbieright {
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding-top: 3vh;
  padding-inline-start: 30%;
  padding-inline-end: 15%;
  align-items: center;
}

div img {
  border-radius: 50px;

}
</style>