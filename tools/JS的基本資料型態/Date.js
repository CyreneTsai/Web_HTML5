Date 日期時間物件
    // 1970/01/01 00:00:00 (UNIX Epoch) 紀元 / 時間戳記
    1. 建立 Date(日期時間) 物件
       - today = new Date();  //Sat Nov 06 2021 13:42:49 GMT+0800 (台北標準時間)
       - someday = new Date(year,month,day,hour,mintue.second,millisecond); //month 從 0 開始
            ex. someday = new Date(2021,10,06); //Sat Nov 06 2021 00:00:00 GMT+0800 (台北標準時間)
       - someday = new Date(millisecond);  // 一天有 86400000 毫秒
       - someday = new Date('日期時間字串');  // https://www.w3.org/Protocols/rfc822/
            ex. 
                new Date('Nov 6, 2021');
                new Date('November 6, 2021');
                new Date('6 Nov 2021');
                new Date('2021/11/6');
                new Date('11/6/2021');   // new Date('月/日/年');

                new Date('25/11/2021');  // Invalid Date
    
    2. 方法 
       - get 系列: 取得日期時間的個別資訊
       - to 系列: 取得日期時間的整串資訊
       - set 系列: 修改(設定)日期時間

    3. UTC 時間 (Coordinated Universal Time: UTC)
       - getUTC 系列: 取得日期時間的個別資訊
       - toUTC 系列: 取得日期時間的整串資訊
       - setUTC 系列: 修改(設定)日期時間

       new Date().getTimezoneOffset();  //-480  user 和 UTC 的時間差(單位:分鐘)