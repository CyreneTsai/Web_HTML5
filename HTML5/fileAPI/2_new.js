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
}
window.addEventListener('load',doFirst)