import React from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummytodos = [

    {
        id : 1 , 
        title : "todo title " ,  
        dec : "todo1 dectription is herer"
    },


    {
        id : 2 , 
        title: "todo title 2 " , 
        dec : "todo2 dectription is here "
    }


]


function Home() {
    return ( 
        <>
        <h1 className="" >the todo app for learning </h1>
        <NewTodo />
        <Todos todos = {dummytodos } /> 
        </>
     );
}

export default Home;

