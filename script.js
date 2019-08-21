function checkFirstName(){
    var firstNameLenght = $('#firstName').val().length;
    if (firstNameLenght>=6 && firstNameLenght<=15){
        $('#firstNameError').text('');
    }else{
        $('#firstNameError').text('First Name should be between 6 and 15 characters.');
    }
}
$('#firstName').blur(function () {
    checkFirstName();
});

$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName(){
    var lastNameLenght = $('#lastName').val().length;
    if (lastNameLenght>=6 && lastNameLenght<=15){
        $('#lastNameError').text('');
    }else{
        $('#lastNameError').text('Last Name should be between 6 and 15 characters.');
    }
}

$('#lastName').blur(function () {
    checkLastName();
});

$('#lastName').keyup(function () {
    checkLastName();
});

function checkEmailAddress(){
    var pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //  RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i);  BITM COURSE
    if (pattern.test($('#emailAddress').val())){
        $('#emailAddressError').text('');
    }else{
        $('#emailAddressError').text('Email Address is Invalid');
    }
}
$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});
function checkPassword(){
    var passwordLength = $('#password').val().length;
    if (passwordLength>=8 && passwordLength<=32){
        $('#passwordError').text('');
    }else{
        $('#passwordError').text('Password lenght must be between 8 and 32 characters.')
    }
}
$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();
});
function checkConfirmPassword(){
    var passwordValue = $('#password').val();
    var confirmPasswordValue = $('#confirmPassword').val();
    if (passwordValue == confirmPasswordValue){
        $('#confirmPasswordError').text('');
    }else{
        $('#confirmPasswordError').text('Password not matched.')
    }
}
$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});

$('#registrationForm').submit(function () {
    return true;
});