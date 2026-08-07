/* Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати 
певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. 
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

*/

function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let evenCounter = 0;
    let oddCounter = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min

        if (num % 2 === 0) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }

    let evenPercent = (evenCounter / count) * 100;
    let oddPercent = (oddCounter / count) * 100;

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Кількість парних чисел: " + evenCounter);
    console.log("Кількість непарних чисел: " + oddCounter);
    console.log("Відсоток парних до непарних:"+ evenPercent.toFixed(2) + "%" +"/"+ oddPercent.toFixed(2) + "%");
       
}

checkProbabilityTheory(25);
checkProbabilityTheory(53);