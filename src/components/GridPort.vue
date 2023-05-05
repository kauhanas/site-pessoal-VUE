<template>
    <div class="grid">
      <div v-for="photo in photos" :key="photo.src" class="grid-item">
        <img :src="photo.src" :alt="photo.alt">
        <p>{{ photo.caption }}</p>
      </div>

    </div>
</template>
  
<script>
import photo1 from '../assets/img/photo1.png'

  export default {
    data() {
      return {
        photos: [
          { src: photo1, alt: 'Photo 1' , caption: "teste"},
          { src: "/img/photo2.png", alt: 'Photo 2' , caption: "teste"},
          { src: "/img/photo3.png", alt: 'Photo 3' , caption: "teste"},
          { src: "/img/photo4.png", alt: 'Photo 4' , caption: "teste"},
          { src: "/img/photo5.png", alt: 'Photo 5' , caption: "teste"},
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


<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 120px;
  margin-left: 10vh;
  margin-right: 10vh;
}

.grid-item {
  position: center;
}

.grid-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: solid #FF6B1A 15px;
  border-radius: 5px 5px 40px 40px

}

.grid-item p {
  color: white;
}
</style>