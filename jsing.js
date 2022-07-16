function getlocation(a)
{
    var ele = document.querySelector('a');
    return getBoundingClientRect();
}
function pertu()
{
    var loc;
    var toppy = document.getElementById("persiat").offsetTop;
    var ha = setInterval(function()
        {
            loc = window.screenY;
            if(loc < toppy)
            {
                window.scrollTo(0,(window.screenY)+0.001);
            }
            else
            {
                clearInterval(ha);
            }
        }, 10);
}
function samus()
{
    var loc;
    var toppy = document.getElementById("persiat").offsetTop;
    var ha = setInterval(function()
        {
            loc = visualViewport.screenY;
            if(loc < toppy)
            {
                window.scrollTo(0,(window.screenY)+0.001);
            }
            else
            {
                clearInterval(ha);
            }
        }, 10);
}
function saully()
{
    document.getElementById("bettercallsaul").scrollIntoView();
}
function poles()
{
    document.getElementById("polskacow").scrollIntoView();
}
function goodbye()
{
    
    var ratty = document.getElementById("rat");
    var i ;
    if(window.getComputedStyle(ratty).getPropertyValue("opacity") == 0)
    {
        i = 0 ;
        var ha = setInterval(function()
        {
            if(i <= 1)
            {
                i += 0.01;
                ratty.style.opacity = i ;
            }
            else
            {
                clearInterval(ha);
            }
        }, 10);
    }
    else
    {
        i = 1 ;
        var ha = setInterval(function()
        {
            if(i >= 0)
            {
                i -= 0.01;
                ratty.style.opacity = i ;
            }
            else
            {
                clearInterval(ha);
            }
        }, 10);
    }
}