import Button from "../../components/basic/button"
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
                <div className="info-identity" data-name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" data-theme="alpha" data-name="username" data-_error="" data-_state="bad">
                                <label htmlFor="ddd"><i className="fa-solid fa-layer-group"></i></label>
                                <select name="category" id="ddd">
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
                                    <label htmlFor="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label htmlFor="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label htmlFor="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label htmlFor="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <Input icon="fa-regular fa-money-check-dollar-pen" type="number" placeholder="Prix"  />
                        </div>
                        <div className="barre">
                            <Button children={false} to={false} type="button" small="small-3" color="gray" icon="fa-regular fa-plus-large" />
                        </div>
                    </div>
                </div>
                <div className="info-identity" data-name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" data-theme="alpha" data-name="username" data-_error="" data-_state="bad">
                                <label htmlFor="fsd5"><i className="fa-solid fa-layer-group"></i></label>
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
                                    <label htmlFor="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label htmlFor="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label htmlFor="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label htmlFor="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <Input icon="fa-regular fa-money-check-dollar-pen" type="number" placeholder="Prix"  />
                        </div>
                        <div className="barre">
                            <Button icon="fa-regular fa-plus-large" children={false} to={false} type="button" color="gray-1"  />
                        </div>
                    </div>
                </div>
                <div className="info-identity" data-name="tarifs">
                    <span><i className="fa-solid fa-money-bill-wave"></i> Tarifs</span>
                    <div className="form-group">
                        <div className="conteneur">
                            <div className="ui-input" data-theme="alpha" data-name="username" data-_error="" data-_state="bad">
                                <label htmlFor="fsd5"><i className="fa-solid fa-layer-group"></i></label>
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
                                    <label htmlFor="coup">1 Coup ou 2 Coups</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pipe" name="pipe"/>
                                    <label htmlFor="Pipe">Pipe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="reception" name="reception"/>
                                    <label htmlFor="Reception ou déplacement">Reception ou déplacement</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="propriete" name="propriete"/>
                                    <label htmlFor="Proprété garantie">Proprété garantie</label>
                                </div>
                            </fieldset>
                            <Input icon="fa-regular fa-money-check-dollar-pen" type="number" placeholder="Prix"  />
                        </div>
                        <div className="barre">
                            <Button icon="fa-regular fa-plus-large" children={false} to={false} type="button" color="gray-1"  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-home-btn">
                <Button icon="fa-regular fa-save" children={false} to={false} type="button" color="gray-1" border name="Rejoindre" />                
            </div>  
        </div> 
             
       </> 
    )
}

export default BecomeToMember