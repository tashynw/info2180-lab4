window.onload = function() {
    $("#search-button").click(function(){
        let userInput = document.getElementById("search-text").value;
        //sanitize
        userInput = userInput.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
        userInput = userInput.trim();

        //send query
        const resultDiv = document.getElementById("result");
        return fetch(`superheroes.php?query=${userInput}`)
            .then((response)=>response.text())
            .then((data)=>resultDiv.innerHTML = data)
    })
}