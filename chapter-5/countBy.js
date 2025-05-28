console.log(countBy([1,2,3,4,5], n => n > 2));

function countBy(items, groupName) {
    let counts = [];
    for (let each of items) {
        let name = groupName(each);
        let known = counts.find(s => s.name == name);
        
        if (!known) {
            counts.push({name: name, count: 1}); 
        } else {
            known.count++; 
        }
    } 
    return counts; 
}

module.exports = countBy; 