<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
// data - variáveis que podem ser alteradas pelos metodos  
// metodos - funções que posso utilizar a qualquer momento e também para atualizar o data
// computed - variável definida em função de 1 ou mais variáveis do data, ou de outras coisas(exemplo: rota atual) 


export default {
  components: {
    HomeView
  },
  computed: {
    selectedRoute(){
      return this.$route.name
    }
  },  
  methods: {
    isSelectedRoute(name) {
      return this.$route.name === name
    }
  }

}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />

      <nav>
        <RouterLink to="/" :class="{active: isSelectedRoute('Home')}">Home</RouterLink>
        <RouterLink to="/Portifolio" :class="{active: isSelectedRoute('Portifolio')}">Portifolio</RouterLink>
        <RouterLink to="/Hobbies" :class="{active: isSelectedRoute('Hobbies')}">Hobbies</RouterLink>
      </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <p>Entre em contato comigo!</p>
    <div class="social-icons">
      <a href="https://www.instagram.com/kauhanas/"><i class="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/in/kauhana-souza-19026311a/"><i class="bi bi-linkedin"></i></a>
      <a href="https://www.behance.net/KauhanaS"><i class="bi bi-behance"></i></a>
    </div>
  </footer>

</template>

<style scoped>
.active {
  color: #FF6B1A;
  outline: 1px solid #004744;
  outline-offset: 15px;
  border-radius: 10px;

}

header {
  background: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  display: flex;
  top: 0;
  z-index:2;
  width: 100vw;
  height: 10vh;
  align-items: center;
  padding-left: 10vh;
  padding-right: 10vh;
}

header nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline-end: 20vh;
  width:20%;
  color: #004744;

}

main {
    padding-top: 10vh;
    min-height: 120vh;
    background: #004744;
}

.footer {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  justify-content: center;
}

.social-icons {
  font-size: 24px;
  margin-bottom: 15px;
  justify-content:space-between;

}

.social-icons a {
  display: inline-block;
  margin-right: 20px;
  color: #B33F00;
  transition: color 0.2s;
}

</style>
