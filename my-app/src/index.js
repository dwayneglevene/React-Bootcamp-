import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// GLOBAL VARIABLES FOR ALL ITEMS IN THE BOOK COMPONENT

const title= "Dragon Dragon !";
const author = "Dwayne Levene";
const image ='https://cdn.vox-cdn.com/thumbor/Sszn-potcL5sfhxoLeeHEOFty9A=/0x0:1600x959/920x613/filters:focal(670x165:926x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69260607/FunFilms_DBSBroly_Landing.0.jpg';

function Booklist(){
  return( 
    <section className="booklist">
          <Book/>
          <Book/>
        

    </section>
  )
}

function Book(props){
  console.log(props);
  return(
    <article className = 'book'>
        <img src = {image} />
      
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>

    </article>
    
  )
}








ReactDom.render(<Booklist />, document.getElementById('root'));