import { useState } from "react";

function CallBack(props) {
    const [add, setAdd] = useState(0);
    const [min, setMin] = useState(70);
    function myFun(){console.log("child Component");}
    return (
        
        <>
            <h1>Learning useCallBack</h1>
            
            <h1>{add}</h1>
            <button onClick={() => {
                setAdd(add + 1);
            }}>Click Me</button>
            <button onClick={() => {
                {myFun()}
                setMin(min - 1);
            }}>Click Me Minus</button>
        </>
    )
    
}
export default CallBack;