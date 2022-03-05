const dataInputText = document.querySelector('#data-input-text');
const dataInputDate = document.querySelector('#data-input-date')
const btn = document.querySelector("#calculate")
const btnClear = document.querySelector("#clear")
// переменные для записи результата на страницу
const pYear = document.querySelector('.year')
const pMonth = document.querySelector('.month')
const pWeek = document.querySelector('.week')
const pDay = document.querySelector('.day')
/*
dataInput.addEventListener('change', ()=>{
    let dataInputValue = dataInput.value;
    let date = new Date (dataInputValue)
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getDay());
})   
*/



//функция которая позволяет узнать из строчки вида "дд.мм.ггг" значение
// день недели, номер недели, название месяца и год
const getDayInfo = function (strng, normalDate) {
    let allDate;
    if (strng) {
        const arr = strng.split('.');
         allDate = new Date(`${arr[2] + "-" + arr[1] + "-" +arr[0]}`);
    } else {
        allDate = new Date (normalDate)
    }
    
    const year = allDate.getFullYear();
    const numberMonth = allDate.getMonth()
    const data = allDate.getDate()
    const day = allDate.getDay()
    // вывод в консоль результата
    console.log(getNameDay(day) + ', ' + getWeekNumber(data) + ' ' + 'неделя, ' + getMonth(numberMonth) + ', ' + year + ' ' + 'года');
    // вывод на страницу результата
    pYear.textContent = `${year} года.`;
    pMonth.textContent = `${getMonth(numberMonth)}`;
    pWeek.textContent = `${getWeekNumber(data)} неделя`;
    pDay.textContent = `${getNameDay(day)},`
}
//функция для молучения названия месяца
const getMonth = function(number){
    let month;
    switch (number) {
        case 0:
            month = 'января'
            break;
        case 1:
            month = 'февраля'
            break;
        case 2:
            month = 'марта'
            break;
        case 3:
            month = 'апреля'
            break;
        case 4:
            month = 'мая'
            break;
        case 5:
            month = 'июня'
            break;
        case 6:
            month = 'июля'
            break;
        case 7:
            month = 'августа'
            break;
        case 8:
            month = 'сентября'
            break;
        case 9:
            month = 'октября'
            break;
        case 10:
            month = 'ноября'
            break;
        case 11:
            month = 'декабря'
            break;
            
    
        default:
            month ='такого месяца нет'
            break;
    }
    return month
}

// функция для получения номера недели
const getWeekNumber = function (numberDay) {
    let weekCount = 0
    if (numberDay < 8) {
        weekCount = 1        
    };
    if (numberDay > 7 && numberDay <15 ) {
        weekCount = 2
    };
    if (numberDay > 14 && numberDay <21 ) {
        weekCount = 3
    };
    if (numberDay > 21) {
        weekCount = 4
    };
    return weekCount;
}

//для молучения названия дня
const getNameDay = function (countOfDay) {
    let daysName;
    switch (countOfDay) {
        case 0:
            daysName = 'воскресенье'
            break;
        case 1:
            daysName = 'понедельник'
            break;
        case 2:
            daysName = 'вторник'
            break;
        case 3:
            daysName = 'среда'
            break;
        case 4:
            daysName = 'четверг'
            break;
        case 5:
            daysName = 'пятница'
            break;
        case 6:
            daysName = 'суббота'
            break;
    
        default:
            daysName = 'такого дня не существует'
            break;
    }
    return daysName;
}

// вызов функции по нажатия кнопки
btn.addEventListener('click', ()=>{
    console.log(dataInputDate.value);
    getDayInfo(dataInputText.value, dataInputDate.value)
})

btnClear.addEventListener('click', ()=>{
    pYear.textContent = "";
    pMonth.textContent = "";
    pWeek.textContent = "";
    pDay.textContent = "";
})