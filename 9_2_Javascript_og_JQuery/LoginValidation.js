var user = "Anna";
var pass = "1234";


$("#loginKnap").click(function(e){
    e.preventDefault();

    var username = $('#username').val();
    var password = $('#password').val();

    if (user === username && pass == password) {

        $('#index').hide();
        $('#admin').show();

    }
    else {
        alert("Invalid login credentials");
    }
});