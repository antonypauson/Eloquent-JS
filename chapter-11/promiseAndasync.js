//promise within a promise
function getExampleText() {
  return new Promise(resolve => {
    fetch('http://example.com')
      .then(res => res.text()) //resolve of fetch(), then() of fetch()
      .then(text => { //resolve of fetch()
        console.log('text of example.com:', text)
        resolve(text) //resolve of getExampleText() promise
      })
  })
}

async function getExampleText() {
    const res = await fetch('http://example.com')
    const text = await res.text(); 
    console.log("text of example.com", text);
    return text; 

}

getExampleText().then(result => {
    console.log(result); 
})

