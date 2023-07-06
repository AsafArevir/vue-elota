<template>
    <nav class="navbar navbar-expand-lg navBar">
        <div class="container-fluid">
            <router-link to="/main" class="navbar-brand"><img class="navLogo" src="../assets/img/imgPlantillas/logo1.png"
                    alt="" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav navColorLetras">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sitios naturales
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><a class="dropdown-item" href="#">Montañas</a></li>
                            <li><a class="dropdown-item" href="#">Planicies</a></li>
                            <li><a class="dropdown-item" href="#">Costas</a></li>
                            <li>
                                <a class="dropdown-item" href="#">Lagos, Lagunas y esteros</a>
                            </li>
                            <li><a class="dropdown-item" href="#">Ríos</a></li>
                            <li><a class="dropdown-item" href="#">Caídas de agua</a></li>
                            <li><a class="dropdown-item" href="#">Grutas y cavernas</a></li>
                            <li>
                                <a class="dropdown-item" href="#">Lugares observación de flora y fauna</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Lugares de caza y pesca</a>
                            </li>
                            <li><a class="dropdown-item" href="#">Caminos pintorescos</a></li>
                            <li><a class="dropdown-item" href="#">Termas</a></li>
                            <li><a class="dropdown-item" href="#">Parques Nacionales</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Museos
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><a class="dropdown-item" href="#">Museos</a></li>
                            <li><a class="dropdown-item" href="#">Deportivos</a></li>
                            <li><a class="dropdown-item" href="#">Obras de arte</a></li>
                            <li><a class="dropdown-item" href="#">Lugares históricos</a></li>
                            <li>
                                <a class="dropdown-item" href="#">Ruinas y lugares arqueológicos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Folklore
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/manifestaciones" class="dropdown-item">Manifestaciones Religiosas</router-link></li>
                            <li><router-link to="/ferias" class="dropdown-item"> Ferias y Mercados</router-link></li>
                            <li><router-link to="/musica" class="dropdown-item">Musica y Danza</router-link></li>
                            <li><router-link to="/artesanias" class="dropdown-item">Artesanías y artes</router-link></li>
                            <li><router-link to="/comida" class="dropdown-item">Comidas y Bebidas Tipicas</router-link></li>
                            <li><router-link to="/grupos" class="dropdown-item">Grupos Etnicos</router-link></li>
                            <li><router-link to="/arquitectura" class="dropdown-item">Arquitectura</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Realizaciones técnicas
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li>
                                <router-link to="/mineria" class="dropdown-item">Explotaciones Mineras</router-link>
                            </li>
                            <li>
                                <router-link to="/agropecuario" class="dropdown-item">Exploatciones Agropecuarias</router-link>
                            </li>
                            <li>
                                <router-link to="/industria" class="dropdown-item">Explotaciones Industriales</router-link>
                            </li>
                            <li>
                                <router-link to="/artetec" class="dropdown-item">Obras de Arte y Tecnica</router-link>
                            </li>
                            <li>
                                <router-link to="/centros" class="dropdown-item">Centros Cientificos y Tecnologicos</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Acontecimientos programados
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/artisticos" class="dropdown-item">Artisticos</router-link></li>
                            <li><router-link to="/deportivos" class="dropdown-item">Deportivos</router-link></li>
                            <li><router-link to="/mas" class="dropdown-item">Otros</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
