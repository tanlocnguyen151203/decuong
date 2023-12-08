const util = require('util');
const {tong, hieu, tich, thuong} = require('.pheptoan');
let soA = 10;
let soB = 5;

console.log(`Kết quả của phép cộng ${soA} + ${soB} là: ${kiemThuPhepToan.cong(soA, soB)}`);
console.log(`Kết quả của phép trừ ${soA} - ${soB} là: ${kiemThuPhepToan.tru(soA, soB)}`);
console.log(`Kết quả của phép nhân ${soA} * ${soB} là: ${kiemThuPhepToan.nhan(soA, soB)}`);
console.log(`Kết quả của phép chia ${soA} / ${soB} là: ${kiemThuPhepToan.chia(soA, soB)}`);