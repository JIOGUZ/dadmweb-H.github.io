// JavaScript Document
document.addEventListener('DomContentLoader', function(){
    var seleccions = {
        listbox1:'',
        listbox2:'',
        listbox3:'',
        listbox4:''
    };
    function checkSelections(){
        return seleccions.listbox1 && seleccions.listbox2 & seleccions.listbox3 && seleccions.listbox4;
    }

    function handleSeleccion(event) {
        var listboxid = event.target.id;
        seleccions[listboxid] = event.target.value;

        if (checkSelections()) {
            var params = new URLSearchParams(seleccions).toString();
            window.location.href = 'result.html?' + params;
        }
    }
    

    document.getElementById('boton1').addEventListener('click', function() {
        document.getElementById('listbox1').style.display = 'block';
    });
    document.getElementById('listbox1').addEventListener('change', handleSeleccion);

    document.getElementById('boton2').addEventListener('click', function() {
        document.getElementById('listbox2').style.display = 'block';
    });
    document.getElementById('listbox2').addEventListener('change', handleSeleccion);

    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('listbox3').style.display = 'block';
    });
    document.getElementById('listbox3').addEventListener('change', handleSeleccion);

    document.getElementById('boton4').addEventListener('click', function() {
        document.getElementById('listbox4').style.display = 'block';
    });
    document.getElementById('listbox4').addEventListener('change', handleSeleccion);
    
});
     //Dispositivo
function listbox1() {
    const listbox1 = document.getElementById('listbox1');
    const computedStyle = window.getComputedStyle(listbox1);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox1.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox1.style.display = 'none';
    }
}
// JavaScript Document
		
		// PARA MARCA >>>
function listbox2() {
    const listbox2 = document.getElementById('listbox2');
    const computedStyle = window.getComputedStyle(listbox2);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox2.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox2.style.display = 'none';
    }
}// JavaScript Document
		
		//PARA MODELO
function listbox3() {
    const listbox3 = document.getElementById('listbox3');
    const computedStyle = window.getComputedStyle(listbox3);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox3.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox3.style.display = 'none';
    }
}

function showListbox(id) {   //muestra el modelo segun la marca y sub modelos
    // Hide all listboxes
    document.querySelectorAll('.listbox').forEach(function(listbox) {
        listbox.style.display = 'none';
    }); 
    // Show the selected listbox
    document.getElementById(id).style.display = 'block';
}
		
		//PARA SISTEMA 		
function listbox4() {
    const listbox4 = document.getElementById('listbox4');
    const computedStyle = window.getComputedStyle(listbox4);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox4.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox4.style.display = 'none';
    }
}
			
			 
        