/*
1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.*/

let arr1 = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
}
document.getElementById('task-1').innerText = `Max = ${max}`;

/*2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
Створити новий масив де будуть тільки Стрінгові значення.*/

let arr2 = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
let arr2res = [];
for (let i = 0; i < arr2.length ; i++){
    if (typeof(arr2[i]) == 'string') {
        arr2res.push(arr2[i]);
    }
}
console.log('arr of string = ',arr2res);

/*
3.	Дано колекцію - [
    {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
    {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"},
    {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}]
– Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів –
job (true/false);*/

let people = [
    {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
    {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"},
    {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}
    ];
let users = [];
let someArr = []; // for unique
let uniqueUsers = {};

for (let i = 0; i < people.length; i++) {
    for (let item in people[i]) {
        if (people[i].type === 'user') {
            someArr.push(people[i]);
        }
    }
}
uniqueUsers = new Set(someArr);
users = [...uniqueUsers];
console.log('Users: ',users);

let strOfHiking = '';
let hikingHobby = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (key === 'hobby') {
                if ((arr[i][key].includes('hiking') === true)){
                    document.getElementById('task-3').innerHTML += arr[i].name + ' ';
                }
            }
        }
    }
    return strOfHiking;
}
console.log(hikingHobby(people));

let addNewJob = function (arr) {
    for (let j = 0; j < arr.length; j++) {
            let questionsToAdd = confirm('do you want to add job?');
            if (questionsToAdd) {
                let jobToAdd = +prompt('input job to add');
                arr[j].job = jobToAdd;
            }
    }
    console.log(people);
}

addNewJob(people);


/*
4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки
(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.*/

document.addEventListener('keydown',function (event){
    if (event.ctrlKey && event.code === 'KeyC') {
        alert('HEYYYY! DONT TRY TO COPY. F*****');
    }
})

/*5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн.
// Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.*/

let node = null;
let URL = 'https://restcountries.eu/rest/v2/all';
let btnTask5 = document.getElementById('btn-5-task');



function sendRequest(method,url,body=null) {
    return fetch(url).then(response=>response.json());
}
sendRequest('GET',URL).then(data=>console.log(data));

/*SORRY.HAvent enought time =(*/

