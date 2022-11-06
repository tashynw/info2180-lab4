window.onload = function() {
    $("#search-button").click(function(){
        $.ajax({
            contentType: 'application/json',
            dataType: 'json',
            url: 'http://localhost/info2180-lab4/superheroes.php',
            method: 'GET',
            crossDom,
            success: function (data) {
                alert(data);
            },
            error: function () {
                console.log("Request Failed");
            }
        });
    })
}