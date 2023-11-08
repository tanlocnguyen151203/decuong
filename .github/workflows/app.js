const util = require( 'util');
const { tong} = require('./ukm');
var a =10; var b = '20';
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))