//Declaracion de vectores para trabajar en la pagina

let disponibles = [30,30,30,30,30,30,30,30]


function showModal(pos) { 
    disponibles[pos] = disponibles[pos] - 1 ;
    if (disponibles[pos]<=0) { 
        Swal.fire('Ya no hay cupos disponibles para la discoteca ');
        disponibles[pos]=0;
     } else { 
        Swal.fire("Reservado con exito");
    }     
    switch (pos) {
        case 0:
            document.getElementById("disponible1").innerHTML = disponibles[pos];
            break;         
        case 1:
            document.getElementById("disponible2").innerHTML = disponibles[pos];
            break;
        case 2:
            document.getElementById("disponible3").innerHTML = disponibles[pos];
            break;
        case 3:
            document.getElementById("disponible4").innerHTML = disponibles[pos];
            break;
        case 4:
            document.getElementById("disponible5").innerHTML = disponibles[pos];
            break;
        case 5:
            document.getElementById("disponible6").innerHTML = disponibles[pos];
            break;
        case 6:
            document.getElementById("disponible7").innerHTML = disponibles[pos];
            break;
        case 7:
            document.getElementById("disponible8").innerHTML = disponibles[pos];
            break;              
    }
}