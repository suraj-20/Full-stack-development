
// Difference between var and let ?

// How to declare function in JS ?
// Syntex --> function<nameOfFunction>(<params>){}

function testDeclaration(){
    // let - scope will be entire function.
    if(true){
        var x = 10;
        let y = 20;  // scope will be inside if block.
        console.log("This is inside if block.");
        console.log(x);  //10
        console.log(y);  //20
    }
    console.log("This is outside if block.")
    console.log(x);  //10
    console.log(y);  //y is not defined
}

// Declaring using var has function lavel scope.
// Declaring using let has block lavel scope. 

testDeclaration();