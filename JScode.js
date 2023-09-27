let value=[{q:"In which ocean 'Bermuda Triangle' region is located?", o:["Pacific","Atlantic","Artic","Indian"], s:1},{q:"Total number of Oceans in the world is?", o:["7","3","5","12"], s:2},{q:"Which one is the largest tropical rainforest in the world?", o:["Bosawas","Southeast Asian Rain Forest","Amazon","Daintree Rain Forest"], s:2},{q:"The World's longest straight road without any corners is located in?", o:["USA","Saudi Arabia","Australia","China"], s:1},{q:"In which of the country, white elephant is found?", o:["Thailand","India","Srilanka","Malaysia"], s:0},{q:"Which continent has highest number of countries?", o:["Europe","Asia","North America","Africa"], s:3},{q:"Which country is also known as Land of rising sun?", o:["NewZeland","Fizi","China","Japan"], s:3}];
let score=0;
let index=0;
let temp=undefined;
const question=document.getElementById('question');
const option1=document.getElementById('0');
const option2=document.getElementById('1');
const option3=document.getElementById('2');
const option4=document.getElementById('3');
let submit=document.getElementById('btn');
const loadQuestion=()=>{
    const questionList=value[index];
    question.innerHTML=questionList.q;
    option1.innerHTML=questionList.o[0];
    option2.innerHTML=questionList.o[1];
    option3.innerHTML=questionList.o[2];
    option4.innerHTML=questionList.o[3];
}
loadQuestion();
option1.addEventListener('click',(e)=>{
    temp=e.target.id;
    option1.style.backgroundColor="rgb(125, 250, 120)";
    option2.style.backgroundColor="white";
    option3.style.backgroundColor="white";
    option4.style.backgroundColor="white";
})
option2.addEventListener('click',(e)=>{
    temp=e.target.id;
    option2.style.backgroundColor="rgb(125, 250, 120)";
    option1.style.backgroundColor="white";
    option3.style.backgroundColor="white";
    option4.style.backgroundColor="white";
})
option3.addEventListener('click',(e)=>{
    temp=e.target.id;
    option3.style.backgroundColor="rgb(125, 250, 120)";
    option2.style.backgroundColor="white";
    option1.style.backgroundColor="white";
    option4.style.backgroundColor="white";
})
option4.addEventListener('click',(e)=>{
    temp=e.target.id;
    option4.style.backgroundColor="rgb(125, 250, 120)";
    option2.style.backgroundColor="white";
    option3.style.backgroundColor="white";
    option1.style.backgroundColor="white";
})
function loadscore(){
    const scores=document.getElementById("score");
    scores.textContent = `You scored ${score} out of ${value.length}`;
}

function nextquestion(){
    if(index<(value.length-1)){
        index++;
        loadQuestion();
    }
    else{
        document.getElementById("question").remove()
        document.getElementById("option").remove()
        document.getElementById("btn").remove()
        loadscore();
    }
}
function checkanswer(){
    console.log(temp+"  1");
    console.log(score+"  2");
    console.log(value[index].s+"   3");
    option1.style.backgroundColor="white";
    option2.style.backgroundColor="white";
    option3.style.backgroundColor="white";
    option4.style.backgroundColor="white";
    if(temp==value[index].s){
        score++;
        console.log("correct");
        nextquestion();
        temp=undefined;
    }
    else{
        console.log("Not correct");
        nextquestion();
        temp=undefined;
    }
}