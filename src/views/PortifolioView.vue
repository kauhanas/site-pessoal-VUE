<script>
import GridPort from '../components/GridPort.vue'
export default {
  components: {
    GridPort
  }

}
</script>

<template>
  <div class="texto">
    <h1>Minha vida profissional:</h1>
    <h2>Possuo Bacharelado em Design pela UTFPR e pós-graduação em Gestão de Projetos pela FAE.</h2>
    <p>Nos últimos anos tive a oportunidade de trabalhar em grupos multidisciplinares compostos por designers, jornalistas, programadores e engenheiros mecatrônicos, atuando em Design Industrial, Design de Serviços, Experiência do Usuário e Pesquisa de Mercado. Em sua maioria, com grande foco no setor de Tecnologia e Consumo para grandes empresas de eletroeletrônicos. Desenvolvi diversos produtos para a área de Telecom aumentando minha expertise em processos de fabricação como chaparia em metal e injeção plástica, além de processos de fabricação digital, como impressão 3D, CNC e corte à laser. Trabalhei ainda, no desenvolvimento de boletins semestrais, analisando assuntos relevantes para o setor de TI como: Internet das Coisas, Inteligência Artificial, Realidade Virtual, Realidade Aumentada e Mista. Também tenho um ateliê onde fabrico diversos produtos em madeira maciça.</p>
  
   <div class="caixaCurr">
    <h4>Se quiser me conhecer melhor, segue meu curriculo:</h4>
  <a href="CV_Kauhana_Souza_2023_PT.pdf" download="Curriculum Kauhana Souza">
        <button type="submmit" class="botaoCurr">
            <img src="@/assets/iconwhite.png" class="icon" >
        </button>
      </a>
    </div>
  
  </div>
  
  <GridPort/>
</template>

<style scoped>

div.texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;

}

h1 {
  display: flex;
  justify-content: center;  
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 400;
  color: #F24405;
}

h2 {
  display: flex;
  text-align: center;
  text-justify: distribute;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 25px;
  color: white;

}

p {
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: 100;
  color: white;

}

.botaoCurr{
  width: 20%;
  border: none;
  background: none;
  width: auto;
}

.icon{
  width: 80px;
}

div.caixaCurr{
  width: 275px;
  height: 175px;
  display: flex;
  flex-direction: column;
  color:#F24405;
  text-align: center;
border:3px solid brown;
align-items: center;
border-radius: 10%;
}


</style>