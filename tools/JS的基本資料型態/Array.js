Array

1 建立 Array 物件
    let arr = []
    let arr = new Array()

2 如何存取
    arr[0]

    for(let i = 0; i < arr.length; i++){.....}

3 屬性: length

4 方法:
    新增刪除在前端: unshift(item) | shift()
    新增刪除在後端: push(item) | pop()
    新增刪除在任意端: splice()
        splice(index) --> splice(3) 刪除 index 3 以及之後的資料
        splice(index, 筆數) --> splice(3,1) 刪除 index 3 那一筆
        splice(index, 筆數, 新增 1, 新增 2, 新增 3,...) --> splice(3,0,100,200,300) 新增資料在 index 3 那個位置
        
    尋找 index
        indexOf() | lastIndexOf() 
  
    concat()
    reverse()
    sort()
  
    陣列 = 陣列.filter(function(data){return 符合篩選條件的資料})
    陣列 = 陣列.map(function(data){return 逐個處理完之後的結果})
    值 = 陣列.reduce(function(accmulator,data){return 逐個處理，每次處理的結果放進累計器中})
      