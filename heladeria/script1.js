//saludo al cliente en heladeria
var nombre=prompt( "ingresa tu nombre")
alert("hola "+ nombre + " bienvenido/a a heladeria naruto")

//Con el condicional IF simularás una heladería.
 var helado=100;
 var precio;
 var topping;
 var precioFinal;
//var topping;
 var precioFinal=( 10 + helado);
 var precioFinal1=( 15 + helado);
var precioFinal2=(25 + helado);


 var aceptar=confirm("el valor del helado es $100, desea agregar un topping a su pedido?")

 if(aceptar==true){
    var topping=prompt("puede elegir entre: oreo, kitkat, kinder ");
     if(topping=="oreo"){
     alert("el precio final es $ "+ precioFinal);}
     else if(topping=="kitkat"){
         alert("el precio final es $ "+ precioFinal1);}
     else if(topping=="kinder"){
         alert("el precio final es $ "+ precioFinal2)}
     else{alert("No tenemos este topping")}
         }
else {
    alert("el precio final de su helado es $ " + helado)
 };