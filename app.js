const util = require( 'util');
const { tong} = require('../github/ukm');
var a =40; var b = 30;
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))