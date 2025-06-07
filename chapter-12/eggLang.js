// do(define(x,10), 
//     if(>(x,5), 
//      print("large"),
//      print("small"))
// )

//     if(>(x,5))
const dataStructure = {
    type: "apply", 
    operator: {type: "word", name: ">"},
    args: [
        {type: "word", name: "x"},
        {type: "value", value: 5}
    ]
}
