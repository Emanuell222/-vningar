```javascript
const input = document.querySelector("#uppgift");
const knapp = document.querySelector("#laggTill");
const lista = document.querySelector("#lista");

knapp.addEventListener("click", function() {

    if (input.value !== "") {

        const nyUppgift = document.createElement("li");

        nyUppgift.innerHTML = input.value;

        lista.appendChild(nyUppgift);

        input.value = "";
    }

});
```

