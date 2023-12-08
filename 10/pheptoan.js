const PhepToan = {
    
    tong: function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        c = a + b;
        if (isNAN(c))
        console.log("so nhap vao khong phai la so");
        return c;
    },
    hieu: function(a, b) {
        c = a - b;
    },
    tich: function(a, b) {
        c = a * b;
    },
    thuong: function(a, b) {
        if (b === 0) {
            return "Không thể chia cho 0";
        } else {
            c = a / b;
        }
    }

};
