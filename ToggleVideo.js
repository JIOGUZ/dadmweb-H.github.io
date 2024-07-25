 function toggleVideo() {
            var imagen = document.getElementById("fondo");
            var video = document.getElementById("video1");
            
            // Ocultar la imagen
            imagen.style.display = "none";
            // Mostrar el video
            video.style.display = "block";
            // Reproducir el video automáticamente
            video.play();
        }