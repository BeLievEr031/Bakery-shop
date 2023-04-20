import React from 'react'
import motifSrc from "../../../public/motif.png"
function Header({ className, text }: IHeaderProp) {
    return (
        <>
            <h1>Text</h1>
            <div>
                <div>
                    <img src={motifSrc} alt="motif-image" />
                </div>
                <div>
                    <img src={motifSrc} alt="motif-image" />
                </div>
            </div>
        </>
    )
}

export default Header