
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo(props) {
    console.log(props.todo); 
    const { title, dec, id } = props.todo ;

    return (  
        <article>

        <div>
            <h3>{title}</h3>
            <p>{dec}</p>
        </div>

        <div>
            <button>  <FaRegTrashAlt />  </button>
        </div>


        </article>
    
    
    
    )
}

export default Todo;