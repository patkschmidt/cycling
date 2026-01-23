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
 * NOTE: scrollToToday is it’s own function because I don’t
 * want to have to run getNearestDayElm(today) every time
 * I click the 'today' button on the website.
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
// HACK: Rather than manually fuck with dates and timezones, Canada’s
// localeDateString happens to output the correct format.
let today = new Date().toLocaleDateString('en-CA')

// find nearest element to today
let nearestDayElm = getNearestDayElm(today);

// wait for all elements to render
window.onload = (event) => {
    // scroll to today
    scrollToToday();
}
