"use strict"

const foo = () => {
    console.log('hii');
}

// setTimeout(() => {
//     foo()
// }, 3000);

setInterval(() => {
    console.log('hiiii');
}, 1000);