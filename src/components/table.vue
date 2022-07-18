<template>
  <div>
    <smart-grid id="grid" v-pre></smart-grid>
  </div>
</template>
<script>
import 'smart-webcomponents/source/styles/smart.default.css';
import 'smart-webcomponents/source/modules/smart.grid.js';

export default {
  name: 'TableComponent',
  props: {
    // 
    studentData: {
      type: Array,
    },
    fields: {
      type: Array,
    }
  },
  mounted() {
    window.Smart(
      "#grid", class {
      get properties() {
        return {
          header: {
            visible: true,
            buttons: ["search"]
          },
          columns: [
            {
              label: 'First Name', dataField: 'firstName'
            },
            { label: 'Last Name', dataField: 'lastName' },
            { label: 'Product', dataField: 'productName' }
          ],
          sorting: { enabled: true },
          filtering: { enabled: true },
          appearance: {
            autoShowColumnSortButton: false,
            allowSortAnimation: true
          },
           pager: { visible: true },
           paging: {
                enabled: true,
                pageSize: 10
              },
          
          dataSource: new window.Smart.DataAdapter(
            {
              dataSource: [
                { "firstName": "Beate", "lastName": "Wilson", "productName": "Caramel Latte" },
                { "firstName": "Ian", "lastName": "Nodier", "productName": "Caramel Latte" },
                { "firstName": "Petra", "lastName": "Vileid", "productName": "Green Tea" },
                { "firstName": "Mayumi", "lastName": "Ohno", "productName": "Caramel Latte" },
                { "firstName": "Mayumi", "lastName": "Saylor", "productName": "Espresso con Panna" },
                { "firstName": "Regina", "lastName": "Fuller", "productName": "Caffe Americano" },
                { "firstName": "Regina", "lastName": "Burke", "productName": "Caramel Latte" },
                { "firstName": "Andrew", "lastName": "Petersen", "productName": "Caffe Americano" },
                { "firstName": "Martin", "lastName": "Ohno", "productName": "Espresso con Panna" },
                { "firstName": "Beate", "lastName": "Devling", "productName": "Green Tea" },
                { "firstName": "Sven", "lastName": "Devling", "productName": "Espresso Truffle" },
                { "firstName": "Petra", "lastName": "Burke", "productName": "Peppermint Mocha Twist" },
                { "firstName": "Marco", "lastName": "Johnes", "productName": "Caffe Mocha" }
              ],
              dataFields:
                [
                  'firstName: string',
                  'lastName: string',
                  'productName: string'
                ]
            })
        }
      }
    }
    );
  },
  data() {
    return {
      tableData: null,
      rowTableData: null

    }
  },
  methods: {

  }

}
</script>