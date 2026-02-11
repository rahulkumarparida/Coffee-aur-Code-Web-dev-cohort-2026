/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:



 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */


// ```
//  *
//  *   1. createPaanOrder(basePaan, customizations)
//  *      - Object.assign({}, basePaan, customizations) se NEW order object banao
//  *      - Original basePaan ko mutate MAT karo!
//  *      - Agar basePaan object nahi hai ya null hai, return {}
//  *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
//  *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
//  *                 => {type:"meetha", price:50, extra:"gulkand"}
//  *
// ```

export function createPaanOrder(basePaan, customizations) {
    if ( basePaan!== null && !Array.isArray(basePaan) && typeof basePaan == "object" && customizations!== null && !Array.isArray(customizations)  ) {
      if (typeof customizations !== "object") {
        return Object.assign({} , basePaan)
      }
      return Object.assign({} , basePaan , customizations)

    }
    return {}
}



// ```
//  *   2. freezeMenu(menu)
//  *      - Object.freeze() se menu ko immutable banao
//  *      - Return: frozen object
//  *      - Agar menu object nahi hai ya null hai, return {}
//  *      - Frozen ke baad koi modification kaam nahi karegi!
//  *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
//  *
// ```


export function freezeMenu(menu) {
  if (menu!== null && !Array.isArray(menu) && typeof menu == "object") {

    return Object.freeze(menu)
  }
  return {}
}


// ```
//  *   3. updatePrices(menu, increase)
//  *      - Object.entries() se [key, value] pairs lo
//  *      - Har price mein increase add karo
//  *      - Object.fromEntries() se wapas object banao
//  *      - Return: NEW object (original mat badlo!)
//  *      - Agar menu object nahi hai ya increase number nahi hai, return {}
//  *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
//  *
// ```

export function updatePrices(menu, increase) {
   if (menu!== null && !Array.isArray(menu) && typeof menu == "object" && !isNaN(increase) ) {

    return Object.fromEntries(
      Object.entries(menu).map(([key,value])=> [key ,value+increase])
    )
  }
  return {}
}


// ```

//  *   4. mergeDailySpecials(regularMenu, specialsMenu)
//  *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
//  *      - specialsMenu ki values override karengi agar same key ho
//  *      - Return: NEW merged object
//  *      - Agar koi bhi object nahi hai, usse empty {} maan lo
//  *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
//  *                 => {meetha:40, chocolate:60}
//  *
// ```

export function mergeDailySpecials(regularMenu, specialsMenu) {
   if ( !Array.isArray(regularMenu) && typeof regularMenu == "object"  && !Array.isArray(specialsMenu) && typeof specialsMenu == "object" ){
    
    let newOrder = {...regularMenu , ...specialsMenu}
    return newOrder
   }
   return {}

}
