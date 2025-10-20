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
                        <label htmlFor="births"><i className="fa-solid fa-cake-candles"></i></label>
                        <select name="birth" id="births">
                            <option value=""> AGE</option>
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
                        <Button children={false} type="button" to={false} small="small-2" name="Suivre"/> 
                        <Button children={false} type="button" to={false} icon="fa-duotone fa-solid fa-siren-on" color="red"/> 
                    </div>
                </div>
                <div className="pub-content">
                    <div className="more-info">
                        <span ><i className="fa-regular fa-cake-candles"></i> 23 ans</span>
                        <span><i className="fa-regular fa-user-vneck-hair-long"></i> skinny</span>
                        <span role="exit"><i className="fa-regular fa-map-location"></i> <a href="#ee">cocody abatta</a></span>
                    </div>
                    <div className="pub-comment" data-data_>
                        Dramane vient officielement de rentrer dans l'histoire en rejettant l'avion de Macron pour Abidjan.
                        L'avion a n'a pas atteri car Dramane a donné l'ordre de le rejétté.
                    </div>
                    <div className="medias-body" data-img="+ 22 photos">
                        <div className="img-counter">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/mf1.jpeg" alt="account-image"/></div>
                    </div>
                </div>
                <div className="pub-controller">
                    <div className="resum-controller">
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <span> 3,6K <i className="fa-solid fa-thumbs-up"></i></span>
                    </div>
                    <div className="content-home-btn" data-parent="pub-item">
                        <Button children={false} type="button" to={false} icon="fa-regular fa-heart" border/> 
                        <Button children={false} type="button" to={false} icon="fa-regular fa-phone" border/> 
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
                        <Button children={false} type="button" to={false} small="small-2" name="Suivre"/> 
                        <Button children={false} type="button" to={false} icon="fa-regular fa-circle-info" color="red"/> 
                    </div>
                </div>
                <div className="pub-content">
                    <div className="more-info">
                        <span ><i className="fa-regular fa-cake-candles"></i> 23 ans</span>
                        <span><i className="fa-regular fa-user-vneck-hair-long"></i> skinny</span>
                        <span role="exit"><i className="fa-regular fa-map-location"></i> <a href="#ee">cocody abatta</a></span>
                    </div>
                    <div className="pub-comment" data-data_>
                        Dramane vient officielement de rentrer dans l'histoire en rejettant l'avion de Macron pour Abidjan.
                        L'avion a n'a pas atteri car Dramane a donné l'ordre de le rejétté.
                    </div>
                    <div className="medias-body" data-img="+ 22 photos">
                        <div className="img-counter">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="cont-account-img" ><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                    </div>
                </div>
                <div className="pub-controller">
                    <div className="resum-controller">
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <span> 3,6K <i className="fa-solid fa-thumbs-up"></i></span>
                    </div>
                    <div className="content-home-btn" data-parent="pub-item">
                        <Button children={false} type="button" to={false} icon="fa-regular fa-heart" border/> 
                        <Button children={false} type="button" to={false} icon="fa-regular fa-phone" border/> 
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
                        <Button children={false} type="button" to={false} small="small-2" name="Suivre"/> 
                        <Button children={false} type="button" to={false} icon="fa-regular fa-circle-info" color="red"/> 
                    </div>
                </div>
                <div className="pub-content">
                    <div className="more-info">
                        <span ><i className="fa-regular fa-cake-candles"></i> 23 ans</span>
                        <span><i className="fa-regular fa-user-vneck-hair-long"></i> skinny</span>
                        <span role="exit"><i className="fa-regular fa-map-location"></i> <a href="#ee">cocody abatta</a></span>
                    </div>
                    <div className="pub-comment" data-data_>
                        Dramane😂8 vient officielement de rentrer dans l'histoire en rejettant l'avion de Macron pour Abidjan.
                        L'avion a n'a pas atteri car Dramane a donné l'ordre de le rejétté.
                    </div>
                    <div className="medias-body" data-img="+ 22 photos">
                        <div className="img-counter">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                        <div className="cont-account-img" data-img="+ 22 photos"><img src="../img/amber-rose-21-savage.jpg" alt="account-image"/></div>
                    </div>
                </div>
                <div className="pub-controller">
                    <div className="resum-controller">
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="cont-account-img" data-name="like"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <span> 3,6K <i className="fa-solid fa-thumbs-up"></i></span>
                    </div>
                    <div className="content-home-btn" data-parent="pub-item">
                        <Button children={false} type="button" to={false} icon="fa-regular fa-heart" border/> 
                        <Button children={false} type="button" to={false} icon="fa-regular fa-phone" border/> 
                    </div>
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
        </>       
    )
}

export default Acceuil