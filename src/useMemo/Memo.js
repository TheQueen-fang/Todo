import React,{ useMemo, useState } from "react"

function Memo() {
    let [num, fun] = useState(0);
    let [dec, decFun] = useState(100);
   // function Multiply() { console.log("*************"); console.log(dec); return num * num; }
    let multiply = useMemo(() => {
       // console.log("*******");
        return num * num;
    }, [num]);
    //let val = typeof (multiply);
    return (
        
        <>
            
            {multiply}<br></br>
           {num} <button onClick={() => {
                fun(num + 1);
            }}>Add</button><br></br>
           {dec} <button onClick={() => {
                decFun(dec - 1);
            }}>Subtract</button>
        </>
    )
}
export default Memo;