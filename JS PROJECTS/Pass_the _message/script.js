const messageInput = document.getElementById("message-input");


messageInput.addEventListener("keydown", function (event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;

    // Clearing the input box
    messageInput.value = "";
}


// ->Add an event listener to the input box
// ->User can enter their message
// ->click on the enter key to show the message
// ->So they don't always have to click on the submit button