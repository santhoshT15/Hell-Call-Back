var timer = document.createElement("div");
timer.className="content";

setTimeout(() =>{
    timer.innerText = "10";
},1000);

setTimeout(() =>{
    timer.innerText = "9";
},2000);

setTimeout(() =>{
    timer.innerText = "8";
},3000);

setTimeout(() =>{
    timer.innerText = "7";
},4000);

setTimeout(() =>{
    timer.innerText = "6";
},5000);

setTimeout(() =>{
    timer.innerText = "5";
},6000);

setTimeout(() =>{
    timer.innerText = "4";
},7000);

setTimeout(() =>{
    timer.innerText = "3";
},8000);

setTimeout(() =>{
    timer.innerText = "2";
},9000);

setTimeout(() =>{
    timer.innerText = "1";
},10_000);

setTimeout(() =>{
    timer.innerText = "Happy Independence Day";
},11_000);

document.body.appendChild(timer);
