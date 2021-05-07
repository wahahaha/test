<template>
  <table border="1">
    <tr v-for="book in books" :key="book" v-show="book.exist">
      <td>{{book.name}}</td>
      <td>￥{{book.price}}元</td>
      <td>
        <button @click="book.num--" :disabled="book.num<2">-</button>
        {{book.num}}
        <button @click="book.num++">+</button>
      </td>
      <td>
        <button @click="book.exist=false">移除</button>
      </td>
    </tr>
    <h4 v-if="total!=0">总金额为：{{total}}</h4>
    <h4 v-else>购物车为空</h4>
  </table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {books: [
      {
        name: 'os',
        price: 32,
        num: 1,
        exist: true
      },
      {
        name: 'db',
        price: 40,
        num: 1,
        exist: true
      },
      {
        name: 'net',
        price: 66,
        num: 1,
        exist: true
      },
      {
        name: 'cal',
        price: 88,
        num: 1,
        exist: true
      }
    ]
    }
  },
  computed: {
    total: function () {
      return this.books.reduce((c1, c2) => { if (c2.exist) { return c1 + c2.price * c2.num } else { return c1 } }, 0)
    }
  }
}
</script>

<style scoped>
td {
  width: 200px;
}
</style>
