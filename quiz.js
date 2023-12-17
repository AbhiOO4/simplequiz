const quest=["Which animal is known as the Ship of the Desert?","How many letters are there in the English alphabet?","Name the National fruit of India? "];
const options=["camel","horse","cat","mouse","24","28","26","25","orange","pineapple","apple","mango"];
const crctAns=["camel","26","mango"];

var question=document.getElementById("question");
var option=document.getElementById("option");

var index=0;
var score=0;

function nextQuestion()
{
    if (index>0)
    {
        checkAnswer();
    }
    option.innerHTML="";
    if (index < quest.length)
    {
        question.innerHTML=quest[index];
        for (let i = index*4; i < ((index*4)+4); i++) 
        {
            option.innerHTML+="<input type='radio' name='option' value='"+options[i]+"'>"+options[i]+"<br>";
        }
        
        index++;
    }
    else
    {
        question.innerHTML="<h1>YOUR SCORE IS : <h1>";
        option.innerHTML="<h1>"+score+"</h1>";
    }
}

function checkAnswer()
{
    //console.log(score);
    var ele = document.getElementsByName('option');
    for (i = 0; i < ele.length; i++) 
    {
        if (ele[i].checked)
        {
            console.log(ele[i].value)
            if (ele[i].value==crctAns[index-1])
                {
                    score=score+1;
                }
        }
    }
    
}