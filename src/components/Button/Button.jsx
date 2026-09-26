import { memo } from "react"



function Button({onClick}){
      console.log("вивкликаламь кнопка яку ми не натискали");
    return(
        <button type="button" onClick={onClick}>loadmore</button>
    )
}

export default memo(Button)
