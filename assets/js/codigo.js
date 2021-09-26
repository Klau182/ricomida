let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
})

//ALERTA POR MEDIO DE CLICK A BOTON
$( "#enviarCorreo" ).click(function() {
    alert( "El correo fue enviado correctamente..." );
  });

//CAMBIO DE COLOR EN "INGREDIENTES" Y "PREPARACION" CON 2XCLICK
$(".red").on("dblclick", function(){
        $(this).css("color","red");
    });

//TOGGLE POR CLICK EN TITULO
$( ".recetitulo" ).click(function() {
    $( ".recetext" ).toggle(function() {
    });
  });

  