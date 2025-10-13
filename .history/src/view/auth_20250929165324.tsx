
import { Link } from "react-router-dom";
import Input, { type InputRef } from "../components/basic/input";
import Button from "../components/basic/button";
import { useRef, useState } from "react";


// --> CONTENEUR DE CREATION DE COMPTE 
const NewAccountComponent = () => {

	const [activeAuthBtn, setActiveAuthBtn] = useState(false)

	const change = () => {
		console.log('go');
	}

	const checkBoxChange = (e:React.ChangeEvent<HTMLInputElement>):boolean => {
		let valid = true
		if (e.target.checked) {
			valid = true
			setActiveAuthBtn(valid)
		}else{
			valid = false
			setActiveAuthBtn(valid)
		}
		return valid
	}
	


	return (
		<>
			<div className="container" data-name="new-account">
				<Input type="text" placeholder="Nom d'utilisateur" icon="fa-regular fa-user" validation={{minLenght:4}} />
				<Input type="email" placeholder="Email" icon="fa-regular fa-at" />
				<Input type="phone" placeholder="Numéro de téléphone"/>
				<Input type="password" placeholder="Mot de passe" icon="fa-regular fa-key" validation={{minLenght:8}} />
				<Input type="password" placeholder="Confirmer le mot de passe" icon="fa-regular fa-key" validation={{minLenght:8}} />
				<Input type="checkBox" onChangeCheckBox={checkBoxChange} {...(activeAuthBtn && {check: true})} />

				<div className="input-btn-container">
					<Button size="large" type="button" outline="true" onclick={change} icon="fa-regular fa-right-to-bracket" children={false} to={false} color="gray" {...(!activeAuthBtn && {disable: true})} />
				</div>
				<div className="regist">
					<Button size="large" type="button" outline="true" onclick={change}children={false} to={false} name="Continuer avec Google" icon="fa-brands fa-google"/>
				</div>
			</div>
		</>
	)
}

// --> CONTENEUR DE EMAIL DE RECUPERATION*
const EmailRecoveryComponent = () => {

    const [active, setActive] = useState(true)

    const chekValidEmail = () => {
        setActive(false)
    }

    return (
        <>
        {active ? 
            <div className="container" data-name="forget-password">
            <span className="log-title"> 
                Entrez votre email afin de recupérer votre compte.
            </span>
            <Input type="email" placeholder="Entre votre email" icon="fa-regular fa-at" />
            <div className="input-btn-container">
                <Button onclick={chekValidEmail} size="large" type="button" outline="true" icon="fa-regular fa-right-to-bracket" children={false} to={false}/>
            </div>
        </div> : <OptContComponent/>    
        }
        
        </>
    )
}

// --> CONTENEUR DE OTP
const OptContComponent = () => {

    const a = useRef<HTMLDivElement>(null)
    const otpInputState = useRef<InputRef>(null)
    const otpInputState1 = useRef<InputRef>(null)
    const otpInputState2 = useRef<InputRef>(null)
    const otpInputState3 = useRef<InputRef>(null)
    const otpInputState4 = useRef<InputRef>(null)
    
    const validOtp = ()=> {
        console.log("1: ->", otpInputState.current?.isValid);
        console.log("2: ->", otpInputState1.current?.isValid);
        console.log("3: ->", otpInputState2.current?.isValid);
        console.log("4: ->", otpInputState3.current?.isValid);
        console.log("5: ->", otpInputState4.current?.isValid);
    }
  

    return (
         <>
        <div className="container" data-name="otp" >
            <span className="log-title"> 
                Un code a été envoyé à <span>moomooneguene@gmail.com</span>. Merci de le saisir.
            </span>
            <div className="cont-otp-input" ref={a}> 
                <Input type="otp" ref={otpInputState}/> 
                <Input type="otp" ref={otpInputState1} /> 
                <Input type="otp" ref={otpInputState2}/> 
                <Input type="otp" ref={otpInputState3}/> 
                <Input type="otp" ref={otpInputState4}/> 
            </div>
            <div className="input-btn-container">
                <Button type="button" onclick={validOtp}  outline="true" icon="fa-regular fa-right" disable children={false}  to={false} />
            </div>
        </div>
        </>
    )
}

// --> VIEW DE CONNEXION
const Auth = () => {
        // --> Selection des elements de Auth
        const authTitle = useRef<HTMLParagraphElement>(null)
        const conditionOfUseCont = useRef<HTMLDivElement>(null)
        const emailLogin = useRef<InputRef>(null)

        const [emailRecoveryCont, setEmailRecoveryCont] = useState(false)
        const [activeNewAccountBtn, setActiveNewAccountBtn] = useState(true)
        const [activeAccountBtn, setActiveAccountBtn] = useState(false)
        const [authTitleAttribut, setAuthTitleAttribut] = useState('connect')
        const [conditionOfUse, setConditionOfUse] = useState(true)
    
        // --> Affichade/Desaffichage des mini composants
        authTitle.current?.setAttribute('data-name', authTitleAttribut)
        const authTitleChange = (value: string) => {
            authTitle.current?.setAttribute('data-name', value) 
            setAuthTitleAttribut(value)
        }
    
        const showAuthCont = () => {
            setConditionOfUse(false)
            if(conditionOfUseCont.current) conditionOfUseCont.current.style.display = "flex"
            setActiveNewAccountBtn(false)
            setActiveAccountBtn(false)
        }
    
        const newAccountAction = () => {
            setActiveNewAccountBtn(false)
            setActiveAccountBtn(true)
            authTitleChange('new-account')
            setEmailRecoveryCont(false)
        }

        const accountAction = () => {
            setActiveNewAccountBtn(true)
            setActiveAccountBtn(false)
            authTitleChange('connect')
            setEmailRecoveryCont(false)
        }
    
        const auth = () => {
            if(emailLogin.current?.validate.length && emailLogin.current.isValid) console.log(emailLogin.current?.validate.length );
            
        }

        const showEmailRecovery = () => {
            setEmailRecoveryCont(true)
            setActiveNewAccountBtn(false)
            setActiveAccountBtn(false)
            authTitleChange('forget-password')
        }

    return (
        <>
            <div id="auth">
                <div className="head" >
                    <img src="public/img/logB-love.png" alt=""/>
                    {activeNewAccountBtn && (<Button type="button" children={false} to={false} name="Vous n'avez pas de compte" color="" small="small" icon="fa-solid fa-circle-question" onclick={newAccountAction} />)}
                    {activeAccountBtn && (<Button type="button" children={false} to={false} name="Vous avez dèjà un compte " color="" small="small" icon="fa-solid fa-circle-question" onclick={accountAction} />)}
                    {emailRecoveryCont && (<Button children={false} to={false} type="button" name="Retour" color="" small="small" icon="fa-solid fa-rotate-left" onclick={accountAction} />)}
                </div>
                <div className="auth-container">

                    <div className="rule-present cool-scroll-bar" style={{ display: "one" }} ref={conditionOfUseCont}>
                        <p style={{fontSize:"60px", fontFamily:"monospace"}}>
                            Commençons à chercher les bonnes choses sur B-Love
                        </p> 
                        <div className="rules-cont">
                            <Link to="/legacy">Conditions d'Utilisations</Link> | 
                            <Link to="/privacy">Politique de confidentialité</Link>
                        </div>
                    </div>

                    {conditionOfUse && (
                    <div className="auth-input">
                        <p ref={authTitle} />
                        <div className="volet-container">
                            {activeNewAccountBtn && (
                                <div className="container" data-name="auth" style={{ display: "non" }}>
                                <span className="log-title">
                                    Une authentification est requise afin de vous connectez à B-love.
                                </span>
                                <form action="">
                                    <Input icon="fa-regular fa-at" name="email" placeholder="Email ou Identifiant ou Numéro"
                                        type="email" validation={{minLenght: 4}} ref={emailLogin}/>
                                    <Input icon="fa-regular fa-key" name="password" placeholder="Mot de passe"
                                        type="password" validation={{minLenght: 4}}/>
                                    <div className="input-btn-container">
                                        <Button type="submit" 
                                            icon="fa-regular fa-right-to-bracket"  
                                            outline="true" 
                                            onclick={auth}
                                            children={false}
                                            to={false}
                                        />
                                        <Button type="button" 
                                            icon="fa-solid fa-circle-question"  
                                            outline="true" 
                                            onclick={showEmailRecovery}
                                            name="Mot de passe oublié"
                                            children={false}
                                            to={false}
                                        />
                                    </div>
                                    <div className="regist">
                                        <Button type="button" 
                                            icon="fa-brands fa-google"  
                                            outline="true"
                                            onclick={auth}
                                            name="Continuer avec Google"
                                            children={false}
                                            to={false}
                                        />
                                    {/* <span>Vous n'avez pas de compte | <a href="">Inscription</a> </span> */}
                                    
                                    </div>
                                </form>
                            </div>)}
                            {emailRecoveryCont && <EmailRecoveryComponent/>}
                            {activeAccountBtn && <NewAccountComponent/>}
                        </div>
                    </div>)
                    }
                </div>
                <div className="input-btn-container" data-name="btn-confidentiality">
                    <Link to="/legacy">Conditions d'Utilisations</Link> | 
                    <Link to="/privacy">Politique de confidentialité</Link>
                    {/* <Button type="button" 
                        size="small" 
                        onclick={showAuthCont}
                        name="Condition d'utilisation"
                        {...(!conditionOfUse && {disable : true} ) }
                    /> |
                    <Button type="button" 
                        size="small" 
                        onclick={auth}
                        name="Politique de confidentialité"
                    /> */}
                </div>
            </div>
        </>
    )
}

export default Auth