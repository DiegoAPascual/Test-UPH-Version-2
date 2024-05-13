<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="imagenes/ic_launcher.png" type="image/x-icon" sizes="16x16" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/styleForm.css" />
    <title>Inicio</title>
</head>

<body>
    <!-- Main Container -->
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <!-- Login Container -->
        <div class="row border rounded-5 p-3 bg-white shadow box-area">
            <!-- Left Box -->
            <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                style="background: #621333;">
                <div class="featured-image mb-3">
                    <img src="imagenes/Logotipo-UPH-Posición-Vertical.png" class="img-fluid" style="width: 180px;" />
                </div>
            </div>
            <!-- Right Box -->
            <div class="col-md-6 right-box">
                <div class="row align-items-center">
                    <div class="header-text mb-4">
                        <h2>Hola, Bienvenido al</h2>
                        <p>Test de Orientación Vocacional</p>
                    </div>
                    <form id="validationForm" method="post" action="guardar_encuestado.php">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Nombre(s):</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name="nombre" placeholder="Ingrese su nombre(s)" required />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Apellidos:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" name="apellidos" placeholder="Ingrese sus apellidos" required />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput3" class="form-label">Correo electrónico:</label>
                            <input type="email" class="form-control" id="formGroupExampleInput3" name="correo" placeholder="correo@gmail.com" required />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput4" class="form-label">Teléfono:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput4" name="telefono" placeholder="Ingrese número de télefono" required />
                        </div>
                        <div>
                            <div class="input-group mb-3">
                                <button type="submit" class="btn btn-lg btn-primary w-100 fs-6" name="submit" style="background-color: #621333; border-color: #621333;">Acceder</button>
                            </div>
                        </div>
                    </form>                                        
                </div>
            </div>
        </div>
    </div>
    <script src="js/validations.js"></script>
</body>
</html>

