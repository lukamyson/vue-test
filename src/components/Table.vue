<template>
  <div class="v-table" v-if="comments" >
    <div class="v-table-header" >
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
        <p>Body</p>
    </div>
    <div class="v-table__body">
        <Tablerow v-for="comment in paginatedUsers"
        :key="comment.id"
        :comment="comment"/>
      
        
    </div>
    <div class="table_pagination">
      <div class="page" 
       v-for="page in pages"
       :key="page"
       @click="pageClick(page)"
       :class="{page_selected: page === pageNumber}"
       >{{ page }}
       
      </div>
    </div>
  </div>
</template>

<script>

import Tablerow from '@/components/Tablerow.vue';
import { mapActions, mapState} from "vuex";



export default {
   
    data(){
      return{
        commentPerPage: 10,
      pageNumber: 1,
      };
    },
    components:{
      Tablerow
    },
    mounted(){
    this.getComment()
  }
  ,
  methods: {
    ...mapActions( "comment", ["getComment"]),
    pageClick(page) {
      this.pageNumber = page;
    },
    pageClick(page){
      this.pageNumber = page;
    }
  },
  computed: {
    ...mapState('comment',["comments"]),
    pages() {
      return Math.ceil(this.comments.length / this.commentPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.commentPerPage,
        to = from + this.commentPerPage;
      return this.comments.slice(from, to);
    },
  },
};
    
  
   
      
   
    
 
</script>

<style>

.v-table{
 max-width: 900px;
 margin: 0 auto;  
 

}

.v-table-header{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  border-bottom: 1px solid #e7e7e7;
  

}
.table_pagination{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page{
  padding: 8px;
  margin-right: 10px;
  border: solid 1px#e7e7e7;

}
.page:hover{
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.page_selected{
  background: #aeaeae;
}

</style>