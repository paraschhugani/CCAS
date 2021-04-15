function disp ()
{
    if (document.getElementById("1exp").style.display == "block")
    {
        document.getElementById("1exp").style.display = "none";
    }
    else
    {
        document.getElementById("1exp").style.display = "block";
    }
}

function change_email ()
{
    if (document.getElementById("email_change").style.display == "block")
    {
        document.getElementById("email_change").style.display = "none";
        document.getElementById("cm").className = "content-main";
    }
    else
    {
        document.getElementById("email_change").style.display = "block";
        document.getElementById("cm").className += " blur";
    }

}

function change_phone ()
{
    if (document.getElementById("mobile_change").style.display == "block")
    {
        document.getElementById("mobile_change").style.display = "none";
        document.getElementById("cm").className = "content-main";
    }
    else
    {
        document.getElementById("mobile_change").style.display = "block";
        document.getElementById("cm").className += " blur";
    }
}

function change_address ()
{
    if (document.getElementById("address_change").style.display == "block")
    {
        document.getElementById("address_change").style.display = "none";
        document.getElementById("cm").className = "content-main";
    }
    else
    {
        document.getElementById("address_change").style.display = "block";
        document.getElementById("cm").className += " blur";
    }
}