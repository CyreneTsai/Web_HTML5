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
    const promise = new Promise(function(resolve,reject){
        resolve(res)    // 成功時的處理函數
        reject(why)     // 失敗時的處理函數
    })

    promise.then(function(){}).then(function(){}).then(function(){})....
----------------------------------------------------------------------------
1
    function yourName(name){
        setTimeout(function(){
            console.log(name)
        }, parseInt(Math.random() * 1000) + 1)
    }

    function allName(){
        yourName('Andy')
        yourName('Brian')
        yourName('Carl')
        yourName('Dennis')
        yourName('Eric')
    }

    allName()   // 每次執行結果都不一樣
--------------------------------------------
2 使用 callback
    function yourName(name,callNext){
        setTimeout(function(){
            console.log(name)
            callNext()
        }, parseInt(Math.random() * 1000) + 1)
    }

    function allName(){
        yourName('Andy',function(){
            yourName('Brian',function(){
                yourName('Carl',function(){
                    yourName('Dennis',function(){
                        yourName('Eric')
                    })
                })
            })
        })
    }

    allName()   // 容易造成 callback hell，不容易維護
--------------------------------------------
3 Promise 物件
    function yourName(name){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(name)
                resolve()
            }, parseInt(Math.random() * 1000) + 1)
        })
    }

    function allName(){
        yourName('Andy').then(function(){
            return yourName('Brian')
        }).then(function(){
            return yourName('Carl')
        }).then(function(){
            return yourName('Dennis')
        }).then(function(){
            return yourName('Eric')
        })
    }

    allName() 
--------------------------------------------
4 改成箭頭函數
    function yourName(name){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(name)
                resolve()
            }, parseInt(Math.random() * 1000) + 1)
        })
    }

    function allName(){
        yourName('Andy').then(() => yourName('Brian'))
                        .then(() => yourName('Carl'))
                        .then(() => yourName('Dennis'))
                        .then(() => yourName('Eric'))
    }

    allName()
--------------------------------------------
5 改用 Async 和 Await
    語法: 
    async function(){
        await
    }

    function yourName(name){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(name)
                resolve()
            }, parseInt(Math.random() * 1000) + 1)
        })
    }

    async function allName(){
        await yourName('Andy')
        await yourName('Brian')
        await yourName('Carl')
        await yourName('Dennis')
        await yourName('Eric')
    }

    allName()

--------------------------------------------
--------------------------------------------
--------------------------------------------
