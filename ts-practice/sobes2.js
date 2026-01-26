// 1) Задача: реализуй createCounter(initial) так, чтобы:
// counter() увеличивал значение и возвращал новое
// counter.peek() возвращал текущее без изменения
// counter.reset() сбрасывал к initial
// counter.set(n) устанавливал значение
// Пример:

// const c = createCounter(10);
// c();        // 11
// c();        // 12
// c.peek();   // 12
// c.set(100); // 100
// c();        // 101
// c.reset();  // 10
// c.peek();   // 10

// function createCounter(initial) {
// 	return function () {
// 		initial++
// 	}
// }

// const object = {}

// const c = createCounter(10)
// c()
// console.log(c)

// Какой будет порядок выводов?

// console.log('A')

// setTimeout(() => console.log('B'), 0)

// Promise.resolve()
// 	.then(() => console.log('C'))
// 	.then(() => console.log('D'))

// queueMicrotask(() => console.log('E'))

// console.log('F')

// A F C E D B

// 3 Задача: что выведет и почему?

// const user = {
// 	name: 'Alex',
// 	greet() {
// 		return `Hi, ${this.name}`
// 	},
// }

// const greet = user.greet

// console.log(user.greet()) // Hi, Alex
// console.log(greet()) // `Hi, undefined`

// 4 Задача

// Условие:
// Дан массив чисел. Нужно вернуть сумму только положительных чисел.

sumPositive([1, -2, 3, 4, -5]) // 8
sumPositive([-1, -2, -3]) // 0
sumPositive([]) // 0

function sumPositive(array) {
	if (!array.length) return 0

	return array.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
}

console.log(sumPositive([1, -2, 3, 4, -5]))
console.log(sumPositive([-1, -2, -3]))
console.log(sumPositive([]))

// 5) React + TypeScript: компонент “Корзина” со стейтом и вычислением итога

// Задача: Сделай компонент CartWidget:
// типизируй CartItem
// хранить корзину в useReducer (лёгкий стейт-менеджмент)
// умеет: увеличить/уменьшить qty, удалить
// отображает список и итоговую сумму
// вынеси функцию calcTotal(items) (с типами)
// Ожидаемое поведение:
// qty не может быть < 1 (если уменьшают с 1 — удаляем или стоп, выбери один и придерживайся)
//  •  • total = сумма price * qty
