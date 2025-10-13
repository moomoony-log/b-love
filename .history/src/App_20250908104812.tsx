import { useRef } from "react";
import Input, { type InputRef } from "./components/basic/input"


function App() {

	const InputRef = useRef<InputRef>(null)
	
	const newAccount = () => {
		console.log(InputRef.current?.isValid);
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
					<div className="rule-present cool-scroll-bar" style={{ display: "one" }}>
						<span>
							<p>
								Bienvenu sur B-Love, Votre meilleur plateforme 100% BIZI avec pour,
								possibilité de recherchez une escorte dans votre entourage à l'aide de
								maps, fiable, rapide et securisé. Profitez-en en créant votre compte
							</p>{" "}
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
					<Input type="text" name="area" placeholder="vente" icon="fa-solid fa-circle-question" ref={InputRef} validation={{minLenght:3}}/>
				</div>
			</div>

		 
		</>
	)
}

export default App
