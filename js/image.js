var image = [
	{
		id:1,
		url:"imagenes/pizza.jpg",
	},
	{
		id:2,
		url:"imagenes/empanadas.jpg",
	},

	{
		id:3,
		url:"imagenes/noqui.jpg",
	}
]

// Se carga el carrousel

var carrousel = document.getElementById("carrousel");

let div = document.createElement("div");
div.className="carousel-item active";

let img = document.createElement("img");
img.className="d-block w-100";
img.style.height="300px";
img.src=image[0].url;

div.appendChild(img);
carrousel.appendChild(div);


for (let i = 1; i < image.length; i++) {

    let div = document.createElement("div");
	div.className="carousel-item";

	let img = document.createElement("img");
	img.className="d-block w-100";
	img.style.height="300px";
	img.src=image[i].url;

	div.appendChild(img);
	carrousel.appendChild(div);
    
}
