String 字串物件
    1.建立 String 物件
        let str = '';
        let str = new String();

        let language = 'JavaScript';
        let language = new String('JavaScript');

    2.屬性: length

    3.方法
        - 拆分
            charAt(index)
            indexOf(字串) | lastIndexOf(字串)
            substr(index from, count);      //從字串中找出部分字串
            slice(index from[, index to]);  //從字串中找出部分字串(包含from不包含to)

        - 操作
            concat()
            toLowerCase()
            toUpperCase()
            split() 字串切割成陣列
            toString() 將物件轉成字串
            replace(子字串,欲取代的字串)

    4.跳脫字元
        \n | \r\n 換行
        \t
        \\
        \'
        \"




    <script>
        
    </script>
</body>
</html>