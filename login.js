const email = document.getElementById('user-email');
const password = document.getElementById('user-pass');
const loginBtn = document.getElementById('btn-outline');

loginBtn.addEventListener('click', function(){
    if(email.value == 'mehedi@gmail.com' && password.value == '1234'){
        alert('Successfully Logged in');
        window.location.href = 'banking.html'
    }

    else{
        alert('Wrong Access Information! Please insert correct email & password');
        email.value = '';
        password.value = '';
    }
});

