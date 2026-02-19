/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */



/*
Color Budgets
* Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
*/

export function diwaliLightsPlan(lightStrings, budget) {

  function lightPrices(color) {
    if (color.toLowerCase() == "golden") {
      return 50
    }
    if (color.toLowerCase() == "multicolor") {
      return 40
    }
    if (color.toLowerCase() == "white") {
      return 30
    }
    return 35
  }

  if (
    Array.isArray(lightStrings) && lightStrings.length > 0 &&
    typeof budget == "number" && budget > 0
  ) {
    let selected = []
    let totalCost = 0   
 

    for (const i of lightStrings) {
      selected.push({
        color : i["color"],
        length: i["length"],
        cost: lightPrices(i["color"]) * i["length"]
      })
      
      totalCost += lightPrices(i["color"]) * i["length"]
    }

    // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
    let len = selected.length - 1
    
    while (totalCost > budget || len <= 0) {
      if (totalCost <= budget) {
        break ;
      }
      totalCost -= selected[len]["cost"]
      selected.pop()
      len -= 1
    }

    let tot = 0
    selected.map((ele )=>{
     tot += ele["length"]
     return tot
    })
  

    return  { selected: selected, totalLength:tot, totalCost: totalCost }






  }
  return { selected: [], totalLength: 0, totalCost: 0 }
}
