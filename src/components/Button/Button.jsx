import { memo } from "react"



function Button({onClick}){
     
    return(
        <button type="button" onClick={onClick}>loadmore</button>
    )
}

export default memo(Button)
