/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
const example = "  DILWALE   DULHANIA   LE   JAYENGE  ";
const titlelOver = [
  "ka",
  "ki",
  "ke",
  "se",
  "aur",
  "ya",
  "the",
  "of",
  "in",
  "a",
  "an",
];

export function fixBollywoodTitle(title) {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  if (title !== null && typeof title == "string" && title.trim().length > 0) {
    let film = "";
    let words = title.trim().split(" ");
    words.filter(Boolean).map((ele) => {
      if (
        ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"].includes(ele)
      ) {
        film += ele+" ";
      } else {
        film += capitalize(ele)+" ";
      }
    });
    return film.trim().charAt(0).toUpperCase()+film.trim().slice(1);
  }

  return "";
}
