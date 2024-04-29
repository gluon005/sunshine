let a =1
function changestyle(){
    button = document.querySelector("#no");
    text = document.querySelector(".Text");
    if(a!=6){
    let currentWidth = button.offsetWidth;
    let currentHeight = button.offsetHeight;

    
    let newWidth = currentWidth * 0.9;
    let newHeight = currentHeight * 0.9;
    

    
    button.style.width = newWidth + "px";
    button.style.height = newHeight + "px";
    if(a==1)
    text.innerText = "Are U sure sunshine??";
    if(a==2)
    text.innerText = "Chooose again!!";
    if(a==3)
    text.innerText = "Not fair :((";
    if(a==4)
    text.innerText = "You are making me sad ;(";
    if(a==5)
    text.innerText = "Press Yes"
    a++;
    }
}