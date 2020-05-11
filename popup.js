/*document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.onClick
    })*/
/*document.addEventListener('DOMContentLoaded', function() {
    var btn_RYCHLO_OBRAZKY = document.getElementById('checkPage');
    btn_RYCHLO_OBRAZKY.addEventListener('click', function() {
      
        while (ex.getNumberAll() != ex.getNumberCorrect()) {
            document.querySelectorAll('[data-id="' + ex.getCurrentWord().id + '"]')[0].click();
            document.getElementById("continue").click();
            await new Promise(r => setTimeout(r, 500));
        }
      });
    })*/
document.addEventListener('DOMContentLoaded', function() {
    var btn_TEST = document.getElementById('btn_TEST');
    btn_TEST.addEventListener('click', async function() {
          
        while (ex.getNumberAll() != ex.getNumberCorrect()) {
            ex.getCurrentQuestion().choices.forEach(element => {
                if (element.correct == 1) {
                    document.querySelectorAll('[data-id="' + element.id + '"]')[0].click();
            }});
            document.getElementById("review").click();
            document.getElementById("response_continue").click();
            await new Promise(r => setTimeout(r, 500));
        }
      });
    })