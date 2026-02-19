/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
 *   iplPointsTable([
 *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
 *     { team1: "RCB", team2: "CSK", result: "tie" },
 *   ])
 *   // CSK: played=2, won=1, tied=1, points=3
 *   // MI: played=1, won=0, lost=1, points=0
 *   // RCB: played=1, tied=1, points=1
 *   // Sorted: CSK(3), RCB(1), MI(0)
 */
export function iplPointsTable(matches) {

  function objAccumulator(arr){
    const teams = {}
    for (let i = 0; i < arr.length; i++) {
      const team1 = arr[i].team1
      const team2 = arr[i].team2
      if (!teams[team1]||!teams[team2]) {
        teams[team1] = {
          team :team1,
          played:0,
          won:0,
          lost:0,
          tied:0,
          noResult:0,
          points:0
        }
        teams[team2] = {
           team :team2,
          played:0,
          won:0,
          lost:0,
          tied:0,
          noResult:0,
          points:0
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
          teams[arr[i].team1].played += 1
          teams[arr[i].team2].played += 1
       if (arr[i].result.toLowerCase()=="win" ) {
          let teamOne = arr[i].team1
          let teamTwo = arr[i].team2

          if (arr[i].winner == teamOne) {
            teams[teamOne].won += 1
            teams[teamOne].points += 2
          }else{
            teams[teamOne].lost += 1
          }


          if (arr[i].winner == teamTwo) {
            teams[teamTwo].won += 1
            teams[teamTwo].points += 2
          }else{
            teams[teamTwo].lost += 1
          }
      
      }

      if (arr[i].result.toLowerCase()=="tie") {
        teams[arr[i].team1].tied += 1
        teams[arr[i].team1].points += 1
        teams[arr[i].team2].tied += 1
        teams[arr[i].team2].points += 1
      }

      if (arr[i].result.toLowerCase()=="no_result") {
        teams[arr[i].team1].noResult += 1
        teams[arr[i].team1].points += 1 
        teams[arr[i].team2].noResult += 1
        teams[arr[i].team2].points += 1 
      }

    }

    return teams
    
  }
  

  if (matches !== null && Array.isArray(matches) && matches.length > 0){
    
    let objacc = objAccumulator(matches)
    let objOnly = Object.entries(objacc).map(team =>{
      return team = team[1]
    })
    let sort = objOnly.sort((a,b)=> {
      if (b.points !== a.points) {
        return b.points - a.points
      }
      return a.team.localeCompare(b.team)
    })
    
    


    return sort


  }
  return []
  
}
