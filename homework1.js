// 1.
console.log('number' + 3 + 3);
// ="number33", бо при додаванні елементи залишаються рядком, спочатку "number3"+3, потім "number33"

// 2.
console.log(null + 3);
// =3, бо null перетворюється на 0

// 3.
console.log(5 && "qwerty");
// ="qwerty", бо логічне І шукає перше false значення, якщо його нема, то виводить останнє true, як в даному випадку

// 4.
console.log(+'40' + +'2' + "hillel");
// ="42hillel", бо + перед рядком це все одно, що Number('40') і Number('2'), отже 42+"hillel"="42hillel"

// 5.
console.log('10' - 5 === 6);
// false, бо '10' - 5 = 5, а 5 не рівне 6 по типу і значенню

// 6.
console.log(true + false);
// =1, бо при додаванні 1+0=1

// 7.
console.log('4px' - 3);
// =NaN, бо '4px' неможливо перевести в число, тоді NaN-3=NaN

// 8.
console.log('4' - 3);
// =1, бо 4-3=1

// 9.
console.log('6' + 3 ** 0);
// = "61", бо спочатку виконується піднесення до степеня, отже, 3**0=1 => '6' + 1 = "61"

// 10.
console.log(12 / '6');
// =2, бо при діленні рядок стає числом

// 11.
console.log('10' + (5 === 6));
// ="10false", бо в дужках false, а друга дія - конкатенація

// 12.
console.log(null == '');
// =false, бо null не рівний string

// 13.
console.log(3 ** (9 / 3));
// =27, бо спочатку дії в дужках, а потім 3 в кубі=27

// 14.
console.log(!!'false' == !!'true');
// =true, бо !! перетворює будь-яке значення в булеве, отже 2 рядки це два true, а true == true => true

// 15.
console.log(0 || '0' && 1);
// =1, бо && виконується раніше за ||. Спочатку '0' - це непорожній рядок => true, отже '0' && 1 => 1. Далі по ||: 0 => false, отже 0 || 1 => 1

// 16.
console.log((+null == false) < 1);
// = false. Спочатку +null = 0, далі 0 == false => 0 == 0 => true, наступне true < 1 => false

// 17.
console.log(false && true || true);
// =true. Спочатку false && true => false, далі false || true => true

// 18.
console.log(false && (false || true));
// =false, бо false || true => true, далі false && true => false

// 19.
console.log((+null == false) < 1 ** 5);
// =false. Спочатку після двух спрощень (0 == false) < 1, далі 0 == false => true, отже true < 1 => 1 < 1 => false
