let regex = /[^Aa]{6,}/g;

let words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

words.forEach(word => {
  if (regex.test(word)) {
    console.log(`✅ Знайдено: ${word}`);
  } else {
    console.log(`❌ Не підходить: ${word}`);
  }
});