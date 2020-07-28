<template>
    <div>
      <table style="width:75%" id="myTable">
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th id="read">Read</th>
      <th id="member">Family Member</th>
      <th></th>
 <template v-if="myTable.length > 0">
      <tr v-for="(row, index) in myTable" :key="index"> 
          <td>{{ row.title }}</td>
          <td>{{ row.author}}</td>
          <td>{{ row.pages }}</td>
          <td v-if="row.read" v-on:click="row.read = !row.read; markRead(index);"><center>&#x2714;</center></td>
          <td v-else><center>&#10005;</center></td>
          <td>{{ row.member }} </td>
          <td><button class="removeButton" v-on:click="remove(index)">Remove</button></td>

      </tr>
 </template>
  
      </table>
    </div>          
</template>

<script>
import {spinnerWorks} from "../import.js"
import {rootRef} from "../firebase.js"

export default {
    name: 'BookTable',
    data: function() {
        return {
            myTable: []
        }
    },
    created: function() {
        this.render();
    },
    methods: {
        remove: function(index) {
            rootRef.child(this.myTable[index].prop).remove();
            this.myTable = [];
            this.render();
         },
         render: function() {

            this.myTable = [];
            spinnerWorks.spin(document.getElementById('container'));
            rootRef.once('value', snapshot => {
            spinnerWorks.stop();
            let obj = snapshot.val();
            for (let prop in obj) {
            

                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    this.myTable.push({title: obj[prop].title, author: obj[prop].author, pages: obj[prop].pages, read: obj[prop].read, member: obj[prop].member, prop: prop})
      
            
    
    
                }
    
             }

            })
    },
    markRead: function(index) {
        let newData = {
             read: false
           } 
           console.log(this.myTable[index].prop);
          rootRef.child(this.myTable[index].prop).update(newData);

    }
}
}







</script>

<style scoped>


</style>