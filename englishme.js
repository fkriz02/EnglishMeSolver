async function LISTENING_SINGLE() {
    while (ex.getNumberAll() != ex.getNumberCorrect()) {
        document.getElementsByClassName("answer")[0].value = ex.getCurrentWord().english;
        document.getElementById("answer_continue").click();
        document.getElementById("response_continue").click();
        await new Promise(r => setTimeout(r, 500));
    }
}

async function RYCHLO_OBRAZKY() {
    while (ex.getNumberAll() != ex.getNumberCorrect()) {
        document.querySelectorAll('[data-id="' + ex.getCurrentWord().id + '"]')[0].click();
        document.getElementById("continue").click();
        await new Promise(r => setTimeout(r, 500));
    }
}

async function TEST() {
    while (ex.getNumberAll() != ex.getNumberCorrect()) {
        ex.getCurrentQuestion().choices.forEach(element => {
            if (element.correct == 1) {
                document.querySelectorAll('[data-id="' + element.id + '"]')[0].click();
        }});
        document.getElementById("review").click();
        document.getElementById("response_continue").click();
        await new Promise(r => setTimeout(r, 500));
    }
}

async function TRANSLATE() {
    while(ex.getNumberAll() != ex.getNumberCorrect()) {
        document.getElementById("answer_0").value = ex.getCurrentWord().english;
        document.getElementById("answer_continue").click();
        document.getElementById("response_continue").click();
        await new Promise(r => setTimeout(r, 500));
    }
}

async function FILL_GAPS() {
    var sentences = document.getElementsByClassName("sentence");
    var buttons = document.getElementsByClassName("btn review btn-primary btn-large");
    for(var i = 0; i < sentences.length; i++) {
        var elements = sentences[i].querySelectorAll('.hidden, .sentence-textbox');
        var current;
        for(var j = 1;j < elements.length;j++) {
            if(elements[j].className == "sentence-textbox")
                current = j;
            else
                elements[current].value += elements[j].innerHTML + " ";
        }
        buttons[i].click();
        document.getElementById("continue").click();
        await new Promise(r => setTimeout(r, 500));
    }
}