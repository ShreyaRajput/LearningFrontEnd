function b2d(value) {
    value=parseInt(value)

    let exponent = 0
    let num = 0;

    while (value !== 0) {
        let binvalue = value % 10; 
        num += binvalue * Math.pow(2, exponent)
        exponent++;
        value = Math.floor(value / 10); 
    }
    return num;
    
}