import React, { Children } from 'react';
import ReactDom from 'react-dom';
import './index.css';

// GLOBAL VARIABLES FOR ALL ITEMS IN THE BOOK COMPONENT

//first book in the list {

const books = [

{
  img: 'https://images-na.ssl-images-amazon.com/images/I/61HsOY0oMbL._AC_UL254_SR254,254_.jpg',
  title: ' I Love you to the Moon and Back',
  author: 'Dwayne Levene',
},{
  img: 'https://images-na.ssl-images-amazon.com/images/I/61HsOY0oMbL._AC_UL254_SR254,254_.jpg',
  title: 'Brooklyn way',
  author:' Jigga man',
}

];ß
//List of books creation
function Booklist(){
  return( 
   <section className = "booklist">
     {books}
   </section>
  )
}

//Book creation

//img title aurhor can be passed and destrcutor in function parameters  
const Book = (props) => {
  const {img,title,author,children} = props
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