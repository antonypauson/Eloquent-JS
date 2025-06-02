console.log(parseINI(
`name=Vasilis
[address]
city=Tessaloniki
area=suburban
phone=0000
[friend]
name=Antony
place=Russia
phone=911`)); 

function parseINI(string) {
    let result = {};
    let section = result;
    
    for (let line of string.split(/\r?\n/)) {
        let match; 

        if (match = /^(\w+)=(\w+)$/.exec(line)) {
            section[match[1]] = match[2];
            // console.log(section);
        } else if (match = /^\[(\w*)\]$/.exec(line)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;|$)/.exec(line)) {
            throw new Error(`Line '${line}' is invalid`);
        }
    }
    return result; 
}