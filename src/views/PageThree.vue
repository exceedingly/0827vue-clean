<template>

<h1>3</h1>

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

  }
</script>

<style scoped>

</style>
