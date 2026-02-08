/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  if (
    typeof month == "number" &&
    typeof temperature == "number" &&
    month >= 1 &&
    month <= 12
  ) {
    let season = null;

    if ([12, 1, 2].includes(month)) {
      season = "Winter";
    }
    if ([3, 4, 5].includes(month)) {
      season = "Spring";
    }
    if ([6, 7, 8].includes(month)) {
      season = "Summer";
    }
    if ([9, 10, 11].includes(month)) {
      season = "Autumn";
    }
    let activity = "";
    if (season == "Winter") {
      if (temperature < 0) {
        activity = "skiing";
      }
      if (temperature >= 0) {
        activity = "ice skating";
      }
    }

    if (season == "Spring") {
      if (temperature > 20) {
        activity = "hiking";
      }
      if (temperature <= 20) {
        activity = "museum visit";
      }
    }

    if (season == "Summer") {
      if (temperature > 35) {
        activity = "swimming";
      }
      if (temperature <= 35) {
        activity = "cycling";
      }
    }

    if (season == "Autumn") {
      if (temperature > 15) {
        activity = "nature walk";
      }
      if (temperature <= 15) {
        activity = "reading at a cafe";
      }
    }

    return {season: season, activity: activity}
  } else {
    return null;
  }
}
