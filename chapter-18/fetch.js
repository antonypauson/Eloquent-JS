fetch("https://en.wikipedia.org/wiki/Denmark").then(
    response => {
        console.log(response.status);
        console.log(response.headers.get("Content-Type"));
    }
)