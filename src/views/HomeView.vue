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
  row-gap: 600px;
  align-items: space-around;
  margin-top: 10vh;

}

</style>
