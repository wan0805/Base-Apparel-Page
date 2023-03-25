const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const mensagem = document.querySelector("#message");
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


function messageSucess(text){
	mensagem.textContent = text;
	mensagem.classList.remove("error");
	mensagem.classList.add("sucess");
	input.classList.remove("input--error");
	input.value = "";


}

function messageError(text){
	mensagem.textContent = text;
	mensagem.classList.remove("sucess");
	mensagem.classList.add("error");
	input.classList.add("input--error")

}


form.addEventListener("submit" , (e)=>{
	e.preventDefault();
})

function verificarEmail(){
	if (regexEmail.test(input.value)){
		messageSucess("Email successfully sent!!!");
	}
	else if(input.value == ""){
		messageError("field cannot be empty!");
	}
	else{
		messageError("Please provide a valid email");
	}
}


button.addEventListener("click", verificarEmail);