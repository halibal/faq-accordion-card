const faqAnswersArray = document.getElementsByClassName('faqAnswers');
const faqQuestionsArray = document.getElementsByClassName('faqQuestions');
const arrowArray = document.getElementsByClassName('arrow');


function myFunction(e) {

    for (let i=0; i < faqAnswersArray.length; i++) {
        
        if (i === e && (faqAnswersArray[i].style.display == "initial")) {
            faqAnswersArray[e].style.display = "none";
            arrowArray[i].style.transform = "rotateX(0deg)";
            faqQuestionsArray[i].style.color = "var(--txt-dgblue)";
        }
        
        else if (i === e) {
            console.log(faqQuestionsArray);
            faqQuestionsArray[i].style.color = "var(--clr-vdblue)";
            arrowArray[i].style.transform = "rotateX(180deg)";
            faqAnswersArray[i].style.display = "initial";
        } else {
            faqAnswersArray[i].style.display = "none";
            faqQuestionsArray[i].style.color = "var(--txt-dgblue)"
        }
    }
}