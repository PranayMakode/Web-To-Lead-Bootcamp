let capthchachecked = false;
function beforeSubmit(event){
    if(capthchachecked){
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");
        console.log("inpute Date: -> ", inputDate.value);//string --> date(en_IN)

        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
    }else{
        alert("Please check the Re-Captcha box to submit the lead");
        // To stop form submission
        event.preventDefault();
    }
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    } 
} 
setInterval(timestamp, 500); 

function capthchasuccess(){
    capthchachecked = true;
}