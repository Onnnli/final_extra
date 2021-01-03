// Задание 1
// Написать функцию, которая делает все буквы в каждом элементе массива заглавными.
let array = ['one', 'two', 'three'];
document.querySelector('.out-1').innerHTML = array;
let mass = []
for(let i = 0; i < array.length; i++){
    let upper = array[i].toUpperCase()
    mass.push(upper)
}
document.querySelector('.out-11').innerHTML = mass;

// Задание 2
// Написать функцию, которая делает первую букву в каждом элементе массива заглавной, а не строчные элементы удаляет.

let newArr = array.map((item) => {
    let newItem = item[0].toUpperCase();
    return newItem
});
document.querySelector('.out-2').innerHTML = newArr;

// Задание 3
// Написать функцию, которая округляет все числовые значения в массиве в большую сторону, а не числовые элементы удаляет.
let arr3 = ['one', 2.3, 25, -9.3, 'word', -7];

for(let i = 0; i < arr3.length; i++){
    if(typeof(arr3[i]) === 'number'){
        document.querySelector('.out-31').innerHTML += Math.ceil(arr3[i]) + ' '
        
    }else{
        delete arr3[i]
    }
}

// Задание 4
// Создать функцию которая рисует таблицу на странице с заданным 
//количеством строк и колонок(параметры функции)

let col = document.querySelector('#column')
let row = document.querySelector('#row')
let btn = document.querySelector('#draw')

let table = document.querySelector('.tbl')


btn.addEventListener('click', function(){
    console.log('click');
    let colNum = +col.value;
    let rowNum = +row.value;
    console.log(colNum, rowNum);
    for(let i = 1; i <= rowNum; i++){
        console.log(i);
        const roww = document.createElement('tr');
        console.log(roww);

        for(let j = 1; j <= colNum; j++){
            const column = document.createElement('td');
                roww.append(column);
                column.textContent = `${j}`;
            }
            table.append(roww)
    }  
    col.value = ''
    row.value = ''

})


// Задание 5
// Сверстать меню, при нажатии на каждый пункт которого, появляется дополнительный блок с меню, 
//а также активный пункт имеет отличный от других цвет. При нажатии еще раз на активный пункт 
//или на открытое подменю - подменю закрывается.


// Задание 6


// Сверстать меню, при изменении размера окна браузера, когда 
//оно по ширине будет меньше 991px, меню должно  скрываться, а появляться иконка мобильного 
//меню (3 полоски), при нажатии на него  должен появляться блок с мобильным меню с такими же 
//пунктами, как в основном меню.


// Задание 7
// Создать функцию, которая создает на странице поле, в которое записываются английские буквы, 
//которые мы нажимаем на клавиатуре.


// Задание 8
// Динамически создавать таблицу. 
//При нажатии кнопки “добавить” спрашивать у пользователя имя, 
//возраст и номер телефона с помощью prompt, и после ввода добавлять строку с этими данными в таблицу.