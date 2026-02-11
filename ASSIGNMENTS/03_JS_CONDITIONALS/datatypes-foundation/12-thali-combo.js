/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *

x

 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */

//  *   1. createThaliDescription(thali)
//  *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
//  *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
//  *      - name ko UPPERCASE karo, price ko 2 decimal places tak
//  *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
//  *      - Agar thali object nahi hai ya required fields missing hain, return ""
//  *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
//  *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
//  *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
//  *

export function createThaliDescription(thali) {

  if (thali !== null && typeof thali == "object" && thali.name && thali.isVeg !== undefined && thali.items && thali.price) {
    return `${thali.name.toUpperCase()} (${thali.isVeg ? "Veg" : "Non-Veg"}) - Items: ${thali.items?.map(
      (ele) => {
        return ele
      },
    ).join(", ")} - Rs.${thali.price.toFixed(2)}`;
  }
  return "";
}

//  *   2. getThaliStats(thalis)
//  *      - Array of thali objects ka stats nikalo
//  *      - .filter() se veg/non-veg count
//  *      - .reduce() se average price
//  *      - Math.min/Math.max se cheapest/costliest
//  *      - .map() se saare names
//  *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
//  *                  cheapest (number), costliest (number), names (array) }
//  *      - Agar thalis array nahi hai ya empty hai, return null
//  *
export function getThaliStats(thalis) {
  if (thalis !== null && Array.isArray(thalis) && thalis.length > 0) {
    let total = thalis.length;
    let vegCount = thalis.filter((ele) => {
      return ele.isVeg;
    }).length;
    let nonVegCount = Number(total - vegCount);
    let averagePrice =
      thalis.reduce((accumulator, currentValue, index) => {
        accumulator += currentValue.price;
        return accumulator;
      },0) / thalis.length;

      let prices = thalis.map(ele => ele.price)
    let costliest = Math.max(...prices)
    let cheapest = Math.min(...prices);
    let names = thalis.map(ele =>{
      return ele.name
    })

    return {
      totalThalis:total,
      vegCount: vegCount,
      nonVegCount: nonVegCount,
      avgPrice: averagePrice.toFixed(2),
      cheapest: cheapest,
      costliest: costliest,
      names: names,
    };
  }
  return null;
}



//  *   3. searchThaliMenu(thalis, query)
//  *      - .filter() + .includes() se search karo (case-insensitive)
//  *      - Thali match karti hai agar name ya koi bhi item query include kare
//  *      - Agar thalis array nahi hai ya query string nahi hai, return []
//  *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
//  *

export function searchThaliMenu(thalis, query) {
  if (thalis !== null && Array.isArray(thalis) &&
  typeof query == "string" && query.length > 0) {

    return thalis.filter(ele =>{
      return (ele.name.toLowerCase().includes(query.toLowerCase())) || (ele.items.some(ele => ele.includes(query.toLowerCase())))
    })

  }
  return []
}

//  *   4. generateThaliReceipt(customerName, thalis)
//  *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
//  *      - Format:
//  *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
//  *      - Line item: "- {thali name} x Rs.{price}"
//  *      - customerName UPPERCASE mein
//  *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
//  *

export function generateThaliReceipt(customerName, thalis) {
  if (thalis !== null && Array.isArray(thalis) && thalis.length > 0 &&
  typeof customerName == "string" && customerName.length > 0) {
    let names = customerName.toUpperCase()
    let lineItems = thalis.map((ele)=>{
      return `- ${ele.name} x Rs.${ele.price}`
    })
    let totalPrice = thalis.reduce((accumulator , currentValue)=>{
      accumulator += currentValue.price
      return accumulator
    },0)

    return `THALI RECEIPT\n---\nCustomer: ${names}\n${lineItems.join("\n")}\n---\nTotal: Rs.${totalPrice}\nItems: ${thalis.length}
    `
  }
  return ""
}
