const color = ['red','green','blue','pink','purple','cyan'];

function Dot() {
     let rand = Math.floor(Math.random() * color.length);
     let x = document.createElement('span');
     x.classList.add("dot");
     x.style.backgroundColor = color[rand];
     x.style.left = `${Math.random() * window.innerWidth}px`;
     document.body.appendChild(x);
     setTimeout(() => {
          x.remove();
     }, 10000);
}

setInterval(() => {
     Dot();
}, 10);
