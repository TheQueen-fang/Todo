import { React, useRef, useState } from 'react';
function Refelement() {
     let Refele = useRef("");
    let [name,setName] = useState("Nidhi");
   
    console.log(Refele);
    function reset() {
        setName("");
        Refele.current.focus();
    }
    function handleInput() {
        Refele.current.style.color="pink";
    }
    return (
        <>
            <h1>Hello </h1>
            <input ref={Refele} type="text" value={name} onChange={(e) => {
                setName(e.target.value);
            }}></input>
            <button onClick={reset}>Reset</button>
            <button onClick={handleInput}>HandleInput</button>
        </>
    )
}
export default Refelement;