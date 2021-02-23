export function Validate(options){
    // email validate
// get the form 
    console.log(typeof options.form)
var formEl=document.querySelector(options.form),
isErr=document.querySelector(options.error),
isMatched=false,
emailRegExp=/^(\w+)\@(\w+)\.(\w+){2}$/ig ,
emailEl=formEl.querySelector(options.input),
submitBtnEl= formEl.querySelector(options.submit);

const CheckEmail=(value)=>{

if(value.match(emailRegExp)){
isMatched=true;
submitBtnEl.disabled=false;
submitBtnEl.classList.remove('onerror');
	formEl.classList.remove('onerror');
}else{
	isMatched=false;
	// isErr.innerHTML='Enter a Valid Email Address';
	// isErr.classList.add('active');
	formEl.classList.add('onerror');
	submitBtnEl.classList.add('onerror')
}
}


emailEl.addEventListener('input',async (event)=>{
let {value}=event.target;
await CheckEmail(value);
// checks if input matches
submitBtnEl.disabled=!isMatched;
submitBtnEl.innerHTML=`${isMatched ? "Get Started" : "<i class='fa fa-spinner fa-spin'/>"} `

})

// recheck form on submit
formEl.addEventListener('submit',async(event)=>{

// checks if input matches
await CheckEmail(emailEl.value)
submitBtnEl.disabled=!isMatched;
!isMatched && event.preventDefault()
submitBtnEl.innerHTML=`${isMatched ? "Get Started" : "<i class='fa fa-spinner fa-spin'/>"} `

})


}