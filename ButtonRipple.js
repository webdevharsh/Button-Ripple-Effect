let btn = document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;
  
  let ripple = document.createElement('span');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  btn.appendChild(ripple);
  setTimeout(()=>{
   ripple.remove();     
  },2000)
})
