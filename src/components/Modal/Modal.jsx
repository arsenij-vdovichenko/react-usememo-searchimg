import style from "./Modal.module.css"
import { useEffect } from "react"
function Modal({onImageUrl, onClose}){

    const handleEscClose=(event)=>{
        if(event.code==="Escape"){
            onClose()
        }
    }


    const handleBackdropClose=(event)=>{
        if(event.target===event.currentTarget){
            onClose()
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown",handleEscClose)

        return ()=>{window.removeEventListener("keydown", handleEscClose)}
    },[])
    return(
        <div className={style.backdrop} onClick={handleBackdropClose}>
            <div className={style.modal}>
                <img src={onImageUrl} alt="" />
            </div>
        </div>
    )
}

export default Modal