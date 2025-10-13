const Account = () => {
    return (
        <>
        <div className="cont-apropos-account cool-scroll-bar" date-member="Membre depuis 2025">
            <div>
                <div className="head-apropos-account">
                    <div className="identification">
                        <div className="cont-account-img" data-name="info-account"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                        <div className="name">
                            <span className="title-name">Karlos Ayayus de Paname</span>
                            <div className="followers">
                                <div className="item-info">
                                <span className="cont-nb-follo" data-pc><i className="fa-regular fa-user-plus"></i> <span className="size-follower">654.5k</span> Followers</span>
                                <span className="cont-nb-follo" data-mobile><i className="fa-regular fa-user-plus"></i> <span className="size-follower">654.5k</span></span>
                            </div>
                                <Button children={false} to={false} type="button" small="small-2" color="blue"  name="Suivi(e)" icon="fa-regular fa-user-check"/>
                                <i className="fa-regular fa-plus-large"></i>Suivre 
                            </div>
                            <div className="item-info">
                                <i className="fa-regular fa-cake-candles"></i>
                                <span>23 ans</span>
                            </div>
                            <div className="item-info">
                                <i className="fa-regular fa-location"></i>
                                <span>Cocody Riviera Palmeraie </span>
                            </div>
                        </div>
                    </div>
                    <div className="content-home-btn">
                        <Button children={false} to={false} type="button" small="small-3" color="gray"  name="Contacter" icon="fa-regular fa-phone"/>
                        <Button children={false} to={false} type="button" small="small-3" color="gray" icon="fa-duotone fa-pen"/>
                    </div>
                </div>
                <div className="infos-personnels" data-name="bio">
                    <span>Convictieux et jeune, belle venduese de mouvement</span>
                </div>
                <div className="remaining">
                    <div className="section-controls">
                        <span className="info-title" data-active><i className="fa-duotone fa-money-bill-1-wave"></i> Tarifs</span>
                        <span className="info-title"><i className="fa-solid fa-calendar-days"></i> Planning</span>
                        <span className="info-title"><i className="fa-solid fa-file-pen"></i> Publications</span>
                    </div>
                    <div className="section-list">
                        <div className="infos-personnels" data-name="tarif" data-_active>
                            <div className="tarifs">
                                <div className="item-info">
                                    <div className="services">
                                        <i className="fa-solid fa-bed-front"></i>
                                        <span>Session courte</span>
                                    </div>
                                    <div className="plus">
                                        <span><i className="fa-regular fa-badge-check"></i> 1 Coup ou 2 Coups</span>
                                        <span><i className="fa-regular fa-badge-check"></i> Pipe</span>
                                        <span><i className="fa-regular fa-badge-check"></i> Reception ou déplacement</span> 
                                        <span><i className="fa-regular fa-badge-check"></i> Proprété garantie</span>
                                    </div>
                                    <span>365 000 F</span>
                                </div>
                                
                                <div className="item-info">
                                    <div className="services">
                                        <i className="fa-solid fa-calendar-week"></i>
                                        <span>Weekend</span>
                                    </div>
                                    <div className="plus">
                                        <span><i className="fa-regular fa-badge-check"></i> Durée : 24H ou 48H</span>
                                        <span><i className="fa-regular fa-badge-check"></i> Massage érotique</span> 
                                        <span><i className="fa-regular fa-badge-check"></i> Compagnie & Sortie</span>
                                        <span><i className="fa-regular fa-badge-check"></i> Reception ou déplacement</span> 
                                        <span><i className="fa-regular fa-badge-check"></i> Sexe intence</span>
                                    </div>
                                    <span>365 000 F</span>
                                </div>
                                <div className="item-info" >
                                    <div className="services">
                                        <i className="fa-solid fa-bed-pulse"></i>
                                        <span>Dormant</span>
                                    </div>
                                    <div className="plus">
                                        <span><i className="fa-regular fa-badge-check"></i> Durée : 12H</span>
                                        <span><i className="fa-regular fa-badge-check"></i> Nuit intence</span> 
                                        <span><i className="fa-regular fa-badge-check"></i> Reception ou déplacement</span> 
                                    </div>
                                    <span>365 000 F</span>
                                </div>
                            </div>
                        </div>
                        <div className="infos-personnels" data-name="statut" data-_active>
                            <div className="availability">
                                <div className="table-controls">
                                    <span className="actual-date"><i className="fa-solid fa-calendar"></i> Sam 21 Juin 2025</span>
                                    <span className="actual-date"><i className="fa-solid fa-calendar"></i> ACTUELLEMENT : <span className="state" state="liberty">LIBRE</span></span>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><i className="fa-regular fa-clock-ten-thirty"></i> Heure</th>
                                            <th><i className="fa-regular fa-route-interstate"></i> Statut</th>
                                            <th><i className="fa-regular fa-hand-fist"></i> Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>00H - 01H</td>
                                            <td><span className="state" data-state="liberty">LIBRE</span></td>
                                            <td>
                                                <Button type="button" children={false} to={false} icon="fa-solid fa-calendar-days" name="RESERVER" small="small-3"/>
                                                <Button type="button" children={false} to={false} icon="fa-solid fa-phone" name="CONTACTER" small="small-3"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>01H - 02H</td>
                                            <td><span className="state" data-state="oqp">OCCUPEE</span></td>
                                            <td>
                                                <Button type="button" children={false} to={false} icon="fa-solid fa-phone" name="CONTACTER" small="small-3"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>00H - 01H</td>
                                            <td><span className="state" data-state="liberty">LIBRE</span></td>
                                            <td>
                                                <Button type="button" children={false} to={false} icon="fa-solid fa-calendar-days" name="RESERVER" small="small-3"/>
                                                <Button type="button" children={false} to={false} icon="fa-solid fa-phone" name="CONTACTER" small="small-3"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="infos-personnels" data-name="pub" data-active>
                            <div className="container-my-pub">
                                <div className="item-pub" data-vue="10M">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="1.2M">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="18k">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="6.5K">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="655">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="352">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="145">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="1k">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub"data-vue="650k" >
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="250k">
                                    <img src="../img/cardi_b.webp" alt="account-image"/>
                                </div>
                                <div className="item-pub" data-vue="65">
                                    <video src="../videos/Standard_Mode_Le_b_b__sirote_son_champagne_en_.mp4" ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Account