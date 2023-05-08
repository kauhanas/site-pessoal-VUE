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
        <h1> Oi! Meu nome é Kauhana, mas pode me chamar de <b>Kauh</b>.</h1>
        <p> Para saber mais é só clicar na minha foto!</p>
      </div>
    </div> 
    
  </main>
</template>

<style scoped>

div.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;
  height: 0;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  left: 20%;
  

  border: solid 2px #F24405;
  border-radius: 280px 80px 80px 20px;
  width: 330px;
  height: 300px;
  padding-left: 340px;
  padding-right: 40px;

  text-align: center;
  
}

.imagem img {
  display: flex;
  z-index: 1;
  border-radius: 100%;
  left: -20%;
  position: relative;

}


h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
}

p {
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: 100;
  color: white;
  width: 270px;

}

</style>


