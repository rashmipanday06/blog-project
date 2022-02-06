let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText=='*'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText =='C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
function currentTime() {
    var date = new Date()
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hours = updateTime(hours);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hours + ":" + min + ":" + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}
function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); 