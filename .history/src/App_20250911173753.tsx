import { useRef, useState } from "react"
import Input from "./components/basic/input"
import Button from "./components/basic/button"

// --> CONTENEUR DE CREATION DE COMPTE 
const NewAccountComponent = () => {
	const change = () => {
		console.log('go');
	}
	return (
		<>
		<div className="container" data-name="new-account">
			<Input type="text" placeholder="Nom d'utilisateur" icon="fa-regular fa-user" validation={{minLenght:4}} />
			<Input type="email" placeholder="Email" icon="fa-regular fa-at" />
			<Input type="phone" placeholder="Numéro de téléphone"/>
			<Input type="password" placeholder="Mot de passe" icon="fa-regular fa-key" validation={{minLenght:8}} />
			<Input type="password" placeholder="Confirmer le mot de passe" icon="fa-regular fa-key" validation={{minLenght:8}} />
			<div className="input-btn-container">
				<Button size="large" type="button" outline="true" onclick={change} icon="fa-regular fa-right-to-bracket"/>
			</div>
			<div className="regist">
				<Button size="large" type="button" outline="true" onclick={change} name="Continuer avec Google" icon="fa-brands fa-google"/>
			</div>
		</div>
		</>
	)
}

// --> POINT D'ENTREE DANS L'APP(INDEX --> AUTH)
function App() {

	// --> Selection des elements de Auth
	const InputRe = useRef<HTMLButtonElement>(null)
	const authTitle = useRef<HTMLParagraphElement>(null)
	const conditionOfUseCont = useRef<HTMLDivElement>(null)

	const [activeNewAccountBtn, setActiveNewAccountBtn] = useState(true)
	const [activeAccountBtn, setActiveAccountBtn] = useState(false)
	const [returnBtn, setReturnBtn] = useState(false)
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
		setReturnBtn(true)
	}

	const newAccountAction = () => {
		setActiveNewAccountBtn(false)
		setActiveAccountBtn(true)
		authTitleChange('new-account')

	}
	const accountAction = () => {
		setActiveNewAccountBtn(true)
		setActiveAccountBtn(false)
		authTitleChange('connect')
	}

	const returnAction = () => {
		setConditionOfUse(true)
		if(conditionOfUseCont.current) conditionOfUseCont.current.style.display = "none"
		setActiveNewAccountBtn(true)
		setActiveAccountBtn(false)
		authTitleChange('connect')
		setReturnBtn(false)
	}

	const auth = () => {
		console.log(InputRe.current?.setAttribute('data-inner',''));
	}


	return (
		<>
			<div id="auth">
				<div className="head" >
					<img src="public/img/logB-love.png" alt=""/>
					{activeNewAccountBtn && (<Button type="button" name="Vous n'avez pas de compte" color="" size="small" icon="fa-solid fa-circle-question" onclick={newAccountAction} />)}
					{activeAccountBtn && (<Button type="button" name="Vous avez dèjà un compte " color="" size="small" icon="fa-solid fa-circle-question" onclick={accountAction} />)}
					{returnBtn && (<Button type="button" name="Retour" color="" size="small" icon="fa-solid fa-rotate-left" onclick={returnAction}/>)}
				</div>
				<div className="auth-container">

					<div className="rule-present cool-scroll-bar" style={{ display: "one" }} ref={conditionOfUseCont}>
							<p style={{fontSize:"60px", fontFamily:"unset"}}>
								cherchons les bonnes choses sur B-Love
							</p> 
							<div className="rules-cont">
								<a href="">Conditions d'Utilisations</a> |
								<a href="">Politique de confidentialité</a>
							</div>
						
					</div>

					{conditionOfUse && (
					<div className="auth-input">
						<p ref={authTitle} />
						<div className="volet-container">
							{activeNewAccountBtn && (
								<div className="container" data-name="auth" style={{ display: "non" }}>
								<span className="log-title">
									<i className="fa-light fa-fingerprint" />
									Une authentification est requise afin de vous connectez à B-love.
								</span>
								<form action="">
									<Input icon="fa-regular fa-at" name="email" placeholder="Email ou Identifiant ou Numéro"
										type="email" validation={{minLenght: 4}}/>
									<Input icon="fa-regular fa-key" name="password" placeholder="Mot de passe"
										type="password" validation={{minLenght: 4}}/>
									<div className="input-btn-container">
										<Button type="submit" 
											icon="fa-regular fa-right-to-bracket" 
											size="large" 
											outline="true" 
											onclick={auth}
											ref={InputRe}
										/>
										<Button type="button" 
											icon="fa-solid fa-circle-question" 
											size="large" 
											outline="true" 
											onclick={auth}
											name="Mot de passe oublié"
										/>
									</div>
									<div className="regist">
										<Button type="button" 
											icon="fa-brands fa-google" 
											size="large" 
											outline="true"
											onclick={auth}
											name="Continuer avec Google"
										/>
									{/* <span>Vous n'avez pas de compte | <a href="">Inscription</a> </span> */}
									
									</div>
								</form>
							</div>)}
							{activeAccountBtn && <NewAccountComponent/>}
						</div>
					</div>)
					}
				</div>
				<div className="input-btn-container" data-name="btn-confidentiality">
					<Button type="button" 
						size="small" 
						outline=""
						onclick={showAuthCont}
						name="Condition d'utilisation"
						{...(!conditionOfUse && {disable : true} ) }
					/> |
					<Button type="button" 
						size="small" 
						outline=""
						onclick={auth}
						name="Politique de confidentialité"
					/>
				</div>
			</div>
		</>
	)
}

export default App
