 var btn = document.querySelector("#btn") 
  var inputNum = document.querySelector("#num")

    function tabuada() {
        var res = document.querySelector(".res")
        var numTabuada = inputNum.value
        res.innerHTML = ""

        for(var inicio = 1; inicio <= 10; inicio++){
         res.innerHTML += `<p>${numTabuada} x ${inicio} = ${numTabuada * inicio}</p>`
    }
}

    btn.addEventListener("click", tabuada)