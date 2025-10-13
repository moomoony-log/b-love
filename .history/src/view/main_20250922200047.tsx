import { useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router-dom"


// --> content app-right

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
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border data-active> <i className="fa-regular fa-home"></i> <NavLink to="/home/acceuil"> Acceuil</NavLink> </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border > <i className="fa-regular fa-cart-shopping"></i> <NavLink to="/home/product">Produits</NavLink>  </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border> <i className="fa-regular fa-square-poll-vertical"></i> <NavLink to="/home/dashbord"></NavLink> Tableau de bord</button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border> <i className="fa-regular fa-pen"></i> <NavLink to="/home/new-pub"> Publier</NavLink> </button>
                    <button type="button" className="ui-btn" name=""  data-size="large"  data-border> <i className="fa-regular fa-map-location-dot"></i> <NavLink to="/home/check" >Localiser</NavLink>  une !</button>
                </div>
                <div className="privacy-terms">
                    ©B-Love2025 Cookies
                </div>        
            </div>
            <div id="app-content-right">
                <Outlet/>
            </div>
        </div>
        </>
    )
}
export default Main

