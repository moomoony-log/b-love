import { useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Input from "../../components/basic/input" 
import Button from "../../components/basic/button"
import ConfirmModal from "../../components/basic/modals/confirm"
import PublicationModal from "../../components/basic/modals/publication"
import ItemPub from "../../components/basic/modals/pubItem"

// --> content app-right

const Main = () => {
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(()=> { 
		const index = mainRef.current?.parentElement?.parentElement

		if(index) index.removeAttribute("id")
		return () => { index?.setAttribute("id","index") }
	}, [])

    return (
        <>
        <div id="modals">
            <ItemPub/>
        </div>
        <div id="app" ref={mainRef}>
            <div id="app-content-left">  
                <div className="logo-content">
                    <img src="../../img/logB-love.png" alt=""/>
                    <i className="fa-regular fa-xmark-large"></i>
                </div>
                <div className="infos-account">
                    <NavLink to={"/home/client"}> 
                        <div className="cont-infos-account">
                        <div className="identity"> 
                            <div className="cont-account-img" data-name="account"><img src="../../img/cardi_b.webp" alt="account-image"/></div>
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
                    </NavLink>
                </div>
                 <div className="content-home-btn" data-parent="bar-left">
                    <Button type="button" children={true} to="/home/acceuil" name="Acceuil" icon="fa-regular fa-home" border={true} />
                    <Button type="button" children={true} to="/home/product" name="Produits" icon="fa-regular fa-cart-shopping" border={true} />
                    <Button type="button" children={true} to="/home/check" name="Localiser une !" icon="fa-regular fa-map-location-dot" border={true} />
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
                            <Button type="button" navigate="true" children={true} to="/home/acceuil" name="Acceuil" icon="fa-regular fa-home" border={true} />
                            <Button type="button" navigate="true" children={true} to="/home/product" name="Produits" icon="fa-regular fa-cart-shopping" border={true} />
                            <Button type="button" navigate="true" children={true} to="/home/favories" name="Favories" icon="fa-regular fa-star" border={true} />
                            <Button type="button" navigate="true" children={true} to="/home/check" name="Localiser" icon="fa-regular fa-map-location-dot" border={true}/>                                                        
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
                    <div className="body-2 cool-scroll-bar">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main

