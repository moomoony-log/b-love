import { useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Input from "../components/basic/input"
import Button from "../components/basic/button"


// --> content app-right

const Main = () => {

    const mainRef = useRef<HTMLDivElement>(null)
    const contentNavBtn = useRef<HTMLDivElement>(null)
    if(contentNavBtn.current){
        console.log(contentNavBtn.current.children);
        
    }

    

    useEffect(()=> { 
		const index = mainRef.current?.parentElement?.parentElement

		if(index) {
			index.removeAttribute("id")
		}

        if(contentNavBtn.current?.children) {
            
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
                 <div className="content-home-btn" data-parent="bar-left" ref={contentNavBtn}>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border data-active> <i className="fa-regular fa-home"></i> <NavLink to="/home/acceuil"> Acceuil</NavLink> </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border > <i className="fa-regular fa-cart-shopping"></i> <NavLink to="/home/product">Produits</NavLink>  </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border > <i className="fa-regular fa-square-poll-vertical"></i> <NavLink to="/home/dashbord">Tableau de bord</NavLink> </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border > <i className="fa-regular fa-pen"></i> <NavLink to="/home/new-pub"> Publier</NavLink> </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border > <i className="fa-regular fa-map-location-dot"></i> <NavLink to="/home/check" >Localiser une !</NavLink>  </button>
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
                            <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate data-active><i className="fa-regular fa-house"></i> Acceuil</button>
                            <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-cart-shopping"></i> Produits</button>
                            <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-star"></i> Favories</button>
                            <button type="button" className="ui-btn" name=""  data-size="large"  data-navigate ><i className="fa-regular fa-map-location-dot"></i> Localiser</button>                                                                                    
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
                <Outlet />
            </div>
        </div>
        </>
    )
}
export default Main

