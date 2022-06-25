
//This is an array , (array of object)
const quizQuestion =

    [
        {
            ques: "What is the full form of HTML?",
            a: "Hello to my land",
            b: "Hyper text markup language",
            c: "Hyper text makeup language",
            d: "None of these",
            ans: "ans2"
        },
        {
            ques: "What is the full form of RAM?",
            a: "Random Access Memory",
            b: "Ramdom Archetechture management",
            c: "Right Access Memery",
            d : "Real Army Motivation",
            ans: "ans1"
        },
        {
            ques: "What is Python ?",
            a: "A markup language",
            b: "Compiler",
            c: "Programming language",
            d: "scripting language",
            ans: "ans3"
        },
        {
            ques: "Who is Salman khan ?",
            a: "Prime minister",
            b: "Acter",
            c: "Teacher",
            d: "writter",
            ans: "ans2"
        },
        {
            ques: "Full form of CSS ?",
            a: "Current style sheet",
            b: "Culteral style sheet",
            c: "Cool source sheet",
            d: "Cascading style sheet",
            ans: "ans4"
        }
    ]

const question = document.querySelector("h2")
const options = document.getElementsByTagName("label")
const ans = document.get
const btn = document.getElementById("btn")
const showScore = document.getElementById("showScore")
const answer = document.querySelectorAll(".answer")





var count = 0;
score = 0;

function showResult(){
    let html = ` <h3> You scored ${window.score}/${5} ✌ </h3>
    <button class="btn" onclick="location.reload()" > Play Again </button> `
    showScore.innerHTML = html;
    showScore.classList.remove("showArea");

}


const loadQuestion = (count)=>{
    if(count === 5){
        showResult();
    }
    else{

        question.textContent = quizQuestion[count].ques;
        options[0].textContent = quizQuestion[count].a;
        options[1].textContent = quizQuestion[count].b;
        options[2].textContent = quizQuestion[count].c;
        options[3].textContent = quizQuestion[count].d;
    }
 

}


loadQuestion(count)


function addScore(userAns){
    
    if (userAns == quizQuestion[count].ans) {
        window.score++;
        
    }


}
const deselectAll = ()=>{
    answer.forEach(function(ele){
        ele.checked = false;
    })
}

btn.addEventListener('click',function(){
    if(window.count<5){
        
        answer.forEach(function(element){
            if (element.checked) {
                userAns = element.id;
                // console.log(userAns)
                addScore(userAns);
    
                
            }
            
        })
        window.count++;
        loadQuestion(count);
        deselectAll();
    }
})

