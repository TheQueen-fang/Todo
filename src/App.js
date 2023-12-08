
//import { createContext } from 'react';
import './App.css';
//import ChildA from './PropDrilling/ChildA';
//import Child from './ContextApi/Child';
// import ChildA from './ContextApi/Child';
//import ChildA from './useContext/ChildA';

//import Refelement from './Refelement.js';
//import Memo from './useMemo/Memo';
// import Form from './Form/Form.js'
//import Form from './FormProj/Form.js'
import Todo from './TODO/Todo'

//import CallBack from './useCallBack/CallBack.js';
// let data = createContext();
// let gender = createContext();
function App() {
  
//   const name = "Nidhi";
//  const mygender = "Female";
  return (
    <div className="App">
    
      {/* <Refelement/> */}
      {/* <ChildA name={"Nidhi"} /> */}
      
      {/* <data.Provider value={name}>
        <gender.Provider value={mygender}>
          <ChildA/>
       </gender.Provider>
      </data.Provider> */}
      {/* <Memo/> */}
      {/* //<CallBack Learning=""/> */}
      {/* <Form/> */}
      <Todo/>
    
    </div>
  );
}

export default App;
// export { data,gender};
