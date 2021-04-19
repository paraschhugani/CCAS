window.addEventListener('load', function () {
    
    var params = new URLSearchParams(location.search);
    var arr = params.getAll('n');
    
    if(arr.length == 1)
    {
        document.getElementById("n1").innerHTML = arr[0];
    }
    if(arr.length == 2)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
    }
    if(arr.length == 3)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
    }
    if(arr.length == 4)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
        document.getElementById("n4").innerHTML = arr[3];
    }
    if(arr.length == 5)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
        document.getElementById("n4").innerHTML = arr[3];
        document.getElementById("n5").innerHTML = arr[4];
    }
    if(arr.length == 6)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
        document.getElementById("n4").innerHTML = arr[3];
        document.getElementById("n5").innerHTML = arr[4];
        document.getElementById("n6").innerHTML = arr[5];
    }
    if(arr.length == 7)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
        document.getElementById("n4").innerHTML = arr[3];
        document.getElementById("n5").innerHTML = arr[4];
        document.getElementById("n6").innerHTML = arr[5];
        document.getElementById("n7").innerHTML = arr[6];
    }
    if(arr.length == 8)
    {
        document.getElementById("n1").innerHTML = arr[0];
        document.getElementById("n2").innerHTML = arr[1];
        document.getElementById("n3").innerHTML = arr[2];
        document.getElementById("n4").innerHTML = arr[3];
        document.getElementById("n5").innerHTML = arr[4];
        document.getElementById("n6").innerHTML = arr[5];
        document.getElementById("n7").innerHTML = arr[6];
        document.getElementById("n8").innerHTML = arr[7];
    }
});