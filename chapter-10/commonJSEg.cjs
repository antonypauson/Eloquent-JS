//imported using CommonJS
//ES6 is actually prefferred
const ordinal = require("ordinal");
const {days, months} = require("date-names");

// console.log(ordinal(50));
// console.log(days[3]);
// console.log(months[11]);

// console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

exports.formatDate = function (date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()]
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
}