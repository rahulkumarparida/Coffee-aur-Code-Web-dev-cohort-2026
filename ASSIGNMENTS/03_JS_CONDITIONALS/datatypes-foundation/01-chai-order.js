/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
   if (order == null || typeof order !== "string") {
    return -1
  }
  let ord = order.trim()
 
  return ord.length

}

export function shoutChaiOrder(order) {
   if (order == null || typeof order !== "string") {
    return ""
  }
  let ord = order.trim()
  if (ord.length <= 0 ) {
    return ""
  }
  return ord.toUpperCase()

}

export function whisperChaiOrder(order) {
   if (order == null || typeof order !== "string") {
    return ""
  }
  let ord = order.trim()
  if (ord.length <= 0 ) {
    return ""
  }
  return ord.toLowerCase()
}


export function hasSpecialIngredient(order, ingredient) {
   if (order == null || ingredient == null || typeof order !== "string" || typeof ingredient !== "string" || order.trim().length <= 0|| ingredient.trim().length <= 0 ) {
    return false
  }
    let ord = order.trim().toLowerCase()
    let ing= ingredient.trim().toLowerCase()
  if (ord.length <= 0 || ing.length <= 0 ) {
    return false
  }
  return ord.includes(ing)
}

export function getFirstAndLastChar(order) {
  if ( order == null || typeof order !== "string"||  order.trim().length <= 0) {
    return null
  }

  let ord = order.trim()
 
  return {
    first: String(ord.charAt(0)), last: String(ord.at(-1))
  }

}
