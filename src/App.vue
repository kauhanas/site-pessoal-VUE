<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

export default {
  components: {
    HomeView
  }

}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Portifolio">Portifolio</RouterLink>
        <RouterLink to="/Curriculo">Curriculo</RouterLink>
      </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    meu rodapé
  </footer>

</template>

<style scoped>

header {
  background: rgb(231, 231, 231);
  position: fixed;
  top: 0;
  z-index:2;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
}

header nav {
  display: flex;
  justify-content: space-between;
  width: 20%;

  
}

main {
    padding-top: 10vh;
    min-height: 120vh;
    background: rgb(0, 53, 44);
}

footer {
 background: rgb(224, 168, 12);
}
</style>
