"use strict";

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
request.open("GET", "https://inspirobot.me/api?generate=true", true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        const inspiration = document.getElementById("inspiration");
        inspiration.src = this.response;
        inspiration.setAttribute("alt", "freshly generated inspiration");
        inspiration.style.maxHeight = "500px";

        const copyText = document.getElementById("imageLinkContent");
        copyText.setAttribute("value", this.response);
        copyText.style.width = "55%";

        const copyButton = document.getElementById("copyButton");
        copyButton.addEventListener("click", function() {
            const copyText = document.getElementById("imageLinkContent");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Copied image link: " + copyText.value);
        });
    } else {
        const errorMessage = document.createElement("marquee");
        errorMessage.textContent = `it's not working!`;
        errorMessage.style.width = "300px";
        inspiroImage.appendChild(errorMessage);
    }
};
request.send();