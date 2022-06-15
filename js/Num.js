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

function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length;

}

function eraseText() {
    document.getElementById("myTextArea").value = "";
}

$(function() {
    $('#myTextArea').on('input keyup paste', function() {
        var $el = $(this),
            offset = $el.innerHeight() - $el.height();

        if ($el.innerHeight() < this.scrollHeight) {
            // Grow the field if scroll height is smaller
            $el.height(this.scrollHeight - offset);
        } else {
            // Shrink the field and then re-set it to the scroll height in case it needs to shrink
            $el.height(1);
            $el.height(this.scrollHeight - offset);
        }
    });
});

