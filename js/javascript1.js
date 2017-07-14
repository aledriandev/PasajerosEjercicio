var asientos=[[],[]];
var N=10;
var i1=-1
var j1=0
while(j1<N){
	asientos[0].push(i1+=2);
	asientos[1].push(j1+=2);	
}

function mostrar(asientos){




   var str = "";
   var str2="";
   for (var i = 0; i < asientos.length; i++) {
		for (var j = 0; j < asientos[i].length; j++) {
		      if (asientos[i][j] != undefined)   
		         asientos[i][j] = asientos[i][j] + "[  " + " ] ";
		      else   
		         asientos[i][j]= asientos[i][j] + " [ * ] ";

		}
		str+="[ "+asientos[i].join(" ")+" ]\n"
   }
   return str;
}
alert(mostrar(asientos));