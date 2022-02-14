//Book creation

//img title aurhor can be passed and destrcutor in function parameters  
export const Book = ({img,title,author,id}) => {

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
        <button type="button" onClick={clickHandler}>Owelahs Isani</button>
      
      </article>
      
    )
  }
  
  
  