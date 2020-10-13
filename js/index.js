let header = 
		`			
			<header class="col-lg-12 peach-gradient  text-center p-4">
			<h1 class="">Pizzeria Halem <i id="animation-rotate"class="fas fa-pizza-slice"></i></h1>	
			</header>
			<nav class="navbar navbar-expand-lg navbar-dark blue-grey  text-center">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse " id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto ">
						<li class="nav-item active">
							<a class="nav-link "  href="home.html">Inicio <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="products.html">Productos</a>
						</li>

						<li class="nav-item">
							<a class="nav-link " href="maps.html">Sucursales</a>
						</li>
						<li class="nav-item">
							<a class="nav-link " href="about.html">Acerca de nosotros</a>
						</li>
						
					</ul>
				</div>
			</nav>
		`

document.getElementById("header").innerHTML = header;

let footer = ` 
				<i> &copy; Copyright 2020 - Halem</i>
				<div>
					<p>Created by: Juanfa</p>
					Contact me ! 
					<a href="https://es-la.facebook.com/juanfa.manninosanchez" target="_blank"><i class="fab fa-facebook"></i></a>
					<a href="https://twitter.com/juanfa_tripero" target="_blank"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/elcaballerogris/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a>
					<a href="https://github.com/Juanfa2" target="_blank"><i class="fab fa-github-square"></i></a>
					<a href="mailto:juanfranciso11@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a>
				</div>
			`
document.getElementById("footer").innerHTML = footer;			

