import { useRef } from "react";
import Input, { type InputRef } from "./components/basic/input"


function App() {

  const InputRef = useRef<InputRef>(null)
  
  const newAccount = () => {
    console.log(InputRef.current?.validate);
  }

  return (
    <>
      <div id="auth">
        <div className="head" >
            <img src="./libs/img/logB-love.png" alt=""/>
            <button type="button" className="ui-btn" name="new-account" onClick={newAccount}>Vous n'avez pas de compte  <i className="fa-solid fa-circle-question"></i> </button>
            <button type="button" className="ui-btn" name="password-forget">Vous avez dèjà un compte  <i className="fa-solid fa-circle-question"></i> </button>
        </div>
        <div className="auth-container">
            <Input type="text" name="area" placeholder="vente" icon="fa-solid fa-circle-question" ref={InputRef} validation={{minLenght:3}}/>
        </div>
      </div>
     
    </>
  )
}

export default App
