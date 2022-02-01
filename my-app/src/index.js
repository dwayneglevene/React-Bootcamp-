import React, { Children } from 'react';
import ReactDom from 'react-dom';
import './index.css';

// GLOBAL VARIABLES FOR ALL ITEMS IN THE BOOK COMPONENT

//first book in the list {

const books = [

{ id:1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61HsOY0oMbL._AC_UL254_SR254,254_.jpg',
  title: ' I Love you to the Moon and Back',
  author: 'Dwayne Levene',
},{
  id:2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61HsOY0oMbL._AC_UL254_SR254,254_.jpg',
  title: 'Brooklyn way',
  author:' Jigga man',
},{
  id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61HsOY0oMbL._AC_UL254_SR254,254_.jpg',
  title: 'They were begoe columbusw',
  author:' Jigga man',
},

];
//List of books creation
function Booklist(){
  return( 
   <section className = "booklist">

     {/* //runs throught object with differnt books and maps prints them out
     id is neccessary for react to keep track of all objcts */}
     {books.map((book) =>{
       const {img,title,author} = book;
       return(
         <Book key={book.id} book={book}></Book>
       )
     })}
   </section>
  )
}

//Book creation

//img title aurhor can be passed and destrcutor in function parameters  
const Book = (props) => {
  const {img,title,author} = props.book;
  //console.log(props);
  return(
    <article className = 'book'>
        <img src = {img} />
      
      <h1>{title}</h1>
      <h4>{author}</h4>
    
    </article>
    
  )
}








ReactDom.render(<Booklist />, document.getElementById('root'));