
let $test = document.querySelector('.submitButton');
let $header = document.querySelector('.header');
let $body = document.querySelector('body')
let status = false;

$test.addEventListener('click', ()=>{
  if(status){
    $body.classList.add('changeBackground');
    status=false;
  }else{
    $body.classList.remove('changeBackground');
    status = true;
  }
})
