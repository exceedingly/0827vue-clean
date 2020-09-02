<template>
  <div class="about">
   <table>
     <tr>
       <td>编号</td>
       <td>名称</td>
       <td>作者</td>
     </tr>
       <tr v-for="item in books">
           <td>{{item.bookCounts}}</td>
           <td>{{item.bookID}}</td>
           <td>{{item.bookName}}</td>

       </tr>

   </table>

  </div>
</template>


<script>
  export default {
    name: "Book",
    data(){
      return {
        msg: 'Hello vue',
          books:[
              {
                  id: 1,
                  name:'java',
                  author:'mcd'
              },
              {
                  id: 2,
                  name:'Vue',
                  author:'nn'
              },
              {
                  id: 3,
                  name:'linux',
                  author:'xx'
              }
          ]
      }
    },
      created(){
        alert("aaa")
          const _this = this;
        axios.get('http://localhost:8181/mcd1').then(function (resp){
            console.log(resp.data)
            _this.books=resp.data;
        })

      }
  }
</script>

<style scoped>

</style>
