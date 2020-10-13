
//INFORMACION A SER CARGADA EN LA PAGINA
let milanesa = [
	{
		nombre:"Completa con papas fritas",
		precio: "$390",
		tipo:"Compartir"
	},
	{
		nombre: "Completa con papas fritas a caballo",
		precio: "$430",
		tipo:"Compartir",
	},
	{
		nombre:"Con papas fritas",
		precio:"$220" ,
		tipo: "Individual",
	},
	{
		nombre: "Con papas fritas a caballo",
		precio: "$240",
		tipo: "Individual",
	},
	{
		nombre:"Completa con papas fritas",
		precio: "$270",
		tipo:"Individual",
	},
	{
		nombre:"Completa con papas fritas a caballo",
		precio: "$290",
		tipo:"Individual",
	}

];


let empanadas = [
	{
		nombre:"Carne",
		precio: "$40",
		promocion:"-"
	},
	{
		nombre: "Carne cortada a cuchillo",
		precio: "$40",
		promocion:"-",
	},
	{
		nombre:"Carne picante",
		precio:"$40" ,
		promocion: "-",
	},
	{
		nombre: "Pollo",
		precio: "$40",
		promocion: "-",
	},
	{
		nombre:"Jamon y Queso",
		precio: "$40",
		promocion:"-",
	},
	{
		nombre:"Verdura",
		precio: "$40",
		promocion:"-",
	},
	{
		nombre:"Humita",
		precio: "$40",
		promocion:"-",
	}
	,
	{
		nombre:"Caprese",
		precio: "$40",
		promocion:"-",
	}
	,
	{
		nombre:"Fatay",
		precio: "$50",
		promocion:"-",
	}

];


let pastas = [
	{
		nombre:"Sorrentinos",
		precio: "$220",
		promocion:"-"
	},
	{
		nombre:"Ravioles",
		precio: "$220",
		promocion:"-"
	},
	{
		nombre:"Canelones",
		precio: "$220",
		promocion:"-"
	},
	{
		nombre:"Ñoquis de Papa",
		precio: "$220",
		promocion:"-"
	},
];


let pizzas = [
	{
		nombre:"Muzzarella",
		precio: "$200",
		promocion:"-"
	},
	{
		nombre:"Especial",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Calabresa",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Verdeo",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Fugazzetta",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Napolitana",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Provenzal",
		precio: "$240",
		promocion:"-"
	},
	{
		nombre:"Palmitos",
		precio: "$270",
		promocion:"-"
	},
	{
		nombre:"Choclo con salsa blanca",
		precio: "$270",
		promocion:"-"
	},
	{
		nombre:"Panceta y Huevo",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Americana",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Verdura",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Cheddar",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Halem 1",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Halem 2",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Jamon y Anana",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Primavera",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Roquefort",
		precio: "$290",
		promocion:"-"
	},
	{
		nombre:"Anchoas y Muzarella",
		precio: "$350",
		promocion:"-"
	},
	{
		nombre:"Champiñones y Jamon",
		precio: "$350",
		promocion:"-"
	}
	
];


//CARGA DE LOS DATOS
/*
	SE CARGAN LAS MILANESAS
*/

var tbodymilanesa = document.getElementById("milanesa");
for (let i = 0; i < milanesa.length; i++) {
    let tr = document.createElement("tr");
    

    let nombre = document.createElement("td");
    nombre.className="td-line";
    let cnombre = document.createTextNode(milanesa[i].nombre);
    nombre.appendChild(cnombre);

    
    let precio = document.createElement("td");
    precio.className="td-line";
    let cprecio = document.createTextNode(milanesa[i].precio);
    precio.appendChild(cprecio);

    let tipo = document.createElement("td");
    let ctipo = document.createTextNode(milanesa[i].tipo);
    tipo.appendChild(ctipo);

    
    tr.appendChild(nombre);
    tr.appendChild(precio);
    tr.appendChild(tipo);

    tbodymilanesa.appendChild(tr);
    
}


/*
	SE CARGAN LAS EMPANADAS
*/


var tbodyempanada = document.getElementById("empanadas");
for (let i = 0; i < empanadas.length; i++) {
    let tr = document.createElement("tr");
    

    let nombre = document.createElement("td");
    nombre.className="td-line";
    let cnombre = document.createTextNode(empanadas[i].nombre);
    nombre.appendChild(cnombre);

    
    let precio = document.createElement("td");
    precio.className="td-line";
    let cprecio = document.createTextNode(empanadas[i].precio);
    precio.appendChild(cprecio);

    let promocion = document.createElement("td");
   	promocion.className="td-line";
   	let cpromocion = document.createTextNode(empanadas[i].promocion);
    promocion.appendChild(cpromocion);

    
    tr.appendChild(nombre);
    tr.appendChild(precio);
    tr.appendChild(promocion);

    tbodyempanada.appendChild(tr);
    
}


/*
	SE CARGAN LAS PASTAS
*/



var tbodypasta = document.getElementById("pastas");
for (let i = 0; i < pastas.length; i++) {
    let tr = document.createElement("tr");
    

    let nombre = document.createElement("td");
    nombre.className="td-line";
    let cnombre = document.createTextNode(pastas[i].nombre);
    nombre.appendChild(cnombre);

    
    let precio = document.createElement("td");
    precio.className="td-line";
    let cprecio = document.createTextNode(pastas[i].precio);
    precio.appendChild(cprecio);

    let promocion = document.createElement("td");
   	promocion.className="td-line";
   	let cpromocion = document.createTextNode(pastas[i].promocion);
    promocion.appendChild(cpromocion);

    
    tr.appendChild(nombre);
    tr.appendChild(precio);
    tr.appendChild(promocion);

    tbodypasta.appendChild(tr);
    
}



/*
	SE CARGAN LAS PIZZAS
*/

var tbodypizza = document.getElementById("pizza");
for (let i = 0; i < pizzas.length; i++) {
    let tr = document.createElement("tr");
    

    let nombre = document.createElement("td");
    nombre.className="td-line";
    let cnombre = document.createTextNode(pizzas[i].nombre);
    nombre.appendChild(cnombre);

    
    let precio = document.createElement("td");
    precio.className="td-line";
    let cprecio = document.createTextNode(pizzas[i].precio);
    precio.appendChild(cprecio);

    let promocion = document.createElement("td");
   	promocion.className="td-line";
   	let cpromocion = document.createTextNode(pizzas[i].promocion);
    promocion.appendChild(cpromocion);

    
    tr.appendChild(nombre);
    tr.appendChild(precio);
    tr.appendChild(promocion);

    tbodypizza.appendChild(tr);
    
}