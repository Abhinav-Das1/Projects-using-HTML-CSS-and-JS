const btn = document.getElementById("btn");
const result = document.getElementById("result");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("You can speak now");
};

recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    text = addPunctuation(text);

    /* Capitalize the first letter */
    text = text.charAt(0).toUpperCase() + text.slice(1);

    result.innerHTML = text;
};

function addPunctuation(text) {
    // Determine punctuation based on text analysis
    if (text.endsWith(" ")) {
        return text.trim() + ".";
    } 
    else {
        return text + ".";
    }
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(result);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    alert("Copied the text: " + result.innerText);
}
