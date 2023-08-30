JSON (JavaScript Object Notation)

1. 陣列放進物件裡
    let temp = {
        屬性: [],
    };

    let friends = {
        GE101: [
            {name: 'Andy', age: 25},
            {name: 'Brian', age: 21},
            {name: 'Carl', age: 22},
            {name: 'Dale', age: 23},
            {name: 'Ellen', age: 21},
        ],
    };
    friends ---> 物件
    friends.GE101 ---> 陣列
    friends.GE101[2] ---> 物件
    friends.GE101[2].name ---> Carl

    [JSON 格式]
    {
        "GE101":[
           {
              "name":"Andy",
              "age":25
           },
           {
              "name":"Brian",
              "age":21
           },
           {
              "name":"Carl",
              "age":22
           },
           {
              "name":"Dale",
              "age":23
           },
           {
              "name":"Ellen",
              "age":21
           }
        ]
     }


2. 物件放進陣列裡
    let temp = [
        {},{},{},...
    ];

    let classmate = [
        {name: 'Andy', age: 25},
        {name: 'Brian', age: 21},
        {name: 'Carl', age: 22},
        {name: 'Dale', age: 23},
        {name: 'Ellen', age: 21},
    ];
    classmate ---> 陣列
    classmate[3]---> 物件
    classmate[3].name---> Dale

    [JSON 格式]
    [
        {
           "name":"Andy",
           "age":25
        },
        {
           "name":"Brian",
           "age":21
        },
        {
           "name":"Carl",
           "age":22
        },
        {
           "name":"Dale",
           "age":23
        },
        {
           "name":"Ellen",
           "age":21
        }
     ]
    
3. 轉換
   (1). 將 「JavaScript 物件」轉換成 JSON
        JSON.stringify(JavaScript 物件)

        [ex]
        let man = {
            name: 'Peter',
            age: 40,
            gender: 'male',
            favoriateColor: ['black','white','gray'],
            car: {
                make: 'BMW',
                mode: 'X5',
                year: 2020,
            },
            retired: false,
            sayHello(){
                console.log('Hello');
            },
        };

        執行: console.log(JSON.stringify(man));
        結果: {"name":"Peter","age":40,"gender":"male","favoriateColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}

   (2). 將 JSON 轉換成 「JavaScript 物件」
        (※ 記得將 json 檔放進單引號或反引號裡)
        JSON.parse(json)

        [ex]
        let json = '{"name":"Peter","age":40,"gender":"male","favoriateColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}'

        執行: console.log(JSON.parse(json));
        結果: {name: 'Peter', age: 40, gender: 'male', favoriateColor: Array(3), car: {…}, …}