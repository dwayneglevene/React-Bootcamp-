import React, { Children } from 'react';
import ReactDom from 'react-dom';
import './index.css';
// 3:05 in video
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
     {/* ...book spread that says give me all book props */}
     {books.map((book) =>{
       const {img,title,author} = book;
       return(
         <Book key={book.id} {...book}></Book>
       )
     })}
   </section>
  )
}

//Book creation

//img title aurhor can be passed and destrcutor in function parameters  
const Book = ({img,title,author,id}) => {

  //attribute,eventHandler
  //onClick, onMouseOver
  //reference function example below call it in your onclick
  const clickHandler = () =>{
    alert("Snelloooooooo");
  }
  return(
    <article className = 'book'>
        <img src = {img} />
      {/* below example of inline function */}
      
      <h1 onClick ={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}></button>
    
    </article>
    
  )
}








ReactDom.render(<Booklist />, document.getElementById('root'));