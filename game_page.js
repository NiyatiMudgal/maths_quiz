
function addUser(){
    pr1= document.getElementById("player1_name_input").value;
    pr2= document.getElementById("player2_name_input").value;
    localStorage.setItem("mudgal", pr1);
    localStorage.setItem("sharma", pr2);
    window.location = "game_page.html";
}
mudgal= localStorage.getItem("mudgal");
sharma= localStorage.getItem("sharma");
score_player1 = 0;
score_player2 = 0;
document.getElementById("player1_name").innerHTML= mudgal + " : " ;
document.getElementById("player2_name").innerHTML= sharma + " : " ;
document.getElementById("player1_score").innerHTML= score_player1;
document.getElementById("player2_score").innerHTML= score_player2;
document.getElementById("player_question").innerHTML= " QUESTION TURN" + " :  " + mudgal ;
document.getElementById("player_answer").innerHTML= " ANSWER TURN" + " :  " + sharma ;

function send(){
number1 = document.getElementById("no1").value;
number2 = document.getElementById("no2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check() '>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("no1").value = "";
document.getElementById("no2").value = "";
question_turn = "player1";
answer_turn = "player2";
}
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
           score_player1 = score_player1 +1;
            document.getElementById("player1_score").innerHTML = score_player1;
        }
        else
        {
            score_player2 = score_player2+1;
            document.getElementById("player2_score").innerHTML = score_player2;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + sharma;        
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + mudgal ;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + sharma;        
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + mudgal;
    }
}
