// static -> you need the class itself, not object 
// for calling that property or method

class MathTools {
    static value = 10; //static property
}

let tool = new MathTools(); 
console.log(tool.value); //won't work

console.log(MathTools.value); //directly with class.prop