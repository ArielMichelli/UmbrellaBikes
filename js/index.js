/* ============= SECCION PARA EVITAR REPETIR EL CODIGO DEL HEADER Y EL FOOTER: =============  */

var cad =
`
<div class="header">
        <div class="absoluto">
            <span class="menu">Ver menú</span>
            <nav>
                <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./acerca.html">Acerca</a></li>
                <li><a href="./galeria.html">Galeria</a></li>
                <li><a href="./sucursales.html">Sucursales</a></li>
                <li><a href="./contacto.html">Contacto</a></li>
                <li class="item-r"><a href="./login.html">Ingresar</a></li>
                </ul>
            </nav>
        </div>
    </div> 
`
document.getElementById("idheader").innerHTML = cad

var cad =
`
<footer>

        <div class="grilla"></div>

        <h1>UmbrellaBikes</h1>

        <nav>
            <div class="redes-container" onmouseover="style.color='red'" onmouseout="style.color='black'">
                <ul >
                    <li> <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>

                    <li> <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter-square"></i></a></li>

                    <li> <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i> </a></li>

                    <li> <a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </nav>
        <br>
        <h4 style="text-align: center;">Copyright  2021 UmbrellaBikes, all rights reserved</h4>


        </div>
    </footer>
`

document.getElementById("idFooter").innerHTML = cad
