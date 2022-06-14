function incrementBtn(){
    var element=document.getElementById('incrementText');
    var value=element.innerHTML;

    ++value
    console.log(value)
    document.getElementById('incrementText').innerHTML=value;
}

function decrementBtn(){
    var element=document.getElementById('decrementText');
    var value=element.innerHTML;

    --value
    console.log(value)
    document.getElementById('decrementText').innerHTML=value;
}
