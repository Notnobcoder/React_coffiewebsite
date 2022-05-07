import React from 'react'
import { MenuItems } from './MenuItems'
import "./menuitems.css"

export const Menu = () => {
  return(

    <div className='Menu'>
      <div className="MenuHeading">
      <h1>out items</h1>
      </div>
      <div className="menuitems">
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/espresso-shot.jpg"} title={"Espresso"} paragraph={"Espresso as a standalone coffee is served everywhere. It contains literally the basic essence. Coffee and water. No strings attached.Ideal serving: 30ml Espresso in a 90ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/Doppio.jpg"} title={"Doppio"} paragraph={"Doppio in Italian literally means double. It is a double shot of Espresso coffee.Ideal serving: 60ml Espresso in a 90ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/espresso_macchiato.jpg"} title={"Macchiato"} paragraph={"Macchiato in Italian means stained. This is because a serving of Macchiato is a normal Espresso shot with a little-foamed milk on the top.Ideal serving: 30ml Espresso + Foamed milk on top in a 90ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/CAPPUCCINO-COFFEE.jpg"} title={"Cappuccino"} paragraph={"Everyone’s favourite and the most well-known and standard coffee drink, cappuccino contains more milk-to-coffee ratio.Ideal serving: 60ml Espresso + 60ml steamed milk + 60ml foamed milk (in that order) in a 200ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/img_0470.jpg"} title={"Flat White"} paragraph={"A slight variation of the more generalised Cappucino, a Flat White is a no-nonsense Cappuccino with double the amount of milk as compared to coffee.Ideal serving: 60ml Espresso + 120ml steamed milk in a 200ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/56dff3681dc52417458b4736.jpg"} title={"Café au Lait"} paragraph={"Café au Lait literally means coffee with milk. It is a French press coffee preparation with equal amounts coffee brew and scalded milk. Scalded milk is milk that is heated to 82° C to kill off bacteria and remove many proteins.Ideal serving: 90ml French press coffee + 90ml scalded milk in a 200ml cup."} />
      <MenuItems image={"https://www.storypick.com/wp-content/uploads/2016/03/turkish-coffee.jpg"} title={"Turkish"} paragraph={"The Turkish like their coffee light and sweet. Hence, a majority of this coffee is sugar water.`Ideal serving: 10g (or 2 tsp.) ground coffee + 180ml sugar water + köpük (foam) (in that order) in a 200ml cup."} />
    </div>
      </div>
)
}

