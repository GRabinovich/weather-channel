let botonEnviar = document.querySelector("button")
let input = document.querySelector("input")

function cargarCiudad () {
    let ciudad = input.value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric", function(data) {
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").textContent = Math.round(data.main.temp)
        document.querySelector("#grados").innerHTML = "<sup>°C</sup>"
        document.querySelector("#wicon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
        document.querySelector("#descripcion").textContent = data.weather[0].description
    })
    .fail(function () {
        alert("Error. Debe ingresar una ciudad existente.")
    });
}

botonEnviar.addEventListener("click", function(){
    if (input.value === "") {
        alert("Porfavor, ingrese una ciudad.")
    } else {
        cargarCiudad()
        input.value = ""
    }
})

window.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        if (input.value === "") {
            alert("Porfavor, ingrese una ciudad.")
        } else {
            cargarCiudad()
            input.value = ""
        }
    } 
})