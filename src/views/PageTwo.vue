<template>

<h1>2</h1>

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
