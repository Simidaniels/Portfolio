alert('Welcome to designBrooks!');

var docTitle = document.title;
window.addEventListener ('blur',()=>{
    document.title = 'Design Brooks'
})
window.addEventListener('focus',()=>{
    document.title = docTitle
})