<template>
  <div id="app">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Family Library</title>
    <link href="spin.css" rel="stylesheet" type="text/css" />
  </head>
 

     <h1>Family Library</h1>

     <div id="parent-container">
     <div id="container">

    


    <BookTable ref="bookTableRef" />
    <BookForm @render-new="renderNew" />

  
     </div>
     </div>


   
  
   
  </div>

</template> 



<script src="spin.js"></script>
<script src="import.js"></script>
<script>
import BookForm from './components/BookForm.vue'
import BookTable from './components/BookTable.vue'

export default {
  name: 'App',
  components: {
    BookForm,
    BookTable
  },
  data() {
    return {

    }
  },
  methods: {
    renderNew() {
      this.$refs.bookTableRef.render();
    }
  }
}











</script>



<style>
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}



th {text-align: left;
    padding: 15px;}

#read {
    width: 80px;
    text-align:center;
}

body {
    text-align: center;

}

tr td {
    border-bottom: 1pt solid black;
}

th { 
    border-bottom: 1px solid #555;
    border-top: 1px solid #555;
}

table td {
    padding: 15px;
}

#radioLeft {text-align:left;}

form {border: 1px black solid;
width: 750px;
margin: 0 auto;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 20px;
padding-right: 10px;
text-align: right;
}

form label {display:block;
    text-align: left;}

.text {
    width: 100%;
    height: 30px;
    font-size: 14px;

}

table tr:first-child { 
    background-color: white;
}

table tr:nth-child(2n+3) {
    background-color: rgb(183, 207, 248);
}


table {
    border-spacing: 0;
    border-collapse: collapse;
}

html, body {
    width: 100%;
}
table {
    margin: 0 auto;
}


.removeButton:hover {
    background-color: rgb(209, 28, 28);

}

button { 
    padding: 10px 5px;
    background-color: #5995DA;
    color: white;
    font-weight: bold;
    border: none;
}

button:hover {
    background-color: rgb(123, 169, 250);
    cursor: pointer;
}

#close {

    color: red;
    text-align: right;
    font-size: 20px;

}

#close:hover {

    cursor:pointer;
    color: darkred;
}


#newbook {
    margin-top: 10px;
}

#submit {
    width: 60px;
    height: 30px;
    background-color: #5995DA;
    color: white;
    font-weight: bold;
    border: none;

}

#wrapperAdd {
    text-align:center;
}

#submit:hover {
    background-color: rgb(123, 169, 250);
    cursor: pointer;
}


td[data-attribute]:hover {
cursor: pointer;

-webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */     
  
}

.remove {
    text-align:left;
}

#member {width:10%;}
</style>
