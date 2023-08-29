function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能
    document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){ 
    let file = document.getElementById('theFile').files[0]
    // console.log(file);
    let message = ``

    message += `File name: ${file.name}\n`
    message += `File type: ${file.type}\n`
    message += `File size: ${file.size} byte\n`
    message += `Last modufied: ${file.lastModifiedDate} byte\n`

    document.getElementById('fileInfo').value = message
    // ============= 以下為新增的程式碼 ==============

    let readFile = new FileReader()
    readFile.readAsText(file)
    readFile.addEventListener('load', function(){
        document.getElementById('fileContent').value = readFile.result
    })
}
window.addEventListener('load',doFirst)