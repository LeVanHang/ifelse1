let userName = prompt("Who's there", '');
if (userName == 'Admin'){
    let pass = prompt('pass please','')
    if(pass == 'TheMaster'){
        alert('Welcome!');
    } else if(pass == null){
        alert('Canceled.');
    } else{
        alert('Wrong pass')
    }
} else if (userName == null){
    alert('Canceled')
} else {
    alert("I don't know you");
}
