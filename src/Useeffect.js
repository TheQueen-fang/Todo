import {useEffect,React, useState } from 'react';

function Useeffect() {
    const [count, update] = useState(0);
    const [name, set] = useState("Nidhi");
    function updateCount() {
        update(count + 1);
    }
    function setData() {
        set("Khushi");
    }
    useEffect(() => {
        console.log("code mounted");
    }, [updateCount]);
    return (
        
        <div>
            <h1> {count} times clicked !</h1>
            <h1>hi {name} </h1>
            <button onClick={updateCount}>Click</button>
            <button onClick={setData}>Update</button>
        </div>
    )
}
export default Useeffect;