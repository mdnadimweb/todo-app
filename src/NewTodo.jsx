import { useState } from 'react';
import React from 'react';
import './newtodo.css';
function NewTodo() {

    const handleSubmit = (event) => {

        event.preventDefault (); 
        const [todo , setTodo] = useState ({ title :"" , dec: ""})
    }


    return ( <>
    
            <form onSubmit={ handleSubmit }>
                    <div className="title">
                        <label htmlFor="title ">title</label>
                        <input type="text " name="title " id="title " />
                    </div>
                    <div className="dec">
                        <label htmlFor="dec">dec</label>
                        <textarea type="text " name="dec" id="dec" />
                    </div>

            </form>
    
    </> );
}

export default NewTodo;