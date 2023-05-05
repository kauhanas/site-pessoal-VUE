<script>
import Apresentacao from '../components/Apresentacao.vue'
import Informacao from '../components/Informacao.vue'

export default {
  components: {
    Apresentacao,
    Informacao
},
  data() {
    return {
      showInfo: false,
    };
  }
}
</script>

<template>
  <div class="estrutura">
    <div class="apresentacao" @click="showInfo = !showInfo">
      <Apresentacao />
    </div>
    <div class="informacoes" v-if="showInfo">
      <Informacao />
    </div>
  </div>
</template>


<style scoped>
div.estrutura {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 80vh;
  align-items: space-around;
  margin-top: 10vh;
  border-color: 2px red;
  margin: 5vh;

}

.apresentacao {
  display: flex;
  flex-direction: column;
}

.informacoes {
  display: flex;
  flex-direction: column;
}

</style>
