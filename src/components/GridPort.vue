<template>
    <div class="grid">
      <div v-for="photo in photos" :key="photo.src" class="grid-item">
        <img :src="photo.src" :alt="photo.alt">
        <p>{{ photo.caption }}</p>
      </div>

    </div>
</template>
  
<script>


import photo1 from "/img/lotr.png"
import photo2 from "/img/gato.png"
import photo3 from "/img/quadro.jpg"
import photo4 from "/img/magicleap.jpg"
import photo5 from "/img/ovo.png"
import photo6 from "/img/rack.png"


  export default {
    data() {
      return {
        photos: [
          { src: photo1, alt: 'Photo 1' , caption: "Acessórios diversos em madeira maciça."},
          { src: photo2, alt: 'Photo 2' , caption: "Produtos ergonômicos para pets, como comedouros e rampas elevadas."},
          { src: photo3, alt: 'Photo 3' , caption: "Produtos para decoração e utensílios de casa."},
          { src: photo4, alt: 'Photo 4' , caption: "Pesquisa com usuários e roadmaps de tendências tecnológicas."},
          { src: photo5, alt: 'Photo 5' , caption: "Impressão 3d e acabamento com pintura."},
          { src: photo6, alt: 'Photo 6' , caption: "Design Industrial, produtos técnicos."},

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
  align-items: center;
  flex-direction: center;
  margin-left: 10vh;
  margin-right: 10vh;
  padding-bottom: 10vh;
  row-gap: 10vh;

}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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