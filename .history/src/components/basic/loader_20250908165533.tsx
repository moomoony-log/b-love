
type LoaderProps = {
    isActive : boolean
}

function Loader ({isActive}: LoaderProps) {
    if (!isActive) return null
    return (
        <>
            <div id="loader">
                <img src="../img/logB-love.png" alt=""/>
                <span className="spinner">
                    <i className="fa-duotone fa-solid fa-gear"></i>
                </span>
                Veuillez patientez 
            </div>
        </>
    )
}

export default Loader