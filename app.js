const util = require( 'util');
const { tong} = require('../github/ukm');
var a =10; var b = 30;
console.log(util.format('tổng %d+%d=%d',  a,b, tong(a, b)))
console.log(util.format('tru %d+%d=%d',  a,b, tong(a, b))) 