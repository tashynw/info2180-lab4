window.onload = function() {
    $("#search-button").click(function(){
        fetch("superheroes.php")
            .then((response)=>response.text())
            .then((response)=>alert(response))
    })
}