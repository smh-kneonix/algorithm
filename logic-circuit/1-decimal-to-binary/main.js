function DecToBinary(decimal) {
    let binary = 0, reminder, i = 1;
    while (decimal != 0) {
        reminder = decimal % 2;
        decimal = parseInt(decimal / 2);
        binary = binary + reminder * i;
        i = i * 10;
    }
    
    return binary;
    /*
      you can get your result like that
      binary = Number(decimal.toString(2));
      or
      binary = +decimal.toString(2);
    */
}
DecToBinary(5);