// JavaScript to handle chatbot interaction
document.getElementById('sendChat').addEventListener('click', function() {
    const input = document.getElementById('chatInput').value;
    
    if (input.trim() === "") {
        alert("Please type a message first.");
        return;
    }

    // Send the input to the server (or API)
    // For now, we will just simulate a response
    simulateChatGPTResponse(input);
});

function simulateChatGPTResponse(userInput) {
    const response = "You asked: " + userInput + " (ChatGPT's response will appear here!)";
    document.getElementById('chatResponse').innerText = response;
}
