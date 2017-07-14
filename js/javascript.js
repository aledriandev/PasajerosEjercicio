

function mostrar(asientos){
   var str = "";
   var str2="";
   for (var i = 0; i < asientos.length; i++) {
      for (var j = 0; j < asientos[i].length; j++) {
            if (asientos[i][j] == undefined)   
               asientos[i][j] = asientos[i][j] + "[  " + " ] ";
            else   
               asientos[i][j]= asientos[i][j] + " [ * ] ";

      }
      str+="[ "+asientos[i].join(" ")+" ]\n"
   }
   return str;
}

function reserva () {
   var asientos=[[],[]];
   var N=10;
   var i1=-1
   var j1=0
   while(j1<N){
      asientos[0].push(i1+=2);
      asientos[1].push(j1+=2);   
   }
   var N = 10; // Número de asientos
   for (var i = 0; i < asientos.length; i++) {
      for (var j = 0; j < asientos[i].length; j++) {
         asientos[i][j] == undefined
      }
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Buscar \n";
   
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
            if ( nro%2 != 0 )
               asientos[0][(nro - 1)/2] = {
                  nombre : name,
                  dni: id
               };
            else
               asientos[1][(nro - 1/2)] = {
                  nombre : name,
                  dni: id
               };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            if ( nro%2 != 0)
               asientos[0][(nro - 1)/2] = undefined;
            else
               asientos[1][(nro - 1/2)] = undefined;
         }
      }else if (option == 3) {
         str = "Ingrese DNI del pasajero: ";
         var pasajeroID = parseInt( prompt( str ) );
         for (var i = 0; i < asientos.length; i++) {
            for (var j = 0; j < asientos[i].length; j++) {
               if (pasajeroID==asientos[i][j].dni) {
                  str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos[i][(nro - 1)/2].nombre + 
                     "DNI del pasajero: " + asientos[i] [(nro - 1)/2].dni;
                
               alert (str);
            }
         }
         
      }
      
      }
      
   } 
}

reserva();
