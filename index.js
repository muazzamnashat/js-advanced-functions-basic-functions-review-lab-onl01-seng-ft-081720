// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
    return function(char = "special"){
        return `You are ${string}${char}${string}!` 
    }
}

const Calculator = {
    add: (num1,num2) => num1+num2,
    subtract: (num1,num2) => num1-num2,
    multiply: (num1,num2) => num1*num2,
    divide: (num1,num2) => num1/num2
}

function actionApplyer(int, arr) {
    if (arr.length === 0) return int;
    let start = int;
    arr.forEach(func => {
        start = func(start)
    })
    return start
}