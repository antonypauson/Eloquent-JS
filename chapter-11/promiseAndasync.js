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

//async function aaki ithine
async function getExampleText() {
    const res = await fetch('http://example.com') //await instead of then()
    const text = await res.text(); //await instead of then()
    console.log("text of example.com", text);
    return text; 

}

//use .then() or await to call 
getExampleText().then(result => {
    console.log(result); 
})

async function anotherFunction(params) {
    const text = await getExampleText();
    //do something with this text
}

