/*Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.*/


var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        total += parseInt(this[key]);
      }
    }
    return total;
  },

  minPrice: function() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let value = parseInt(this[key]);
        if (value < min) {
          min = value;
        }
      }
    }
    return min;
  },

  maxPrice: function() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let value = parseInt(this[key]);
        if (value > max) {
          max = value;
        }
      }
    }
    return max;
  }
}; 

services['Розбити скло'] = "200 грн"; 

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());