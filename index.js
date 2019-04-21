'use strict';


let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

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
    let expense = prompt('Введите обязательную статью расходов в этом месяце');
    let cost = prompt('Во сколько обойдется?');
    appData.expenses[expense] = +cost;
}
alert(appData.budget / 30);