const util = require( 'util');
const { tong } = require('./ukm');

var a ='50'; var b = 30;
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))