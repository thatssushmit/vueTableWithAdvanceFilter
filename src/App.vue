<template>
  <div class="container text-center  mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success "> Database with Advance Filter </h1>
    <div class="table-responsive my-5">
      <!-- The table component -->
      <Table></Table>
    </div>

  </div>
</template>
<script>
// Importing the table component
import Table from './components/table.vue'
export default {
  name: 'App',
  components: {
    Table
  },
  setup() {
    //An array of values for the data
  },
}
</script>

 <style>
   body {
     min-height: 700px;
   }
 
   smart-grid {
     width: 100%;
     height: auto;
   }
 </style> 