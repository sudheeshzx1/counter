

let count = 0;

const val = document.querySelector('#val')
const btn = document.querySelectorAll('.btn')
// console.log(btn);

btn.forEach(function (btns) {
btns.addEventListener('click',(e)=>{
const styles= e.currentTarget.classList
if(styles.contains('decrease')){
    count--;
}
else if(styles.contains('increase')){
    count++;
}
else{
    count=0;
}

value.textContent= count;
})


});