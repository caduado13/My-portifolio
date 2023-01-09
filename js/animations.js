function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 250;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}

function revealOp() {
    var revealsOp = document.querySelectorAll(".revealOp");
    for (var i = 0; i < revealsOp.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsOp[i].getBoundingClientRect().top;
        var elementVisible = 250;
        if (elementTop < windowHeight - elementVisible) {
            revealsOp[i].classList.add("showOp");
        } else {
            revealsOp[i].classList.remove("showOp");
        }
      }
}

function opacSkills() {
    var revealsOp = document.querySelectorAll(".opac");
    for (var i = 0; i < revealsOp.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsOp[i].getBoundingClientRect().top;
        var elementVisible = 250;
        if (elementTop < windowHeight - elementVisible) {
            revealsOp[i].classList.add("showOpac");
        } else {
            revealsOp[i].classList.remove("showOpac");
        }
      }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealOp); 
window.addEventListener("scroll", opacSkills); 