import { useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Input from "../components/basic/input"
import Button from "../components/basic/button"


// --> content app-right

const Acceuil = () => {

    return (
        <>
         <div className="cont-body cool-scroll-bar"> 
            <div className="publication">
                <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <div className="text-pub">
                    Publier quelques chose ?
                </div>
                <div className="medias">
                    <i className="fa-regular fa-image"></i>
                    <i className="fa-regular fa-video"></i>
                </div>
            </div>
            <div className="filter">
                <span className="one"><i className="fa-solid fa-sliders"></i> FILTRE</span>
                <div className="filter-category">
                    <div className="ui-input">
                        <label htmlFor="birth"><i className="fa-solid fa-cake-candles"></i></label>
                        <select name="birth" id="birth">
                            <option value=""><i className="fa-solid fa-cake-candles"></i> AGE</option>
                            <option value="MOINS DE 20 ANS">MOINS DE 20 ANS</option>
                            <option value="MOINS DE 30 ANS">MOINS DE 30 ANS</option>
                            <option value="PLUS DE 30 ANS">PLUS DE 30 ANS</option>
                        </select>
                    </div>
                    <div className="categdory">
                        <i className="fa-solid fa-layer-group"></i>
                        <div className="categ">
                            <span data-active><i className="fa-regular fa-badge-check"></i> Skinny</span>
                            <span><i className="fa-regular fa-badge-check"></i> Normal</span>
                            <span><i className="fa-regular fa-badge-check"></i> Apoutchou</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pub-item" data-type="COMPTE SIGNALÉ" data-exit>
                <div className="heads">
                    <div className="info-account-about">
                        <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="identity">
                            <span className="name">Cristiano Ronaldo</span>
                            <span className="date">15 Janvier</span>
                        </div>
                    </div>
                    <div className="about-pub-item-btn">
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-plus-large" name="Suivre"/> 
                        <Button children={false} type="button" to={false} size="true" icon="fa-duotone fa-solid fa-siren-on"/> 
                    </div>
                </div>
                <div className="pub-content">
                    <div className="more-info">
                        <span ><i className="fa-regular fa-cake-candles"></i> 23 ans</span>
                        <span><i className="fa-regular fa-user-vneck-hair-long"></i> skinny</span>
                        <span role="exit"><i className="fa-regular fa-map-location"></i> <a href="#ee">cocody abatta</a></span>
                    </div>
                    <span className="pub-comment">
                        Dramane vient officielement de rentrer dans l'histoire en rejettant l'avion de Macron pour Abidjan.
                        L'avion a n'a pas atteri car Dramane a donné l'ordre de le rejétté.
                    </span>
                    <div className="medias-body">
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                    </div>
                </div>
                <div className="pub-controller">
                    <div className="resum-controller">
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <span> 3,6k <i className="fa-solid fa-thumbs-up"></i></span>
                    </div>
                    <div className="content-home-btn" data-parent="pub-item">
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-heart" border/> 
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-phone" border/> 
                    </div>
                </div>
            </div>
            <div className="pub-item" data-type="COMPTE VERIFIÉ" data-good>
                <div className="heads">
                    <div className="info-account-about">
                        <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="identity">
                            <span className="name">Cristiano Ronaldo</span>
                            <span className="date">Sam, 17 Juil 15:59</span>
                        </div>
                    </div>
                    <div className="about-pub-item-btn">
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-plus-large" name="Suivre"/> 
                        <Button children={false} type="button" to={false} size="true" icon="fa-duotone fa-solid fa-siren-on"/>
                    </div>
                </div>
                <div className="pub-content">
                    <div className="more-info">
                        <span ><i className="fa-regular fa-calendar"></i> 23 ans</span>
                        <span><i className="fa-regular fa-person-dress"></i> Skinny</span>
                        <span role="exit"><i className="fa-regular fa-location-dot"></i> <a href="#ee">Cocody</a></span>
                    </div>
                    <span className="pub-comment">
                        Dramane vient officielement de rentrer dans l'histoire en rejettant l'avion de Macron pour Abidjan.
                        L'avion a n'a pas atteri car Dramane a donné l'ordre de le rejétté. Actuellement Dramane est en négociation avec l'AES pour 
                        rejoindre la fédération.
                    </span>
                    <div className="medias-body">
                        <div className="cont-account-img" data-img><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                    </div>
                </div> 
                <div className="pub-controller">
                    <div className="resum-controller">
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <span> 3,6k <i className="fa-light fa-thumbs-up"></i></span>
                    </div>
                    <div className="content-home-btn" data-parent="pub-item">
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-heart" border/> 
                        <Button children={false} type="button" to={false} size="true" icon="fa-regular fa-phone" border/> 
                    </div>
                </div>
            </div>
            <div className="account-discussion">
                <div className="tandance">
                    <span className="title"><i className="fa-duotone fa-earth-americas"></i> En ligne</span>
                    <div className="info-account-about" data-online>
                        <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="identity">
                            <span className="name">Cristiano Ronaldo</span>
                            <span className="date">Sam, 17 Juil 15:59</span>
                        </div>
                    </div>
                    <div className="info-account-about" data-online>
                        <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="identity">
                            <span className="name">Cristiano Ronaldo Agent Delafosse</span>
                            <span className="date">Sam, 17 Juil 15:59</span>
                        </div>
                    </div>
                    <div className="info-account-about">
                        <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="identity">
                            <span className="name">Cristiano Ronaldo</span>
                            <span className="date">Sam, 17 Juil 15:59</span>
                        </div>
                    </div>
                </div>
                <div className="marketing">
                    <div className="marketing-head">
                        <span><i className="fa-duotone fa-megaphone"> </i> Publicité</span>
                        <i className="fa-regular fa-xmark"></i>
                    </div>
                    <div className="marketing-content">
                        <div className="item">
                            <div className="pb">
                                <span></span>
                                <div className="marketing-img"><img src="../img/air-force.avif" alt="pub-img"/></div>
                                <span></span>
                            </div>
                            <span className="text-marketing">
                                <p>Special Sneaker</p>
                                <a href="#">http://nike.com</a>
                                <span>
                                    Bon affaire bour la fête de Tabaski. Profitez de -75%
                                    sur les Nike Air Force One.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>       
    )
}

const Main = () => {
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(()=> { 
		const index = mainRef.current?.parentElement?.parentElement

		if(index) {
			index.removeAttribute("id")
		}
        
		return ()=> {
			index?.setAttribute("id","index")
		}
	}, [])

    return (
        <>
        <div id="app" ref={mainRef}>
            <div id="app-content-left">  
                <div className="logo-content">
                    <img src="../img/logB-love.png" alt=""/>
                    <i className="fa-regular fa-xmark-large"></i>
                </div>
                <div className="infos-account">
                    <div className="cont-infos-account">
                        <div className="identity"> 
                            <div className="cont-account-img" data-name="account"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                            <div className="name">
                                <span>Jacob Bolthos <i className="fa-solid fa-badge-check fa-rotate-by"></i></span>
                                <span>@Jacob</span>
                            </div>
                        </div>
                        <div className="followers">
                            <div className="cont-datail">
                                <span className="nb-follower">100.5k</span>
                                <span>Followers</span>
                            </div>
                            <div className="cont-datail">
                                <span className="nb-follower">2.5k</span>
                                <span>Followers</span>
                            </div>
                            <div className="cont-datail">
                                <span className="nb-post">250</span>
                                <span>Postes</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="content-home-btn" data-parent="bar-left">
                    <Button type="button" children={true} size="large" to="/home/acceuil" name="Acceuil" icon="fa-regular fa-home" border={true} />
                    <Button type="button" children={true} size="large" to="/home/product" name="Produits" icon="fa-regular fa-cart-shopping" border={true} />
                    <Button type="button" children={true} size="large" to="/home/dashbord" name="Tableau de bord" icon="fa-regular fa-square-poll-vertical" border={true} />
                    <Button type="button" children={true} size="large" to="/home/check" name="Localiser une !" icon="fa-regular fa-map-location-dot" border={true} />
                </div>
                <div className="privacy-terms">
                    ©B-Love2025 Cookies
                </div>        
            </div>
            <div id="app-content-right">
                <div className="head">
                    <div className="cont-head">
                        <div className="logo-content">
                            <i className="fa-solid fa-arrow-left-from-line"></i>
                            <img src="../img/logB-love.png" alt=""/>
                        </div>
                        <div className="navigation-btn">
                            <Button type="button" navigate="true" children={true} size="large" to="/home/acceuil" name="Acceuil" icon="fa-regular fa-home" border={true} />
                            <Button type="button" navigate="true" children={true} size="large" to="/home/product" name="Produits" icon="fa-regular fa-cart-shopping" border={true} />
                            <Button type="button" navigate="true" children={true} size="large" to="/home/favories" name="Favories" icon="fa-regular fa-star" border={true} />
                            <Button type="button" navigate="true" children={true} size="large" to="/home/check" name="Localiser" icon="fa-regular fa-map-location-dot" border={true}/>                                                        
                        </div>
                        <div className="account-btn">
                            <div className="notifs">
                                <i className="fa-solid fa-bell" title="Notifications" data-count="+25"></i> 
                            </div>
                            <div className="search">
                                <Input type="text" icon="fa-duotone fa-magnifying-glass" placeholder="Que cherchez-vous ?"/>
                                <div className="cont-recent-search">
                                    <div className="recent-search-item">
                                        <i className="fa-duotone fa-timer"></i>
                                        <span>Alissa la plus go du peuple</span>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="recent-search-item">
                                        <i className="fa-duotone fa-timer"></i>
                                        <span>Alissa la plus go du peuple</span>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="recent-search-item">
                                        <i className="fa-duotone fa-timer"></i>
                                        <span>Alissa la plus go du peuple </span>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="recent-search-item">
                                        <i className="fa-duotone fa-timer"></i>
                                        <span>Alissa la plus go du peuple</span>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-btn dos">
                        <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate data-active><i className="fa-regular fa-house"></i> </button>
                        <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-cart-shopping"></i></button>
                        <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-star"></i></button>
                        <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-map-location-dot"></i></button>                                                                                     
                        <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-solid fa-bell" title="Notifications" data-count="+25"></i> </button>                                                                                     
                    </div>
                </div>
                {/* Contenu des notifications de (messages de l'app) */}
                <div className="message-container" data-show_>
                    <span className="title" data-number="355"><i className="fa-solid fa-bell"></i> Notifications</span>
                    <div className="item-cont cool-scroll-bar">
                        <div className="message-item">
                            <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">Vous suit à présent</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Maintenant</span>    
                            </div>
                        </div>
                        <div className="message-item">
                            <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">Vous suit à présent</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Maintenant</span>    
                            </div>
                        </div>
                        <div className="message-item" data-new="">
                            <div className="cont-account-img" data-name="pub-2"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">A signalé votre compte</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Il ya 12h</span>    
                            </div>
                        </div>
                        <div className="message-item">
                            <div className="cont-account-img" data-name="pub-2"><i className="fa-solid fa-gears"></i></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">Vous vous est connecté depuis un autre emplacemnet</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Il ya 12h</span>    
                            </div>
                        </div>
                        <div className="message-item">
                            <div className="cont-account-img" data-name="pub-2"><i className="fa-solid fa-gears"></i></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">Vous vous est connecté depuis un autre emplacemnet</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Il ya 12h</span>    
                            </div>
                        </div>
                        <div className="message-item">
                            <div className="cont-account-img" data-name="pub-2"><i className="fa-solid fa-gears"></i></div>
                            <div className="comment">
                                <span className="names">ALAIN Dowahi Fall</span>    
                                <span className="text">Vous vous est connecté depuis un autre emplacemnet</span>    
                                <span className="time"><i className="fa-regular fa-timer"></i> Il ya 12h</span>    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body">
                    <div className="body-2" data-name="dashboard-">

                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main

