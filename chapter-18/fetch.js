// fetch("https://en.wikipedia.org/wiki/Denmark")
// .then(response => response.text())
// .then(text => console.log(text));

// fetch("https://en.wikipedia.org/wiki/Denmark", {method: "DELETE"})
// .then(response => {
//     console.log(response.status);
// })

fetch("https://pages.github.com/", {method:"POST"})
.then(response => console.log(response.status));