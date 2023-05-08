<template>
  <div class="container">
      <div class="hobbieleft">
          <img src="@/assets/my_icons/star.svg" height="35"/>
          <h1>Brincar e passear com o Banoff.</h1>
          <img src="@/assets/img/banoffinho.jpg" height="300"/>
      </div>
      <div class="hobbieright">
          <img src="@/assets/img/varinha.jpg" height="300"/>
          <h1>Esculpir, pintar e desenhar.</h1>
          <img src="@/assets/my_icons/star.svg" height="35"/>
      </div>
      <div class="hobbieleft">
          <img src="@/assets/my_icons/star.svg" height="35"/>
          <h1>Cinema, teatro, e shows, principalmente de ROCK.</h1>
          <img src="@/assets/img/cinema.jpg" height="300" />
      </div>
      <div class="hobbieright">
          <img src="@/assets/img/rupaul.png" height="300"/>
          <h1>Assistir filmes/séries 'nerds' e reality-shows de todos os tipos.</h1>
          <img src="@/assets/my_icons/star.svg" height="35"/>
      </div>
      <div class="hobbieleft">
          <img src="@/assets/my_icons/star.svg" height="35"/>
          <h1>Ver o céu com telescópio (quando Curitiba ajuda).</h1>
          <img src="@/assets/img/telescope.jpg" height="300"/>
      </div>
    </div>
  </template>

<style scoped>

.container {
  padding-top: 3%;
  padding-bottom: 5%;
}

div.hobbieleft {
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding-top: 3vh;
  padding-inline-start: 95vh;
  padding-right: 40vh;
  align-items: center;
}

div.hobbieright {
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding-top: 3vh;
  padding-inline-end: 95vh;
  padding-left: 40vh;
  align-items: center;
}

div img {
  border-radius: 100%;

}

h1 {
  display: flex;
  text-align: center;
  text-justify: distribute;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 30px;
  color: white;
  width: 500px;

}

</style>