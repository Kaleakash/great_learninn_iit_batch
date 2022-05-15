function doTask(character) {
    var ddValue = document.getElementById("input");
    if(character == "="){
     ddValue.innerHTML=  eval(ddValue.innerText)
    }else if(character=="C"){
        ddValue.innerText=""
    }else if(character=="sqrt"){
        ddValue.innerHTML = Math.sqrt(eval(ddValue.innerText));
    }else {
        ddValue.innerHTML +=character;
    }
     
}