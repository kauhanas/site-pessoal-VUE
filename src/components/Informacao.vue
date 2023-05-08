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
        <div class="generico">
            <div class="local">
                <img src="@/assets/my_icons/local.svg" height="80"/>
                <h1>Porto União Santa Catarina </h1>
            </div>
            <div class="birthday">
                <img src="@/assets/my_icons/birthday.svg" height="80"/>
                <h1>26 de Fevereiro de 1992 </h1>
            </div>
            <div class="veg">
                <img src="@/assets/my_icons/veg.svg" height="80"/>
                <h1>Vegetariana </h1>
            </div>
            <div class="pisces">
                <img src="@/assets/my_icons/pisces.svg" height="60"/>
                <h1>Signo: Peixes </h1>
            </div>
        </div>

        <div class="banoff">
            <div class="pet">
                <img src="@/assets/my_icons/pet.svg" height="60"/>
                <h2>Banoff Carmelo:</h2>
                <p>Meu doginho guerreiro e super carinhoso.</p>
            </div>
            <div class="fotos">
                <img src="@/assets/img/banoff4.jpg" height="400" />
                <img src="@/assets/img/banoff1.jpg" height="400" />
                <img src="@/assets/img/banoff3.jpg" height="400" />
                <img src="@/assets/img/dog2.jpg" height="400" />
            </div>
        </div>
    </main>
</template>

<style scoped>

div.generico {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    height: fit-content;
    width: 100%;
}

div.birthday {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 200px;
}

div.veg {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 200px;
}
div.local {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 200px;
}

div.pisces {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 200px;
    margin-top: 20px;
}

h1 {
    color: white;
    font-family: 'Dosis', sans-serif;
    font-weight: 100;
    font-size: 25px;
    text-align: center;
}

div.banoff {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin-top: 80px;
    margin-bottom: 50px;

}

div.pet img {
    display: flex;
    flex-direction: row;
    width: 100%;
    

}

div.pet h2 {
    display: flex;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 35px;
    color: white;
}
div.pet p {
    display: flex;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 25px;
    color: white;
}

div.fotos {
    display: flex;
    flex-direction: row;
    justify-items: space-around;
    width: 100%;
    

}
div.fotos img {

    border-radius: 60px;
    margin-inline: 20px;
    border-bottom: solid #F24405 15px;
    border-radius: 40px 40px 40px

}
</style>