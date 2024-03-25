	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de preguntar: " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de responder: " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    
	row =  question_word + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;

document.getElementById("word").value = "";
}

/*Jugador 1 turno de preguntar, jugador 2 turno de responder */
question_turn = "player_1";
answer_turn = "player_2";


function check()
{
	/*Commpletar el Id "input_check_box" de la entrada de la respuesta */
	get_answer = document.getElementById("input_check_box").value;
	/*convertir a minúsculas */
	answer = get_answer.toLowerCase();
	/*Imprimir en consola */
	console.log("answer in lower case - " + answer);
	/*Si la respuesta es igual a la palabra */
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			/*Sumar 1 al score del jugador 1 */
			player1_score = player1_score  + 1;
			/*Actualizar score del jugador 1*/
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		/*Sino*/
		else
		{
			/*Sumar 1 al score del jugador 2*/
			player2_score = player2_score  + 1
			/*Actualizar el score del jugador 2 */
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	/*Si el turno de preguntar lo tenía el jugador 1*/ 
	if(question_turn == "player1")
	{
		/* el turno de la pregunta será para el jugador 2*/ 
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de preguntar: " + player2_name ;
	}
	/*Si no...*/
	else
	{
		/*pregunta el jugador 1*/
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de preguntar: " + player1_name ;
	}
    /*Si el turno de la respuesta lo tenía el jugador 1*/
  if(answer_turn == "player1")
	{
		/*el turno de responder será para el jugador 2*/
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de responder: " + player2_name ;
	}
	/*Si no...*/
	else
	{
		/*responde el jugador 1*/
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de responder: " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

