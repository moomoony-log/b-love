import { useEffect, useRef } from "react";
import Input, { type InputRef } from "./components/basic/input"


function App() {

  useEffect(()=>{
    console.log(useRef<InputRef>(null).current?.state);
    
  },[useRef<InputRef>(null).current])
  
  
 
  return (
    <>
      <div id="auth">
        <div className="head" >
            <img src="./libs/img/logB-love.png" alt=""/>
            <button type="button" className="ui-btn" name="password-forget">Vous n'avez pas de compte  <i className="fa-solid fa-circle-question"></i> </button>
            <button type="button" className="ui-btn" name="password-forget">Vous avez dèjà un compte  <i className="fa-solid fa-circle-question"></i> </button>
        </div>

        <div className="auth-container">
            <Input type="text" name="area" placeholder="vente" icon="fa-solid fa-circle-question"/>

        </div>
      </div>
     

      
    </>
  )
}

export default App
