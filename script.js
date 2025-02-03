function texttoaudio(){

    let msg=document.querySelector(".text").value;
    if(msg!=""){
    let speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.text=msg;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    speechSynthesis.speak(speech);
    }
    else{
        alert("Please Write Something...");
    }
}