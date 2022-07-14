let message;
if(login == 'Employee'){
    message = 'Halo';
} else if(login == 'Director'){
    message = 'Greeting';
} else if (login == ''){
    message = 'No login';
} else if (login == ''){
    message = ''
}

let login = prompt('Enter:');
let mesage = (login == 'Employee')?
    'helo' :
    (login == 'Director')?
        'Greeting' :
        (login == '')?
            'No login':
            '';
alert(message);