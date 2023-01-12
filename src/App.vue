<template>
  <div class="modal" v-if="showCard" :style="showCard ? 'display: flex;' : 'display: none' ">
    <transition name="fade">
      <div class="suspended-card">
        <button @click="handleOption1">Sorter</button>
        <button @click="handleOption2">Order Start 2</button>
        <button @click="handleOption3">Esteira</button>
        <button @click="handleOption4">Rejeito</button>
        <button @click="handleOption5">Limpar</button>
      </div>
    </transition>


    <transition name="fade" class="modalInput" v-if="showCardInput">
      <div class="suspended-card">
        <label for="">identificador plc</label>
        <label for="">nome no banco de dados</label>
        <button @click="handleOption6">Salvar</button>

      </div>
    </transition>
  </div>
  <main>
    <table>
      <tr v-for="(row, i) in rows" :key="i">
        <td v-for="(col, j) in cols" :key="j" :id="[i, j].join('')" @click="handleClickInTable"></td>
      </tr>
    </table>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showCard = ref(false)
const showCardInput = ref(false)
const height = window.screen.height - 60
const width = window.screen.width - 60
const rows = Array.from({ length: height / 60 }, (_, i) => i)
const cols = Array.from({ length: width / 60 }, (_, i) => i)
const id = ref('')

const handleClickInTable = (e) => {
  showCard.value = !showCard.value
  id.value = e.target.id
}

const handleOption1 = () => {
  showCardInput.value = true
  document.getElementById(id.value).classList.remove(['sorter', 'esteira', 'rejeito'])
  document.getElementById(id.value).className += ' sorter'
}

const handleOption2 = () => {
  document.getElementById(id.value).classList.remove(['sorter', 'esteira', 'rejeito'])
  document.getElementById(id.value).className += ' order'
  showCardInput.value = true
}

const handleOption3 = () => {
  document.getElementById(id.value).classList.remove(['sorter', 'order', 'rejeito'])
  document.getElementById(id.value).classList.add('esteira')
  showCard.value = false
}

const handleOption4 = () => {
  document.getElementById(id.value).classList.remove(['sorter', 'order', 'esteira'])
  document.getElementById(id.value).classList.add('rejeito')
  showCardInput.value = true
}

const handleOption5 = () => {
  document.getElementById(id.value).classList.remove(['sorter', 'order', 'esteira', 'rejeito'])
  showCard.value = false
}

const handleOption6 = () => {
  showCardInput.value = false
  showCard.value = false
}
</script>

<style scoped lang="scss">
label {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #ffc500;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  min-width: 200px;
  cursor: pointer;

  &:hover {
    background-color: #bf9200;
  }
}



.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  .suspended-card {
    position: absolute;
    background-color: rgb(145, 145, 145);
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .modalInput {
  @extend .modal;
  z-index: 2;
  width: 400px;
  height: 400px;
}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

td {
  /*  background-color: #eee;
  border: 1px solid #ccc; */
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: rgb(165, 165, 165);
  }
}

.sombra {
  box-shadow: 0 0 10px 0 rgba(62, 62, 62, 0.5);
}

/* td:nth-child(odd) {
  background-color: #ddd;

  &:hover {
    background-color: rgb(165, 165, 165);
  }
} */

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: rgb(247, 247, 247);

  .active {
    background-color: rgb(255, 0, 0);
  }

  .sorter {
    background-color: #AA09B3;
    border-radius: 10px;
    
    @extend .sombra;
  }

  .order {
    background-color: #13D7AF;
    border-radius: 10px;
    @extend .sombra;
  }

  .esteira {
    background-color: #F419FF;
    border-radius: 10px;
    
    @extend .sombra;
  }

  .rejeito {
    background-color: #B38D12;
    border-radius: 10px;
    
    @extend .sombra;
  }
}
</style>