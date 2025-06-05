for (let addr = 1; addr < 256; addr++) {
    let data = []; 
    for (let i = 0; i < 1500; i++) {
        data.push(i < addr ? 3 : 0);
    }
    let ip = `10.0.0${addr}`;
    request(ip, {command: "display", data})
    .then(() => console.log(`Request to ${ip} accepted`))
    .catch(() => {}); 
}