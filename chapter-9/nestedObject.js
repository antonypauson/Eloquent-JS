//I want to create a nested object like this 
// {
//     name: John, 
//     user: {age: 25}, 
//     setting: {theme: dark}
// }

function buildNestedObject() {
    let outerObj = {};
    let innerObj = outerObj;

    innerObj['name']= "John"
    //here innerObj is pointing the user property's empty obj
    innerObj = outerObj["user"] = {};
    innerObj["age"] = 25; //inside user
    innerObj = outerObj["setting"] = {};
    innerObj["theme"] = "dark";
    return outerObj;
}

console.log(buildNestedObject())