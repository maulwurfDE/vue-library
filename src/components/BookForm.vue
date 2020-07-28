<template>
<div>
      <button v-on:click="show = !show" name="showButton" id="newbook">NEW BOOK</button>
<br/><br/>
      <form v-if="show" id="form" v-on:submit.prevent="mySubmit">
        <a id="close" v-on:click="show = !show">&#10006;</a>
      <label>Title:</label>
        <input type="text" placeholder="The Golden Compass" id="title" class="text" v-model="title" required><br/><br/>
        <label>Author:</label>
      <input type="text" placeholder="Philip Pullman" id="author" class="text" v-model="author" required><br/><br/>
      <label>Pages:</label>
      <input type="text" placeholder="399" id="pages" class="text" required v-model="pages"><br/><br/>
      <label>Your Name:</label>
      <input type="text" placeholder="Moritz" id="familyMember" class="text" required v-model="familyMember"><br/><br/>
      <label>Have you read the book before?</label>
      <div id="radioLeft"><input type="radio" name="read" id="yes" v-on:click="read = true">Yes
      <input type="radio" name="read" v-on:click="read = false"> No </div>
    <br/>

      <div id="wrapperAdd"><input type="submit" value="Add" id="submit"></div>
    </form>

</div>
</template>

<script>
import {rootRef} from '../firebase.js'

export default {
  name: 'BookForm',
  props: {
  },
  data() {
    return {
      title: '',
      author: '',
      pages: '',
      familyMember: '',
      read: '',
      show: false
    }
  },
  methods: {
    mySubmit() {

      addBookToLibrary(this.title,this.author,this.pages,this.read,this.familyMember)
      this.title = "";
      this.author = "";
      this.pages = "";
      this.read = "";
      this.$emit('render-new');
  }
  }
}



class Book {

  constructor(title,author,pages,read,member) {
    return {title, author, pages, read, member}
  }
}

function addBookToLibrary(title,author,pages,read,member) {
  const newBook = new Book(title,author,pages,read,member)
  rootRef.push(newBook);
}






</script>

<style scoped>

</style>
