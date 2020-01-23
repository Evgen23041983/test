let money = prompt("Ваш бюджет на месяц?", '');
let timeData = prompt("Введите дату в формате YYYY-MM-DD", '');
let budgetSurely = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch = prompt("Во сколько обойдется?", '');
let appData = {
    budget: money,
    data: timeData,
    expenses: {
        budgetSurely: howMuch
    },
    optionalExpenses: '',
    income: [],
    savings: false
}
 alert(appData.budget/30);
 console.log(appData.budget/30);