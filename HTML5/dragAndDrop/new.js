function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽的功能

    image = document.getElementById('image');
    image.addEventListener('dragstart', startDrag)
    image.addEventListener('dragend', endDrag)

    rightbox = document.getElementById('rightbox');
    // rightbox.addEventListener('dragenter', e => e.preventDefault())
    rightbox.addEventListener('dragover', e => e.preventDefault())
    rightbox.addEventListener('drop', dropped)
}
function startDrag(e){
    let data = `<img src="${image.src}" alt="${image.alt}">`
    // e.dataTransfer.setData('image/jpeg', data)
    e.dataTransfer.setData('Shin', data)
}
function endDrag(){
    // image.style.visibility = 'hidden'
    image.style.display = 'none'
}
function dropped(e){
    e.preventDefault()
    // rightbox.innerHTML = e.dataTransfer.getData('image/jpeg')
    rightbox.innerHTML = e.dataTransfer.getData('Shin')
}
window.addEventListener('load',doFirst)