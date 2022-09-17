player_1name=localStorage.getItem("Player 1 Name");
player_2name=localStorage.getItem("Player 2 Name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player_1name+" : ";
document.getElementById("player2_name").innerHTML=player_2name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player_2name;

function send()
    {
        number1 = document.getElementById("Word1").value; 
        number2 = document.getElementById("Word2").value; 
        actual_answer = parseInt(number1) * parseInt(number2);
        question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_number + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
        document.getElementById("Word1").value = "";
        document.getElementById("Word2").value = "";
    }

    question_turn= "player1";
    answer_turn= "player2";

   