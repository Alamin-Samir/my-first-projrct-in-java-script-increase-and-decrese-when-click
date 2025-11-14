const counterElement=document.getElementById("counter");

const plusbtn=document.getElementById("plusbtn");


const minusbtn=document.getElementById("minusbtn");





let counter=0;

const updatecounter=(value)=>{

    counter=counter+value;

    counterElement.textContent=counter;


    if(counter>=10){
    plusbtn.setAttribute("disabled", true);

    }

    else{
      plusbtn.removeAttribute("disabled");

    }



//minus



if(counter<=0){
        minusbtn.setAttribute("disabled",true);
    }

    else{
         minusbtn.removeAttribute("disabled");
    }
}



plusbtn.addEventListener("click",()=>{

    updatecounter(1);
});

minusbtn.addEventListener("click",()=>{

    updatecounter(-1);
});