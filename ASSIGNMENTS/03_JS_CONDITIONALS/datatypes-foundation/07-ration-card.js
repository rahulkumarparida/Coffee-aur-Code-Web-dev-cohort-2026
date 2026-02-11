/**
 * 🏠 Ration Card Registry - Object Basics
 *
 * Gram Panchayat mein ration card ka digital registry banana hai.
 * Families ka data Object mein store hai. Object methods use karke
 * registry manage kar!
 *
 * Data format: registry = {
 *   "RC001": { head: "Ram Prasad", members: 4, type: "BPL" },
 *   "RC002": { head: "Sita Devi", members: 3, type: "APL" },
 *   ...
 * }
 *
 * Methods to explore: Object.keys(), Object.values(), Object.entries(),
 *   .hasOwnProperty(), delete operator
 *
 * Functions:



 * Hint: typeof registry === "object" && registry !== null && !Array.isArray(registry)
 *   se check karo ki input valid object hai.
 *
 * @example
 *   getFamilyNames({"RC001":{...}})       // => ["RC001"]
 *   hasRationCard({"RC001":{...}}, "RC001") // => true
 *   removeRationCard(registry, "RC001")    // => true
 */


// ```
//  *
//  *   1. getFamilyNames(registry)
//  *      - Object.keys() se saare ration card IDs nikalo
//  *      - Agar registry object nahi hai ya null hai, return []
//  *      - Example: getFamilyNames({"RC001":{...},"RC002":{...}}) => ["RC001", "RC002"]
//  *
// ```

export function getFamilyNames(registry) {
  if ( registry!== null && !Array.isArray(registry) && typeof registry == "object" ) {
    
    return Object.keys(registry)


  }
  return []
}

// ```
//  *   2. getAllFamilies(registry)
//  *      - Object.values() se saari family objects nikalo
//  *      - Agar registry object nahi hai ya null hai, return []
//  *      - Example: getAllFamilies({"RC001":{head:"Ram"}}) => [{head:"Ram"}]
//  *
// ```

export function getAllFamilies(registry) {
  if ( registry!== null && typeof registry == "object"  ) {
    
    return Object.values(registry)


  }
  return []
}


// ```
//  *   3. getRationCardEntries(registry)
//  *      - Object.entries() se [id, family] pairs nikalo
//  *      - Agar registry object nahi hai ya null hai, return []
//  *      - Example: getRationCardEntries({"RC001":{head:"Ram"}}) => [["RC001",{head:"Ram"}]]
//  *
// ```

export function getRationCardEntries(registry) {
    if ( registry!== null && typeof registry == "object"  ) {
    
    return Object.entries(registry)


  }
  return []
}

// ```
//  *   4. hasRationCard(registry, cardId)
//  *      - .hasOwnProperty() se check karo ki specific ration card hai ya nahi
//  *      - Agar registry object nahi hai ya cardId string nahi hai, return false
//  *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC001") => true
//  *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC999") => false
//  *
// ```


export function hasRationCard(registry, cardId) {
    if ( registry!== null && typeof registry == "object" && typeof cardId == "string" && cardId.length > 0 ) {
    
    return registry.hasOwnProperty(cardId)

  }
  return false
}


// ```
//  *   5. removeRationCard(registry, cardId)
//  *      - delete operator se ration card remove karo
//  *      - Pehle hasOwnProperty se check karo ki card hai ya nahi
//  *      - Return true agar card tha aur delete hua, false otherwise
//  *      - Agar registry object nahi hai ya cardId string nahi hai, return false
//  *      - Example: removeRationCard({"RC001":{head:"Ram"}}, "RC001") => true
//  *
// ```

export function removeRationCard(registry, cardId) {
    if ( registry!== null && typeof registry == "object"   && typeof cardId == "string" && cardId.length > 0 ) {
    let value = registry.hasOwnProperty(cardId)
     if(value){
      
      return delete registry[cardId]
     }
     return false

  }
  return false
}
