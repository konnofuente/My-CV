
range=document.getElementById("range")

function edit(){
  
    document.querySelector(".edit-btn img").style.backgroundColor="white";
    document.getElementById("range").disabled=false;
    range.oninput=(()=>{
        document.getElementById("french-progress").style.width=document.getElementById("range").value + "%";
        document.getElementById("span").innerHTML=parseInt(document.getElementById("range").value);
        range.style.opacity=1;
        click=true
    });
    document.getElementById("range1").disabled=false;
    document.getElementById("range1").oninput=(()=>{
        document.getElementById("english-progress").style.width=document.getElementById("range1").value + "%";
        document.getElementById("span1").innerHTML=parseInt(document.getElementById("range1").value);
        document.getElementById("range1").style.opacity=1;
        click=true
    });

}

function dis_edit(){
    document.querySelector(".edit-btn img").style.backgroundColor="black";
    document.getElementById("range").disabled=true;
    document.getElementById("range1").disabled=true;
}




function C_dis_edit(){
    document.querySelector(".C-edit-btn img").style.backgroundColor="black";
    document.getElementById("C-range1").disabled=true;
    document.getElementById("C-range2").disabled=true;
    document.getElementById("C-range3").disabled=true;
    document.getElementById("C-range4").disabled=true;
    document.getElementById("C-range5").disabled=true;
    document.getElementById("C-range6").disabled=true;

}



function edit_competance(){
  
    document.querySelector(".C-edit-btn img").style.backgroundColor="white";
    document.getElementById("C-range1").disabled=false;
    document.getElementById("C-range1").oninput=(()=>{
        document.getElementById("photoshop-progress").style.width=document.getElementById("C-range1").value + "%";
        document.getElementById("C-span1").innerHTML=parseInt(document.getElementById("C-range1").value);
        document.getElementById("C-range1").style.opacity=1;
        click=true
    });


    document.getElementById("C-range2").disabled=false;
    document.getElementById("C-range2").oninput=(()=>{
        document.getElementById("illustrator-progress").style.width=document.getElementById("C-range2").value + "%";
        document.getElementById("C-span2").innerHTML=parseInt(document.getElementById("C-range2").value);
        document.getElementById("C-range2").style.opacity=1;
        click=true
    });

    document.getElementById("C-range3").disabled=false;
    document.getElementById("C-range3").oninput=(()=>{
        document.getElementById("wordpress-progress").style.width=document.getElementById("C-range3").value + "%";
        document.getElementById("C-span3").innerHTML=parseInt(document.getElementById("C-range3").value);
        document.getElementById("C-range3").style.opacity=1;
        click=true
    });


    document.getElementById("C-range4").disabled=false;
    document.getElementById("C-range4").oninput=(()=>{
        document.getElementById("spiritaul-progress").style.width=document.getElementById("C-range4").value + "%";
        document.getElementById("C-span4").innerHTML=parseInt(document.getElementById("C-range4").value);
        document.getElementById("C-range4").style.opacity=1;
        click=true
    });

    document.getElementById("C-range5").disabled=false;
    document.getElementById("C-range5").oninput=(()=>{
        document.getElementById("java-progress").style.width=document.getElementById("C-range5").value + "%";
        document.getElementById("C-span5").innerHTML=parseInt(document.getElementById("C-range5").value);
        document.getElementById("C-range5").style.opacity=1;
        click=true
    });

    
    document.getElementById("C-range6").disabled=false;
    document.getElementById("C-range6").oninput=(()=>{
        document.getElementById("general-progress").style.width=document.getElementById("C-range6").value + "%";
        document.getElementById("C-span6").innerHTML=parseInt(document.getElementById("C-range6").value);
        document.getElementById("C-range6").style.opacity=1;
        click=true
    });

    


}


function enter() {
    var form= document.getElementById("form")
    form.style.display="flex";

  }





//-------------------------------------local storage-----






const nom = document.getElementById('name');
const mail= document.getElementById('mail');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const about = document.getElementById('about');



//-----------------------------
const date2fro = document.getElementById('date2fro');
const text2for = document.getElementById('text2for');

const date3fro = document.getElementById('date3fro');
const text3for = document.getElementById('text3for');
//-----------------------------

const date1e = document.getElementById('date1e');
const text1e = document.getElementById('text1e');
const date2e = document.getElementById('date2e');
const text2e = document.getElementById('text2e');
const date3e = document.getElementById('date3e');
const text3e = document.getElementById('text3e');



const photo = document.getElementById('photo');

const choix = document.getElementById('choix');

let isCliked = false ;
let isPosition = false ;
let isEducation = false;
let isChoix = false ;
/*  recuperation des input lie aux competences*/




let values;
//-----------------------------
/*function stocker(data) {
    values = data;
    console.log(values);
}*/
let a ;


if (localStorage.length === 0) {
    
    const val = async function (){
        const res = await fetch('store.json');
        const data = await res.json();//contenu du ficher json
        setTimeout(()=>{//fetch value in json
            values =JSON.stringify(data) ;//converrte value to string
            console.log(values,1);
            localStorage.setItem('obj',values);
        },20)
        
        return data;
    }

 

    const data = val();
    console.log(data);
    console.log(a,1);
}




setTimeout(()=>{
    a = JSON.parse(localStorage.getItem("obj")) ;
    nom.innerHTML = a.infos.name;
    mail.innerHTML = a.infos.mail;
    phone.innerHTML = a.infos.tel;
    city.innerHTML= a.infos.location;
    about.innerHTML= a.resume.texte;

    
},100)


