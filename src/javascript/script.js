const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const message = document.querySelector("#message");
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


function messageSucess(text){
	message.textContent = text;
	message.classList.remove("error");
	message.classList.add("sucess");
	input.classList.remove("input--error");
	input.value = "";


}

function messageError(text){
	message.textContent = text;
	message.classList.remove("sucess");
	message.classList.add("error");
	input.classList.add("input--error")

}


form.addEventListener("submit" , (e)=>{
	e.preventDefault();
})

function doCheckEmail(){
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


button.addEventListener("click", doCheckEmail);
