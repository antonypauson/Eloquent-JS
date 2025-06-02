(parseINI(
`name=Vasilis
[address]
city=Tessaloniki`)); 

function parseINI(string) {
    let result = {};
    let section = result;
    
    for (let line of string.split(/\r?\n/)) {
        let match; 
        // console.log(line);
        if (match = /^(\w+)=(\w+)$/.exec(line)) {
            section[match[1]] = match[2];
            // console.log(section);
        } else if (match = /^\[(\w*)\]$/.exec(line)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;|$)/.exec(line)) {
            throw new Error(`Line '${line}' is invalid`);
        }
        console.log(result);
        console.log("**********")
        console.log(section);
    }
}