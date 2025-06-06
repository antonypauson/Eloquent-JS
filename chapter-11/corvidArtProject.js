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

const screenAddresses = [
  "10.0.0.44", "10.0.0.45", "10.0.0.41",
  "10.0.0.31", "10.0.0.40", "10.0.0.42",
  "10.0.0.48", "10.0.0.47", "10.0.0.46"
];

function displayFrame(frame) {
    return Promise.all(frame.map((data, i) => {
        return request(screenAddresses[i], 
            {command: "display", data}
        )
    }))
}

