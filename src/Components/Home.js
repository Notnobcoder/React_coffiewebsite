import React from 'react'
import "./component.css"
import {motion} from "framer-motion/dist/es/index"

export const Home = () => {
  return (
    <motion.div className='HomePage'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="HomeItems">
          <h1 className='HomeHeading'>Coffie and Cookies</h1>
          <p className="HomeHeading2">Have a treat of taste ..</p>
          <button className='HomeButton'>Contact us</button>
      </div>
    </motion.div>
  )
}
