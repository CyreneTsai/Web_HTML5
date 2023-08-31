AJAX(非同步)
操作
1 JavaScript: XMLHttpRequest 物件
2 jQuery: $.get()、$.post()、$.getJSON()、$.ajax()
3 ES6: Promise 物件的 then()
4 HTML5: Fetch API
5 plugin: Axios.js
6 ES6 以後: Async, Await

    處理從 Server 端傳回來的檔案格式:
1 .json
2 .xml
3 .csv

接收檔案之後，在 Client 端產生標籤，將需要的資料放進標籤裡，並呈現在畫面上
如果使用.js 就要了解 DOM 的操作
------------------------------------------------
    $.ajax({
        url: '',    // 資料請求的網址或檔案
        // url: 'http://localhost:8080',
        // url: 'http://localhost:8080?name=Peter&age=40',
        type: '',   // GET(by default), POST, PUT, PATCH, DELETE
        data: 資料, // 將資料傳送到指定的 URL
        // data: {name: 'Peter',age: 40}, 
        dataType: '',   // 預期會從 Server 端傳回來的「資料型態」: xml, html, json, text(csv)
        contentType: false, // 'application/x-www-form-urlencoded' by default
        // 如果要傳送檔案就要設為 false，意思就是將 'Content-Type' 設定為 multipart/form-data
        processData: false,
        catch: false,
        xhr() { },        // 若想改寫 XMLHttpRequest 然後回傳
        beforeSend() { }, // 在 request 發送之前
        headers() {      // 在 request 時有表頭要設定
            'X-CSRF-Token': '123456',   // 大概這麼寫
        },
        statusCode: {
            200: function () { },
            404: function () { },
            500: function () { },
        },
        success(res) { }, // 成功時的處理函數 
        error(why) { }, // 失敗時的處理函數 
        complete() { }, // request 完成之後執行 
    })
----------------------------------------------------------------------------
    sync VS async
synchronous: one at a time 一個執行「完」才會執行下一個
asynchronous: more one at a time 一執行馬上執行下一個

JavaScript 大部分的語法是 synchronous，但有些指令會造成 asynchronous
例如: 事件的發生、setInterval()、setTimeout()、AJAX...

何謂 callback function: 一個 function 裡面的 function

    Promise 物件
        - ES6
        - return resolve or reject
            - 執行 Promise 會確保 Promise 物件執行完之後會回應 resolve(已完成) or reject(未完成)
                - 語法:
const promise = new Promise(function (resolve, reject) {
    resolve(res)    // 成功時的處理函數
    reject(why)     // 失敗時的處理函數
})

promise.then(function () { }).then(function () { }).then(function () { })....
----------------------------------------------------------------------------
    1
function yourName(name) {
    setTimeout(function () {
        console.log(name)
    }, parseInt(Math.random() * 1000) + 1)
}

function allName() {
    yourName('Andy')
    yourName('Brian')
    yourName('Carl')
    yourName('Dennis')
    yourName('Eric')
}

allName()   // 每次執行結果都不一樣
--------------------------------------------
    2 使用 callback
function yourName(name, callNext) {
    setTimeout(function () {
        console.log(name)
        callNext()
    }, parseInt(Math.random() * 1000) + 1)
}

function allName() {
    yourName('Andy', function () {
        yourName('Brian', function () {
            yourName('Carl', function () {
                yourName('Dennis', function () {
                    yourName('Eric')
                })
            })
        })
    })
}

allName()   // 容易造成 callback hell，不容易維護
--------------------------------------------
    3 Promise 物件
function yourName(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name)
            resolve()
        }, parseInt(Math.random() * 1000) + 1)
    })
}

function allName() {
    yourName('Andy').then(function () {
        return yourName('Brian')
    }).then(function () {
        return yourName('Carl')
    }).then(function () {
        return yourName('Dennis')
    }).then(function () {
        return yourName('Eric')
    })
}

allName()
--------------------------------------------
    4 改成箭頭函數
function yourName(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name)
            resolve()
        }, parseInt(Math.random() * 1000) + 1)
    })
}

function allName() {
    yourName('Andy').then(() => yourName('Brian'))
        .then(() => yourName('Carl'))
        .then(() => yourName('Dennis'))
        .then(() => yourName('Eric'))
}

allName()

// 當我呼叫allName()時，就會去做上面的promise物件，然後進行下方的箭頭函式
--------------------------------------------
    5 改用 Async 和 Await
語法:
async function() {
    await
    }

function yourName(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name)
            resolve()
        }, parseInt(Math.random() * 1000) + 1)
    })
}

async function allName() {
    await yourName('Andy')
    await yourName('Brian')
    await yourName('Carl')
    await yourName('Dennis')
    await yourName('Eric')
}

allName()

//fetch API  不用引用!!!!!!!!!!!!
--------------------------------------------
    6 用 Async, Await 串接 API

    Fake Store API
https://fakestoreapi.com/

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))

    用 Async 和 Await 改寫

async function fetchData() {
    let res = await fetch('https://fakestoreapi.com/products')
    let json = await res.json()

    console.log(json)
}
fetchData()
--------------------------------------------
    7 除錯
語法:
try {

} catch (e) {

}

async function fetchData() {
    try {
        let res = await fetch('https://fakestoreapi.com/products')
        let json = await res.json()

        console.log(json)
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
fetchData()