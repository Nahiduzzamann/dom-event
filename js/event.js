
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

document.getElementById('post-btn').addEventListener('click', function(){
    const comment = document.getElementById('write-box');
    commentValue = comment.value;
    const cmntbox = document.getElementById('comment-box');
    const p = document.createElement('p');
    p.innerText = commentValue;
    cmntbox.appendChild(p);
    comment.value = '';

})