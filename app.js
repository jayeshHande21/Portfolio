const button = document.querySelector("#btn");

const more = document.querySelector("#more");

const dots = document.querySelector("#dots");
var i = 0;
function ReadMore(){
    // console.log("clicked Me")
    if(!i){
        
        dots.style.display = "none";

        more.style.display = "inline";

        button.innerText = "Read Less";

        i = 1;
  
        

    }else{
        dots.style.display = "inline";

        button.innerText = "Read More";

        more.style.display = "none";

        i = 0;
      
    }

}


button.addEventListener("click" , ReadMore);