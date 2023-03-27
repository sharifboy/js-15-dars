"use strict"

const foo = () => {
    console.log('hii');
}

setTimeout(() => {
    foo()
}, 3000);