<template>
    <div class="grid">
      <div v-for="photo in photos" :key="photo.src" class="grid-item">
        <img :src="photo.src" :alt="photo.alt">
        <p>{{ photo.caption }}</p>
      </div>

    </div>
</template>
  
<script>

  export default {
    data() {
      return {
        photos: [
          { src: "/img/lotr.png", alt: 'Photo 1' , caption: "Acessórios diversos em madeira maciça."},
          { src: "/img/gato.png", alt: 'Photo 2' , caption: "Produtos ergonômicos para pets, como comedouros e rampas elevadas."},
          { src: "/img/quadro.jpg", alt: 'Photo 3' , caption: "Produtos para decoração e utensílios de casa."},
          { src: "/img/magicleap.jpg", alt: 'Photo 4' , caption: "Pesquisa com usuários e roadmaps de tendências tecnológicas."},
          { src: "/img/ovo.png", alt: 'Photo 5' , caption: "Impressão 3d e acabamento com pintura."},
          { src: "/img/rack.png", alt: 'Photo 6' , caption: "Design Industrial, produtos técnicos com processo de injeção plástica, chaparia de metal e etc."},

        ],
      };
    },
    computed: {
      getImg(path){
          return require(path)
      }
    }
  };
  </script>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 10vh;
  margin-right: 10vh;

}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.grid-item img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-bottom: solid #F24405 15px;
  border-radius: 40px 40px 40px

}

.grid-item p {
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: 100;
  width: 400px;

}

</style>