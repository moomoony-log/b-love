import { useRef } from "react";
import Input, { type InputRef } from "./components/basic/input"
import Button from "./components/basic/button";


function App() {

	const InputRef = useRef<InputRef>(null)
	const InputRe = useRef<HTMLButtonElement>(null)
	
	const newAccount = () => {
		console.log(InputRef.current?.isValid);
	}
	const auth = () => {
		console.log(InputRe.current?.setAttribute('data-inner',''));
	}

	return (
		<>
			<div id="auth">

				<div className="head" >
					<img src="./libs/img/logB-love.png" alt=""/>
					<Button type="button" name="Vous n'avez pas de compte" color="" size="small" icon="fa-solid fa-circle-question" onclick={newAccount} />
					{/* <button type="button" className="ui-btn" name="password-forget" >Vous avez dèjà un compte  <i className="fa-solid fa-circle-question"></i> </button> */}
				</div>
				<div className="auth-container">
					<div className="rule-present cool-scroll-bar" style={{ display: "one" }}>
						<span>
							<p>
								Bienvenu sur B-Love, Votre meilleur plateforme 100% BIZI avec pour,
								possibilité de recherchez une escorte dans votre entourage à l'aide de
								maps, fiable, rapide et securisé. Profitez-en en créant votre compte
							</p>
							<br />
							<p> Conditions d'Utilisations </p>
							<span style={{ fontWeight: "lighter" }}>
								&nbsp;&nbsp;&nbsp; 1. Acceptation des conditions <br />
								En utilisant B-love, vous acceptez ces Conditions d'Utilisation. Si vous
								n'êtes pas d'accord, veuillez ne pas utiliser l'application. <br />
								&nbsp;&nbsp;&nbsp; 2. Utilisation de l'application <br />
								Vous devez avoir au moins 18 ans pour utiliser cette application. Vous
								êtes responsable de toutes les activités liées à votre compte. Vous vous
								engagez à ne pas utiliser l'application à des fins illégales ou interdites
								par ces conditions. <br />
								&nbsp;&nbsp;&nbsp; 3. Comportement des utilisateurs <br />
								Vous devez respecter les autres utilisateurs et ne pas les harceler,
								intimider ou exploiter. <br />
								Tout contenu inapproprié, illégal ou offensant est interdit et peut
								entraîner la suspension de votre compte. <br />
								&nbsp;&nbsp;&nbsp;4. Responsabilité <br />
								Nous ne sommes pas responsables des interactions entre les utilisateurs en
								dehors de l'application. Nous ne garantissons pas la sécurité ou
								l'exactitude des informations partagées par les utilisateurs. <br />
								&nbsp;&nbsp;&nbsp; 6. Résiliation <br />
								Nous pouvons suspendre ou résilier votre accès à l'application si vous
								violez ces conditions ou si nous estimons que votre comportement est
								préjudiciable à la communauté.
							</span>
						</span>
					</div>
					<div className="auth-input">
						<p data-name="new-account"/>
						<div className="volet-container">
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
									outline="" 
									onclick={auth}
									ref={InputRe}
								/>
								</div>
								<div className="regist">
								{/* <span>Vous n'avez pas de compte | <a href="">Inscription</a> </span> */}
								
								</div>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		 
		</>
	)
}

export default App
