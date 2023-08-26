// 1.0

/**
 * Перевіряє, чи людина з віком від 16 до 65 є працездатною.
 * @param {number} age - Вік людини.
 * @returns {boolean} - Чи працездатна людина.
 */
const isWorkingAgePerson = (age) => {
    return age >= 16 && age <= 65;
};

console.log(isWorkingAgePerson(26));
console.log(isWorkingAgePerson(13));
console.log(isWorkingAgePerson(77));

// 1.1

/**
 * Перевіряє, чи число є простим.
 * @param {number} num - Число яке ми перевіряємо.
 * @returns {boolean} - Чи число просте.
 */
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(3));
console.log(isPrime(12));

// 1.2

/**
 * Перевіряє, чи перше число ділиться націло на друге.
 * @param {number} a - Перше число.
 * @param {number} b - Друге число.
 * @returns {boolean} - Чи ділиться націло.
 */
const checkMultiplicity = (a, b) => {
    return a % b === 0;
};

console.log(checkMultiplicity(26, 13));
console.log(checkMultiplicity(88, 8));
console.log(checkMultiplicity(12, 5));

// 1.3

/**
 * Перевіряє, чи існує трикутник з заданими сторонами.
 * @param {number} a - Перша сторона.
 * @param {number} b - Друга сторона.
 * @param {number} c - Третя сторона.
 * @returns {boolean} - Чи існує трикутник.
 */
const isTrianglePossible = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
};

console.log(isTrianglePossible(8, 13, 7));
console.log(isTrianglePossible(2, 2, 8));

// 1.4

/**
 * Обчислює площу трикутника за його сторонами.
 * @param {number} a - Перша сторона трикутника.
 * @param {number} b - Друга сторона трикутника.
 * @param {number} c - Третя сторона трикутника.
 * @returns {number} - Площа трикутника.
 */
const triangleArea = (a, b, c) => {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

/**
 * Обчислює площу прямокутника за його сторонами.
 * @param {number} width - Ширина прямокутника.
 * @param {number} height - Висота прямокутника.
 * @returns {number} - Площа прямокутника.
 */
const rectangleArea = (width, height) => {
    return width * height;
};

console.log(triangleArea(3, 4, 5));      // 6
console.log(rectangleArea(5, 10));      // 50

// ----------------------------------------------------

// 2.1

/**
 * Перевіряє, чи є число парним.
 * @param {number} num - Число для перевірки.
 * @returns {boolean} true, якщо число парне, інакше false.
 */
const isEven = function(num) {
    return num % 2 === 0;
};

console.log(isEven(13));
console.log(isEven(8));

// 2.2

/**
 * Виводить повідомлення про користувача з правильними закінченнями для віку.
 * @param {string} name - Ім'я користувача.
 * @param {number} age - Вік користувача.
 */
const showInfo = function(name, age) {
    let ageWord;
    if (age % 10 === 1 && age % 100 !== 11) {
        ageWord = 'рік';
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        ageWord = 'роки';
    } else {
        ageWord = 'років';
    }

    console.log(`Привіт, мене звати ${name} і мені ${age} ${ageWord}.`);
};

showInfo("Анна", 21);
showInfo("Оля", 43);
showInfo("Анна", 40);