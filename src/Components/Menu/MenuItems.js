import React from 'react'
import "./menuitems.css"

export const MenuItems = ({ image, title, paragraph }) => {
    return (
        <div className='MenuCards'>
            {/* <div className="MenuItems"> */}
                <div className="CardImage">
                    <img src={image} alt="" />
                </div>
                <div className="CardInformation">
                    <div className="CardHeading">
                        <h2>{title}</h2>
                    </div>
                    <div className="CardParagraph">
                        <p>{paragraph}</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
