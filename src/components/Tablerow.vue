<template>
  <div class="table-row" >
    <div class="row row-id">{{ comment.id }}</div>
    <div class="row row-name">{{ comment.name }}</div>
    <div class="row row-email">{{ comment.email }}</div>
    <div class="row row-body">{{ comment.body }}</div>
  </div>
</template>

<script>

export default {
  
props:{
  comment:{
    type:Object,
    default: () => {
        return {};
      },
  }
}
 
}
</script>

<style>
.table-row{
    display: flex;
    justify-content: space-around;
    
    
}
.row{
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>