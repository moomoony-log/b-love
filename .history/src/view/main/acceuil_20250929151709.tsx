import Button from "../../components/basic/button"

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
         </div>
         
        </>       
    )
}

export default Acceuil