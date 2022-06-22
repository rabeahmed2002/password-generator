isClicked=false

function generate() {
    if (isCLicked=true) {
        passwordGenerator()
    }
}

function passwordGenerator() {
    let passwordEl=document.getElementById("pass-el")
    let chars=["a", "b","c","d","?","e","f","g","h","i","?","j","k","l","m","n","o","p","q","?","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","_"]
    let password=[]
    let passwordLen=32
    
    for(let i=0; i<passwordLen; i++) {
        let randomNo=Math.floor(Math.random()*chars.length)
        password.push(chars[randomNo])
    }
    
    ans=password.join("")
    passwordEl.textContent="Password is: "+ ans + "    ";
}

function copyPass() {
    
}