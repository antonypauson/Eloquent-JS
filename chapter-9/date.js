console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1387391400000));

console.log(getDate("1-30-2003"));

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
