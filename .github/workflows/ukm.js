function tong(a, b) {
    a = parseFloat( a);
     b = parseFloat( b);
     c = a + b;
     if(isNaN( c))
        console.log(  "số nhạp vào không phải là số");
    return c;
}
exports.tong = tong;