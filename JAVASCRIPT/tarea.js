console.log("JS07");

/*  */
let btn = document.getElementById("recibir personas");
let url = `https://reqres.in/api/users?delay=3`;
let element = document.getElementById("users");

/*  */
btn.addEventListener("click", () => {

    if (localStorage.getItem("datos_dela_api") === null) {
        console.log("Fetching data from API");
        // ingresamos al fetch y devolvemos a json si no esta en memoria
            fetch(url)
            .then(response => response.json())
            .then((json) => {
            localStorage.setItem("datos_dela_api", JSON.stringify(json));
            personas();
            });
//se encontro la date en el local storage
    } else {
        console.log("Se encontro la data");
        personas();
    }
});

function personas() {
    json = JSON.parse(localStorage.getItem("datos_dela_api"));

    createHeader();
//ingresamos a la parte data de nuestro json
/* primera iteración
entramos a json/data/numero */


    for (let i = 0; i < json["data"].length; i++) {
        //console.log(data["data"][i]["first_name"] + " " + data["data"][i]["last_name"]);
        createRow(
            json["data"][i]["id"],
            json["data"][i]["first_name"],
            json["data"][i]["last_name"],
            json["data"][i]["email"],
            json["data"][i]["avatar"]
        );
    }
}

/* aqui usamos la funcion o metodo appendChild que 
Se utiliza para crear un nuevo elemento con algo de texto y 
luego crear primero el texto como el nodo de texto y luego agregarlo al elemento, 
luego agregar el elemento al documento. */

// Create header
function createHeader() {
    // cabezal
    let thead = document.createElement("thead");

    // crea columnas
    let tr = document.createElement("tr");

    // crea las celdas
    let th = document.createElement("th");

    //cuerpo
    
    th = document.createElement("th");
    th.setAttribute("class","col-lg border border-warning border-5")
    th.innerHTML = "Numero";
    tr.appendChild(th);

    th = document.createElement("th");
    th.setAttribute("class","col-md border border-warning border-5")
    th.innerHTML = "Nombre";
    tr.appendChild(th);

    th = document.createElement("th");
    th.setAttribute("class","col-md border border-warning border-5")
    th.innerHTML = "Apellido";
    tr.appendChild(th);

    th = document.createElement("th");
    th.setAttribute("class","col-md border border-warning border-5")
    th.innerHTML = "Correo Electrónico";
    tr.appendChild(th);

    th = document.createElement("th");

    th.setAttribute("class","col-lg border border-warning border-5")
    th.innerHTML = "Foto";
    tr.appendChild(th);

    thead.appendChild(tr);
    element.appendChild(thead);

    // Cuerpo de la tabla
    let tbody = document.createElement("tbody");

    tbody.setAttribute("id", "users-table-body");

    element.appendChild(tbody);
}

function createRow(id, first_name, last_name, email, avatar) {
    // Row element
    let tr = document.createElement("tr");

    // Create cells
    let td = document.createElement("td");
    td.innerText = id;
    tr.appendChild(td);

  
    td = document.createElement("td");
    td.innerText = first_name;
    tr.appendChild(td);


    td = document.createElement("td");
    td.innerText = last_name;
    tr.appendChild(td);

   
    td = document.createElement("td");
    td.innerText = email;
    tr.appendChild(td);
    
    td = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src",avatar);
    /* con esto redondeamos esquinas de la img
    img.setAttribute("class", "rounded float-start");*/
    img.setAttribute("class", "rounded-circle"); 
    td.appendChild(img);
    tr.appendChild(td);

    document.getElementById("users-table-body").appendChild(tr);
}
