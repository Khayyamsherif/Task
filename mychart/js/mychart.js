// let canvas=document.querySelector("#canvas")
// let ctx=canvas.getContext("2d");

// x=0;y=0;

// let tarixinMen=[];
// let qiymetinMen=[];



// ctx.beginPath();

// ctx.moveTo(300,30);   
// ctx.lineTo(300,500);
// strokeStyle="grey";
// ctx.stroke();            /* Y oxu*/
 
// ctx.moveTo(300,500);   
// ctx.lineTo(970,500);
// ctx.stroke();           /*X oxu*/  /**/
 

// function tarixYarat(_tarixX){
// 	this.tarixX=_tarixX
  
//    ctx.moveTo(tarixX,495);
//    ctx.lineTo(tarixX,505);
//    strokeStyle="blue";
//    ctx.stroke();

  
//  }


// function qiymetVer(_qiymetY){

//    this.qiymetY=_qiymetY  
   
//    ctx.moveTo(295,qiymetY);
//    ctx.lineTo(305,qiymetY);
//    strokeStyle="blue";
//    ctx.stroke();
   

//  }

// function daireYarat(event){
//  	var xPos = tarixX
//     var yPos = qiymetY
//     var size = 5
//     var colour = "gray"; // random colour;
//     ctx.beginPath();
//     ctx.arc(xPos,yPos,size,0,2*Math.PI);
//     ctx.fillStyle = colour;
//     ctx.fill();

//   }



// $("canvas").append(tarixYarat(420),qiymetVer(320),daireYarat())









   



let canvas=document.querySelector("#canvas")
let ctx=canvas.getContext("2d");

x=0;y=0;

let koordinat=[
   {
    qiymet:20,
    tarix:5
   },
   {
    qiymet:50,
    tarix:10
   },
   {
    qiymet:40,
    tarix:15
   },
    {
    qiymet:67,
    tarix:20
   },
    {
    qiymet:85,
    tarix:27
   },
   {
    qiymet:66,
    tarix:29
   }



]




ctx.beginPath();

ctx.moveTo(300,30);   
ctx.lineTo(300,500);
strokeStyle="grey";
ctx.stroke();            /* Y oxu*/
 
ctx.moveTo(300,500);   
ctx.lineTo(970,500);
ctx.stroke();           /*X oxu*/  /**/
 

function tarixYarat(_tarixX){
	this.tarixX=300+(_tarixX/30)*670
  
   ctx.moveTo(tarixX,495);
   ctx.lineTo(tarixX,505);
   strokeStyle="blue";
   ctx.stroke();

  
 }


function qiymetVer(_qiymetY){

   this.qiymetY=500-(_qiymetY/100)*470
   
   // ctx.moveTo(295,qiymetY);
   // ctx.lineTo(305,qiymetY);
   // strokeStyle="blue";
   // ctx.stroke();
   

 }

function daireYarat(event){
 	var xPos = tarixX
    var yPos = qiymetY
    var size = 5
    var colour = "gray"; // random colour;
    ctx.beginPath();
    ctx.arc(xPos,yPos,size,0,2*Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();

  }

function toward(){
	ctx.moveTo(300,30);   
	ctx.lineTo(300,500);
	strokeStyle="grey";
	ctx.stroke(); 

}


for (let i=0;i<koordinat.length;i++){

  
  $("canvas").append(tarixYarat(koordinat[i].tarix),qiymetVer(koordinat[i].qiymet),daireYarat())
  console.log(qiymetY)

  $("canvas").append(tarixYarat(koordinat[i].tarix),qiymetVer(koordinat[i].qiymet),daireYarat())
  console.log(qiymetY)


 }





function qiymetXetler(_qiymetY){

   this.qiymetY=_qiymetY  
   
   ctx.moveTo(295,300);
   ctx.lineTo(305,300);
   strokeStyle="blue";
   ctx.stroke();

}







for (let i=0;i<koordinat.length;i++){

  
  qiymetXetler()

 }

    
