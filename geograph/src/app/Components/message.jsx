import React from "react"

const Mess = ({text}) => {
    return text && (<div>
        <p className="text-red-300">{text}</p>
    </div>
    )
}

export default Mess