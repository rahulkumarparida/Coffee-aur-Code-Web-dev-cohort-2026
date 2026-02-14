/**
 * 💸 UPI Transaction Log Analyzer
 *
 * Aaj kal sab UPI pe chalta hai! Tujhe ek month ke transactions ka log
 * milega, aur tujhe pura analysis karna hai - kitna aaya, kitna gaya,
 * kiski saath zyada transactions hue, etc.
 *
 * Rules:
 *   - transactions is array of objects:
 *     [{ id: "TXN001", type: "credit"/"debit", amount: 500,
 *        to: "Rahul", category: "food", date: "2025-01-15" }, ...]
 *   - Skip transactions where amount is not a positive number
 *   - Skip transactions where type is not "credit" or "debit"
 *   - Calculate (on valid transactions only):
 *     - totalCredit: sum of all "credit" type amounts
 *     - totalDebit: sum of all "debit" type amounts
 *     - netBalance: totalCredit - totalDebit
 *     - transactionCount: total number of valid transactions
 *     - avgTransaction: Math.round(sum of all valid amounts / transactionCount)
 *     - highestTransaction: the full transaction object with highest amount
 *     - categoryBreakdown: object with category as key and total amount as value
 *       e.g., { food: 1500, travel: 800 } (include both credit and debit)
 *     - frequentContact: the "to" field value that appears most often
 *       (if tie, return whichever appears first)
 *     - allAbove100: boolean, true if every valid transaction amount > 100 (use every)
 *     - hasLargeTransaction: boolean, true if some valid amount >= 5000 (use some)
 *   - Hint: Use filter(), reduce(), sort(), find(), every(), some(),
 *     Object.entries(), Math.round(), typeof
 *
 * Validation:
 *   - Agar transactions array nahi hai ya empty hai, return null
 *   - Agar after filtering invalid transactions, koi valid nahi bacha, return null
 *
 * @param {Array<{ id: string, type: string, amount: number, to: string, category: string, date: string }>} transactions
 * @returns {{ totalCredit: number, totalDebit: number, netBalance: number, transactionCount: number, avgTransaction: number, highestTransaction: object, categoryBreakdown: object, frequentContact: string, allAbove100: boolean, hasLargeTransaction: boolean } | null}
 *
 * @example
 *   analyzeUPITransactions([
 *     { id: "T1", type: "credit", amount: 5000, to: "Salary", category: "income", date: "2025-01-01" },
 *     { id: "T2", type: "debit", amount: 200, to: "Swiggy", category: "food", date: "2025-01-02" },
 *     { id: "T3", type: "debit", amount: 100, to: "Swiggy", category: "food", date: "2025-01-03" }
 *   ])
 *   // => { totalCredit: 5000, totalDebit: 300, netBalance: 4700,
 *   //      transactionCount: 3, avgTransaction: 1767,
 *   //      highestTransaction: { id: "T1", ... },
 *   //      categoryBreakdown: { income: 5000, food: 300 },
 *   //      frequentContact: "Swiggy", allAbove100: false, hasLargeTransaction: true }
 */
export function analyzeUPITransactions(transactions) {
  function validTransactions(transac) {
    return transac.filter((ele) => {
      return (
        ["credit", "debit"].includes(ele.type) &&
        typeof ele.amount == "number" &&
        ele.amount > 0 &&
        typeof ele.category == "string" &&
        typeof ele.date == "string" &&
        typeof ele.id == "string" &&
        typeof ele.to == "string"
      );
    });
  }

  if (
    transactions !== null &&
    Array.isArray(transactions) &&
    transactions.length > 0
  ) {
    let temp = validTransactions(transactions);
    let valid_transaction = temp.length > 0 ? temp : [];
    if (valid_transaction.length <= 0) {
      return null
    }
    let totalCredit = 0;
    let totalDebit = 0;
    let netBalance = 0;
    let transactionCount = 0;
    let avgTransaction = 0;
    let highestTransaction ={amount: 0};
    let categoryBreakdown = {};

    let frequentContact = {};
    let allAbove100 = true;
    let hasLargeTransaction = false;

    valid_transaction.map((ele) => {
      if (ele.amount <= 100) {
        allAbove100 = false;
      }
      if (ele.amount >= 5000) {
        hasLargeTransaction = true;
      }

     if (ele.type == "credit" ) {
      totalCredit += ele.amount
     }
     if (ele.type == "debit") {
      totalDebit += ele.amount
     }
     if (ele.amount > highestTransaction.amount) {
      highestTransaction = ele
     }

     categoryBreakdown[ele.category] = (categoryBreakdown[ele.category]|| 0)+ ele.amount 
     

     transactionCount += 1
     frequentContact[ele.to] = (frequentContact[ele.to]||0)+1

    });
  

 netBalance = totalCredit - totalDebit
avgTransaction = (totalCredit +totalDebit)/transactionCount

  return {
  totalCredit: totalCredit,
  totalDebit: totalDebit, 
  netBalance: netBalance,
  transactionCount: transactionCount, 
  avgTransaction: Number(avgTransaction.toFixed(2)),
  highestTransaction: highestTransaction,
  categoryBreakdown: categoryBreakdown,
  frequentContact: Object.keys(frequentContact).find(key =>{
          if (frequentContact[key] ===  Math.max(...Object.values(frequentContact))) {
              console.log(frequentContact)
            return frequentContact
      }}), 
  allAbove100: allAbove100, 
  hasLargeTransaction: hasLargeTransaction
  }


  }
  return null;
}
