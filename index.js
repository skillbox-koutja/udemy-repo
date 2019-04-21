'use strict';


let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let questions = 2;
while (questions--) {
    let expense = prompt('Введите обязательную статью расходов в этом месяце', '');
    let cost = prompt('Во сколько обойдется?', '');
    if (typeof (expense) === 'string' && typeof (cost) === 'string' &&
        expense !== '' && cost !== '' &&
        expense.length < 50
    ) {
        appData.expenses[expense] = +cost;
    } else {
        questions++;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert(appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}