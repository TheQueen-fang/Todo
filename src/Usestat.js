import { useState, React } from "react";

function Usestat() {
    const [count, update] = useState(0);
    function updateCount() {
        update(count + 1);
    }

 return (
     <>
         <h1>{ count} times clicked ! </h1>
        <button onClick={updateCount}>click</button>
    </>
)   
}

export default Usestat;