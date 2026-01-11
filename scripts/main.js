// Utilities
// ================================================================

/**
 * Get nearest element to an arbitrary date
 * @param {string} date - An arbitrary date formatted YYYY-MM-DD
 * @returns {HTMLElement} The closest date element to an arbitrary date
 */
let getNearestDayElm = (date) => {
    for (let day of dayList.children) {
        if (day.id >= date) {
            return day;
        }
    }
    return dayList.lastElementChild;
}

/**
 * Scroll to nearest day elm to an arbitrary date
 * @param {string} date – an arbitrary date formatted YYYY-MM-DD
 */
let scrollToDate = (date) => {
    getNearestDayElm(date).scrollIntoView();
}

/**
 * Scroll to nearest day elm to today’s date
 */
let scrollToToday = () => {
    nearestDayElm.scrollIntoView();
}


// Init
// ================================================================

// set up day list
let dayList = document.querySelector('.dayList');

// set up button
document.querySelector('.todayBtn').addEventListener('click', scrollToToday);

// get today’s date  YYYY-MM-DD
let today = new Date().toISOString().slice(0, 10);

// find nearest element in dayList to today
let nearestDayElm = getNearestDayElm(today);

// wait for everything to load
setTimeout(() => {
    // scroll to today
    scrollToToday();
}, 0);
