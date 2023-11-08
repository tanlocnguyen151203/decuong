function tong(a, b) {
    a = parseFloat( a);
     b = parseFloat( b);
     c = a + b;
     if(isNaN( c))
        console.log(  "số nhạp vào không phải là số");
    return c;
}
function tru(a, b) {
     c = a - b;
     return c;
}
exports.tong = tong;
exports.tru = tru;