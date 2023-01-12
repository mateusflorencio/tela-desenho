<template>
  <main>
    <table>
      <tbody>
        <tr v-for="(row, i) in matrix" :key="i">
          <td v-for="(col, j) in row" :class="col.class" :key="j" :id="`${i}-${j}`" @click="handleClickInTable">
          </td>
        </tr>
      </tbody>
    </table>
  </main>

  <nav>
    <div>
      <button @click="() => classe = 'order'" class="order">Order</button>
      <button @click="() => classe = 'sorter'" class="sorter">Sorter</button>
      <button @click="() => classe = 'esteira'" class="esteira">esteira</button>
      <button @click="() => classe = 'rejeito'" class="rejeito">rejeito</button>
      <button @click="() => classe = 'pdv'" class="pdv">pdv</button>
      <button @click="limpar">Limpar</button>
      <button>Salvar</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const classe = ref('')
const matrix = ref([])
const size = 50
const height = window.screen.height - size
const width = window.screen.width - size
const rows = Array.from({ length: height / size }, (_, i) => i)
const cols = Array.from({ length: width / size }, (_, i) => i)
matrix.value = rows.map(() => cols.map(() => ({ class: '' })))

const handleClickInTable = (e) => {
  const [row, col] = e.target.id.split('-').map((item) => Number(item))
  if (matrix.value[row][col].class) matrix.value[row][col].class = ''
  else matrix.value[row][col].class = classe.value
}

const limpar = () => {
  matrix.value = rows.map(() => cols.map(() => ({ class: '' })))
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: rgb(30, 30, 30);
  position: fixed;

  table {
    width: 100vw;
    height: 100vh;

    td {
      background-color: rgba(36, 36, 36, 0.3);
      cursor: pointer;
      border-radius: 10px;

      &:hover {
        background-color: rgb(125, 125, 125);
      }
    }
  }
}

nav {
  background-color: transparent;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;

  div {
    width: 80%;
    height: 100px;
    background-color: #161616;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 0 10px 0 rgba(62, 62, 62, 0.5);
    border-radius: 30px 30px 0 0;

    button {
      background-color: #5312B3;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 0 10px 0 rgba(62, 62, 62, 0.5);
    }
  }
}


.sombra {
  box-shadow: 0 0 10px 0 rgba(62, 62, 62, 0.5);
}

.order {
  background-color: #13D7AF !important;
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

.sorter {
  background-color: #AA09B3 !important;
  border-radius: 10px;
  @extend .sombra;
}

.pdv {
  background-color: #FFC500 !important;
  border-radius: 10px;
  @extend .sombra;
}
</style>