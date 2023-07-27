const { isEven } = require('./isEven.js')

/*
    Change num with the number you want to check
*/
const num = 2;
isEven(num).then(result => {
    console.log(result)
})
