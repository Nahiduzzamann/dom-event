
function like() {
    let val = 1;
    if (val > 0) {
        let value = 1;
        value++;
        const likeValue = document.getElementById('unlimited-like');
        likeValue.innerText = value;
    }


}

document.getElementById('blue-color').addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
})