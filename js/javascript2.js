
function mostrar(asientos){
   var strPar = "", strImpar = "";
   for (var i = 0; i < asientos.length; i++) {
      var e = (asientos[i]!=undefined)?"*":"";
      if ( (i+1)%2 != 0)   
         strImpar += (i+1) + "[ " + e + " ] ";
      else   
         strPar += (i+1) + "[ " + e + " ] ";
   }
   return "|" + strImpar + "|\n" + "|" + strPar + "|\n";
}  

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Buscar pasajero \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "Inserte DNI del pasajero: ";
         var pasajeroId = parseInt( prompt( str )  );
         for (var i = 0; i < asientos.length; i++) {
            if (asientos[i]!=undefined){
               if (pasajeroId==asientos[i].dni) {
                  str = mostrar(asientos) + "Nombre del pasajero: " + asientos[i].nombre + "\n" +"DNI del pasajero: " + asientos[i].dni;
                   alert (str);
               } 
            }
         }
         
      }
   }
      
} 


reserva();
