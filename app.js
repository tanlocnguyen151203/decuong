const util = require( 'util');
const { tong, tru } = require('./ukm');

var a ='40'; var b = 30;
var a ='40'; var b = 30;
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))
console.log(util.format('trừ %d-%d=%d',  a,b, tru(a, b)))
