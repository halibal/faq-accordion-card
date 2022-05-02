const faqAnswersArray = document.getElementsByClassName('faqAnswers');
const faqQuestionsArray = document.getElementsByClassName('faqQuestions');
const arrowArray = document.getElementsByClassName('arrow');
const illustrationBox = document.querySelector(".illustrationBox")

function myFunction(e) {

    for (let i=0; i < faqAnswersArray.length; i++) {
        
        if (i === e && (faqAnswersArray[i].style.display == "initial")) {
            faqAnswersArray[e].style.display = "none";
            arrowArray[i].style.transform = "rotateX(0deg)";
            faqQuestionsArray[i].style.color = "var(--txt-dgblue)";
            illustrationBox.style.left = "-9.3%";
        }
        else if (i === e) {
            faqQuestionsArray[i].style.color = "var(--clr-vdblue)";
            arrowArray[i].style.transform = "rotateX(180deg)";
            faqAnswersArray[i].style.display = "initial";
            illustrationBox.style.left = "-13%";
        } else {
            faqAnswersArray[i].style.display = "none";
            faqQuestionsArray[i].style.color = "var(--txt-dgblue)"
        }
    }
}

// for (let i=0; i<faqQuestionsArray.length;i++) {
// faqQuestionsArray[i].addEventListener('mouseenter', () => {
//     faqQuestionsArray[i].style.color = "var(--clr-orange)";
// })

// faqQuestionsArray[i].addEventListener('mouseleave', () => {
//     faqQuestionsArray[i].style.color = "var(--txt-dgblue)";
// })
// }