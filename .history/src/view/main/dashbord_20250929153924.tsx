const Dashbord = () => {
    return (
        <>
        <div className="bord" >
            <div className="stats"> 
                <div className="stat-item" data-name="followers">
                    <span className="number">335 M</span>
                    <span className="text">FOLLOWERS</span>
                </div>
                <div className="stat-item" data-name="visite">
                    <span className="number">458 m</span>
                    <span className="text">PROFIL VISITE PAR</span>
                </div>
                <div className="stat-item" data-name="like">
                    <span className="number">3 M</span>
                    <span className="text">J'AIME</span>
                </div>
                <div className="stat-item" data-name="signal">
                    <span className="number">3</span>
                    <span className="text">SIGNALE PAR</span>
                </div>
            </div>
            <div className="cont-my-post">
                <div className="cont-post-head">
                    <span className="info-title"><i className="fa-solid fa-file-pen"></i> Publications</span>
                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-plus-large"></i> Publier</button>
                </div>
                <div className="posts cool-scroll-bar">
                    <table>
                        <thead>
                            <tr>
                                <th><i className="fa-regular fa-photo-film-music"></i> Médias</th>
                                <th><i className="fa-regular fa-calendar-days"></i> Date d'ajout</th>
                                <th><i className="fa-regular fa-eye"></i> Vues</th>
                                <th><i className="fa-regular fa-hand-point-up"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className="cont-account-img" data-name="my-post"><img src="../img/cardi_b.webp" alt="account-image"/></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" data-name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" data-name="my-post"><img src="../img/cardi_b.webp" alt="account-image"/></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" data-name="my-post"><img src="../img/cardi_b.webp" alt="account-image"/></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" data-name="my-post"><img src="../img/cardi_b.webp" alt="account-image"/></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" data-size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className="cont-account-img" name="my-post"><img src="../img/cardi_b.webp" alt="account-image"></div></td>
                                <td>Lun 4 Jan 2026</td>
                                <td>1.12M</td>
                                <td>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="red" ><i className="fa-regular fa-trash"></i> Supprimer</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="blue-2" ><i className="fa-regular fa-file-pen"></i> Modifier</button>
                                    <button type="button" className="ui-btn" name="" size="small-3" color="gray" ><i className="fa-regular fa-megaphone"></i> Booster</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className="nb-post"><i className="fa-regular fa-box-archive"></i> <span>180</span> POSTES</span>
            </div>
        </div> 
        </>
    )
}

export default Dashbord