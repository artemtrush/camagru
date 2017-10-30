function getXMLHttpRequest()
{
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();
    return new ActiveXObject('Microsoft.XMLHTTP');
}

function switch_sign(sign_btn, switch_btn, menu)
{
    if (sign_mode === false) //if sign in now
    {
        sign_btn.value = 'Sign Up';
        switch_btn.value = 'I already have an account';
        menu.style = "visibility: visible;";
        sign_mode = true;
    }
    else //if sign up now
    {
        sign_btn.value = 'Sign In';
        switch_btn.value = 'I don\'t have an account yet';
        menu.style = "visibility: hidden;";
        sign_mode = false;
    }
}

function checkLogin(input, status)
{
    var string = input.value;
    if (string.match("^[a-z0-9_-]{3,15}$"))
    {
        var request = getXMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (request.readyState == 4)
            {
                console.log(request.responseText);
                /*
                if (request.responseText)
                {
                    status.innerHTML = '&#10004;';
                    status.style = 'color: ' + pos_color;
                }
                else
                {
                    status.innerHTML = '&#10008; User exists';
                    status.style = 'color: ' + neg_color;
                }
                */
            }
        }
        request.open('POST', '/template/js/autentification.php', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('username=' + string);
    }
    else
    {
        status.innerHTML = '&#10008; Username must be 3 to 15 characters long.';
        status.style = 'color: ' + neg_color;
    }
}

function isEmpty(input, status)
{
    var string = input.value;
    if (string === "")
    {
        status.innerHTML = '&#10008; This field must be filled';
        status.style = 'color: ' + neg_color;
    }
}
