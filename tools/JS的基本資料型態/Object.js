Object 自訂物件

1 建立 Object 物件
    let obj = {}
    let obj = new Object()

    [ex]
    const man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriateColor: ['black','gray','white'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2021,
        },
        retired: false,
        sayHello(){},
    }

2 如何存取
    for(let key in man){
        console.log(key)  // 找出物件「:」左邊的 key 值
        console.log(man[key])  // 找出物件「:」右邊的 value 值
    }

    man.name ---> Peter
        物件的陣列表示法: man['name']       
    man.favoriateColor[0] ---> black
        物件的陣列表示法: man['favoriateColor'][0]
    man.car.mode ---> X5
        物件的陣列表示法: man['car']['mode']
    man.sayHello()

3 一定要用物件的陣列表示法
    const products = {
        10: 'iPad',
        20: 'iPone',
        30: 'Mac Pro',
        40: 'HomePad mini',
        50: 'AirPods',
    }

    products.10 ---> XX
    products[10] ---> iPad

    [ex]
    localStorage.setting = 'ABC'
    localStorage['setting'] = 'ABC'
