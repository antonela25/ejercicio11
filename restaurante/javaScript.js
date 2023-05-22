
//Con el condicional SWITCH simularás un pedido.

var menu=prompt("Puede pedir el menú de carne, pescado o verduras");
switch(menu){
    case "carne":
        alert("puedo ofrecerle vino tinto para acompañar");
        break;
    case "pescado":
        alert("puedo ofrecerle vino blanco para acompañar");  
        break;
    case "verduras":
        alert("puedo ofrecerle agua para acompañar");
        break; 
    default:
       alert("elija entre: carne, pescado o verduras.");}


//array-for 

 var frutas=["manzana","sandia","pera","🍓","naranja"];
 frutas.unshift("🍇");
 for( let i=0;i<frutas.length;i++){
 alert("puede elegir entre estastas frutas cual desea de postre: " + frutas[i])}

//WHILE
 let Count=10;

 while(Count>0){
  alert("número "+ Count +" es más chico que 11 ");
  Count= Count-1;
   }
