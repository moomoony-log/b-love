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
						<span>
							<p style={{fontSize:"50px"}}>
								commençons maintenant à gerer
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
						<span>
						<p>Politique de Confidentialité</p>
						<span style={{fontWeight: "lighter"}}>
							<p>Dernière mise à jour : [2025-12-31]</p>

							Chez B-Love, nous prenons la protection de vos données personnelles très au sérieux. Cette politique de confidentialité explique quelles données nous collectons, pourquoi nous les collectons, comment nous les utilisons et quels sont vos droits.

							En utilisant notre application [Nom de l'Application] (ci-après "l'Application"), vous acceptez les pratiques décrites dans cette politique. <br /><br />

							&nbsp;&nbsp;&nbsp;1. Responsable du traitement
							Le responsable du traitement de vos données est :
							[Nom de votre Société ou votre Nom]
							[Adresse]
							[Adresse e-mail de contact]
							[Numéro de téléphone]<br /><br />

							&nbsp;&nbsp;&nbsp;2. Données que nous collectons
							Nous collectons plusieurs types de données pour fournir et améliorer notre service :

							Données que vous nous fournissez directement :

							Lors de la création de votre compte : nom, adresse e-mail.

							Profil : photo de profil, numéro de téléphone (si vous choisissez de les ajouter).

							Contenu que vous créez ou publiez dans l'Application.

							Données collectées automatiquement :

							Données d'usage : Informations sur la façon dont vous utilisez l'Application (fonctionnalités utilisées, durée de la session, fréquentation).

							Données de l'appareil : Type d'appareil, système d'exploitation, identifiants uniques (comme l'IDFA ou l'AdID), langue, et adresse IP.

							Localisation : Si vous l'autorisez, nous collectons votre position précise ou approximative via le GPS ou les réseaux Wi-Fi pour vous offrir des fonctionnalités basées sur la localisation.

							Cookies et technologies similaires :

							Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité dans notre Application et conserver certaines informations. Vous pouvez refuser les cookies dans les paramètres de votre navigateur. <br /><br />

							&nbsp;&nbsp;&nbsp;3. Finalités et bases légales du traitement
							Nous utilisons vos données pour les finalités suivantes, reposant sur des bases légales précises :

							Finalité du traitement  Base légale
							Fournir et maintenir l'Application, y compris la gestion de votre compte.   Exécution du contrat.
							Vous contacter pour des raisons liées au service (notifications push, e-mails de sécurité, support client). Exécution du contrat / Intérêt légitime.
							Personnaliser votre expérience et vous proposer du contenu pertinent.   Intérêt légitime (améliorer notre service).
							Analyser l'utilisation de l'Application pour en améliorer les fonctionnalités et la performance.    Intérêt légitime.
							Envoyer des newsletters et des communications marketing (si vous y avez consenti).  Consentement (que vous pouvez retirer à tout moment).
							Détecter et prévenir la fraude et les abus. Intérêt légitime / Obligation légale. <br /><br />
							&nbsp;&nbsp;&nbsp;4. Partage de vos données
							Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des tiers de confiance dans les situations limitées suivantes :

							Fournisseurs de services (Sous-traitants) : Des entreprises qui nous aident à faire fonctionner notre service (hébergeurs, services d'analyse, outils de support client, processeurs de paiement). Ils n'ont accès à vos données que pour effectuer ces tâches en notre nom et sont contractuellement tenus de les protéger.

							Obligations légales : Si la loi l'exige (mandat, procédure judiciaire).

							Protection de nos droits : Pour protéger nos droits, notre propriété ou notre sécurité, ainsi que celle de nos utilisateurs. <br /><br />

							&nbsp;&nbsp;&nbsp;5. Transferts de données en dehors de l'UE
							Si nous transférons vos données vers des pays situés en dehors de l'Espace Économique Européen (EEE), nous nous assurons qu'elles bénéficient d'une protection adéquate, comme des Clauses Contractuelles Types de la Commission Européenne. <br /><br />

							&nbsp;&nbsp;&nbsp;6. Conservation des données
							Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour atteindre les finalités décrites dans cette politique. Lorsque nous n'en avons plus besoin, nous les supprimons ou les anonymisons. <br /><br />

							&nbsp;&nbsp;&nbsp;7. Vos droits
							Conformément au RGPD, vous disposez des droits suivants concernant vos données :<br />

							Droit d'accès et de rectification.<br />

							Droit à l'effacement (« droit à l'oubli »).<br />

							Droit de limitation du traitement.<br />

							Droit à la portabilité de vos données.<br />

							Droit d'opposition au traitement fondé sur l'intérêt légitime.<br />

							Droit de retirer votre consentement à tout moment (pour le marketing).<br />

							Droit de définir des directives relatives au sort de vos données après votre mort.<br />

							Pour exercer ces droits ou pour toute question sur cette politique, contactez-nous à : [Votre adresse e-mail dédiée à la protection des données/privacy@votresite.com].<br />

							Vous avez également le droit d'introduire une réclamation auprès de l'autorité de protection des données de votre pays (en France, la CNIL). <br /><br />

							&nbsp;&nbsp;&nbsp;8. Sécurité
							Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100%. <br /><br />

							&nbsp;&nbsp;&nbsp;9. Modifications de cette politique
							Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en vous notifiant via l'Application ou par e-mail. <br /><br />

							Pour nous contacter :
							Pour toute question relative à cette politique de confidentialité ou à vos données, veuillez nous contacter à l'adresse suivante : contact@blove.com.
						</span>
						</span>
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
