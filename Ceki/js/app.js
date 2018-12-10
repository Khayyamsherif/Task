



$(".btn").click(function() {
    let Boy = document.getElementById("BoyDaxil").value;
    let Ceki = document.getElementById("CekiDaxil").value;

    let boyesas=Boy*1*(Boy*1)
    let cekiesas=Ceki*1

    let veziyyet=cekiesas/boyesas

    if (veziyyet<20) {
       
      $(".container").append("<div> \
           <h3 class='py-5'>\
             ariqsan    \
           </h3>\
    	</div>")
    }else if(veziyyet>=20 || veziyyet<25){
    	 $(".container").append("<div> \
           <h3 class='py-5'>\
            Normalsan   \
           </h3>\
    	</div>")
    	}else if(veziyyet>25){
    		$(".container").append("<div> \
           <h3 class='py-5'>\
             Koksen   \
           </h3>\
    	</div>")
    	}

    	console.log(veziyyet)


});




