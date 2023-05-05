<script>
export default {
  data() {
    return {

    }
  }
}
</script>



<template>
  <main>     
    <div class="container">
      <div class="imagem">
          <img src="@/assets/img/kauhana.jpg" height="500" />
      </div>
      <div class="box">
        <h1> Oi! Meu nome é Kauhana, mas pode me chamar de <b>KAUh</b>.</h1>
      </div>
    </div> 
    
  </main>
</template>

<style scoped>

div.container {
  display: flex;
  flex-direction: row;
  position: relative;
}
.box {
  display: flex;
  border-style: 3px solid #FF6B1A;
  box-shadow: 0 0 2px 2px white;
  width: 40vh;
  padding-left: 30vh;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 25px;
  text-align: center;
  border-radius: 280px 80px 80px 20px;
  
}

.imagem img {
  float: flex;
  border-radius: 300px;
  position: absolute;

}



h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
}

p {
  font-family: 'Dosis', sans-serif;
  font-weight: 100;
  color: white;

}

</style>


