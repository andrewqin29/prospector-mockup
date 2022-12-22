let text_index = 0;
let char_index = 0;
let changing_texts = ["currently working on Issue 6", "brainstorming articles", "conducting interviews", "visiting the vending machine"];
let changing = document.getElementById("changing-iam");
changing.innerText = '';
function add_char() {
    let current_text = changing_texts[text_index];
    if (char_index === current_text.length) {
        char_index = 0;
        text_index++;
        changing.innerText = '';
        if (text_index === changing_texts.length) {
            text_index = 0;
        }
        current_text = changing_texts[text_index];
    }
    let space_behind = false;
    if (char_index !== 0) {
        if (current_text[char_index-1] === ' ') {
            space_behind = true;
            changing.innerText += ' '+current_text[char_index];
        }
    }
    if (!space_behind) {
        changing.innerText += current_text[char_index];
    }
    char_index++;
}
setInterval(function() {add_char()}, 250);

document.getElementById("prints").onmouseenter = function() {
    document.getElementById("print-desc").style.opacity = "0";
    document.getElementById("print-time").style.opacity = "0";
}

document.getElementById("prints").onmouseleave = function() {
    document.getElementById("print-desc").style.opacity = "1";
    document.getElementById("print-time").style.opacity = "1";
  }



