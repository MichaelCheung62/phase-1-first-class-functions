const receivesAFunction =(callback) => {
    return callback()
}

const returnsANamedFunction =(fun) => {
    return function fun(){} 
}

const returnsAnAnonymousFunction =() => {
    return function (){
        
    }
}