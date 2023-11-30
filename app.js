const util = require( 'util');
const { tong, tru } = require('./ukm');

<<<<<<< HEAD
var a ='40'; var b = 30;
=======
var a ='40'; var b = 50;
>>>>>>> eebd4d32afe36a021b9b7ce882da8596a388f4b2
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))
console.log(util.format('trừ %d-%d=%d',  a,b, tru(a, b)))
