import Input from "../../components/basic/input"

const BecomeToMember = () => {
    return (
       <>
       <div className="cont-apropos-account cool-scroll-bar" data-name="become-member">
            <span className="head-text">Rejoins la team B-Love !</span>
            <span className="plus-text">Complétez votre profil pour plus de visibilité et pour tirer le meilleur parti de l’appli !</span>
            <div className="informations">
                <div className="info-identity">
                    <span><i className="fa-regular fa-user"></i> Identité</span>
                    <div className="form-group">
                        <Input icon="fa-regular fa-user" type="email" placeholder="Nom d'utilisateur"  />
                        <Input icon="fa-regular fa-cake-candles" type="date" placeholder="Date de naissance"  />
                    </div>
                </div>
                <div className="info-identity">
                    <span><i className="fa-regular fa-up-down-left-right"></i> Liaison</span>
                    <div className="form-group">
                        <Input icon="fa-regular fa-house" type="text" placeholder="Lieu de residence" />
                    </div>
                </div>
                <div className="info-identity">
                    <span><i className="fa-solid fa-book-user"></i> Biographie</span>
                    <textarea name="biography" id="biography"></textarea>
                </div>
                <div className="info-identity" name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" theme="alpha" name="username" _error="" _state="bad">
                                <label for="fsd5"><i className="fa-solid fa-layer-group"></i></label>
                                <select name="category" id="category">
                                    <option value=""><i className="fa-solid fa-layer-group"></i> Catégorie</option>
                                    <option value="SESSION COURTE">SESSION COURTE</option>
                                    <option value="WEEK-END">WEEK-END</option>
                                    <option value="DORMANT">DORMANT</option>
                                </select>
                            </div>
                            <fieldset>
                                <legend><i className="fa-solid fa-layer-group"></i> Options de la catégorie :</legend>
                                <div>
                                    <input type="checkbox" id="coup" name="coup" checked />
                                    <label for="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label for="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label for="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label for="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <div className="ui-input" theme="alpha" name="price" _error="" _state="bad">
                                <label for="hhhf"><i className="fa-regular fa-money-check-dollar-pen"></i></label>
                                <input type="number" placeholder="Prix" id="hhhf" autocomplete="off"> 
                            </div>
                        </div>
                        <div className="barre">
                            <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-plus-large"></i></button> 
                        </div>
                    </div>
                </div>
                <div className="info-identity" name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" theme="alpha" name="username" _error="" _state="bad">
                                <label for="fsd5"><i className="fa-solid fa-layer-group"></i></label>
                                <select name="category" id="category">
                                    <option value=""><i className="fa-solid fa-layer-group"></i> Catégorie</option>
                                    <option value="SESSION COURTE">SESSION COURTE</option>
                                    <option value="WEEK-END">WEEK-END</option>
                                    <option value="DORMANT">DORMANT</option>
                                </select>
                            </div>
                            <fieldset>
                                <legend><i className="fa-solid fa-layer-group"></i> Options de la catégorie :</legend>
                                <div>
                                    <input type="checkbox" id="coup" name="coup" checked />
                                    <label for="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label for="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label for="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label for="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <div className="ui-input" theme="alpha" name="price" _error="" _state="bad">
                                <label for="hhhf"><i className="fa-regular fa-money-check-dollar-pen"></i></label>
                                <input type="number" placeholder="Prix" id="hhhf" autocomplete="off"> 
                            </div>
                        </div>
                        <div className="barre">
                            <button type="button" className="ui-btn" name=""  size="small-3" color="gray-1" ><i className="fa-regular fa-plus-large"></i></button> 
                        </div>
                    </div>
                </div>
                <div className="info-identity" name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" theme="alpha" name="username" _error="" _state="bad">
                                <label for="fsd5"><i className="fa-solid fa-layer-group"></i></label>
                                <select name="category" id="category">
                                    <option value=""><i className="fa-solid fa-layer-group"></i> Catégorie</option>
                                    <option value="SESSION COURTE">SESSION COURTE</option>
                                    <option value="WEEK-END">WEEK-END</option>
                                    <option value="DORMANT">DORMANT</option>
                                </select>
                            </div>
                            <fieldset>
                                <legend><i className="fa-solid fa-layer-group"></i> Options de la catégorie :</legend>
                                <div>
                                    <input type="checkbox" id="coup" name="coup" checked />
                                    <label for="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label for="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label for="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label for="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <div className="ui-input" theme="alpha" name="price" _error="" _state="bad">
                                <label for="hhhf"><i className="fa-regular fa-money-check-dollar-pen"></i></label>
                                <input type="number" placeholder="Prix" id="hhhf" autocomplete="off"> 
                            </div>
                        </div>
                        <div className="barre">
                            <button type="button" className="ui-btn" name=""  size="small-3" color="gray-1" ><i className="fa-regular fa-plus-large"></i></button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-home-btn">
                <button type="button" className="ui-btn" name="password-forget"  size="large"  border ><i className="fa-regular fa-save"></i> Rejoindre</button>
            </div>
        </div>   
       
       </> 
    )

}

export default BecomeToMember