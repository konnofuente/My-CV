
const competenceName = document.getElementById('competenceName');
const competenceValeur = document.getElementById('competenceValeur');
const addComtence1 = document.getElementById('addComtence1');
const addComtence2 = document.getElementById('addComtence2');
const positionbtn = document.getElementById('positionbtn');

const anneFormation = document.getElementById('anneFormation');
const formationValeur = document.getElementById('formationValeur');
const position = document.getElementById('position');

const positionE=document.getElementById('positionE');
const positionEs=document.getElementById('positionEs');
const anneEducation = document.getElementById('anneEducation');
const educationValeur = document.getElementById('educationValeur');

const nomValue = document.getElementById('nomValue');
const nom = document.getElementById('name');
const lienmail = document.getElementById('lienmail');
const localisation = document.getElementById('localisation');
const phone = document.getElementById('phone');
const about = document.getElementById('about');
const date1fro = document.getElementById('date1fro');
const text1for = document.getElementById('text1for');
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

if (localStorage.length === 1) {

    const val = async function (){
        const res = await fetch('fichier1.json');
        const data = await res.json();//contenu du ficher json
        //console.log(data);
        //stocker(data);
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
    lienmail.innerHTML = a.infos.mail;
    phone.innerHTML = a.infos.tel;
    localisation.innerHTML= a.infos.location;
    about.innerHTML= a.resume.texte;
    date1fro.innerHTML= a.formations.date1;
    text1for.innerHTML= a.formations.texte1;
    //--------------------------------------------------------
    date2fro.innerHTML= a.formations.date2;
    text2for.innerHTML= a.formations.texte2;

    date3fro.innerHTML= a.formations.date3;
    text3for.innerHTML= a.formations.texte3;
    //-----------------------------
    date1e.innerHTML= a.educations.date1e;
    text1e.innerHTML=a.educations.texte1e;
    date2e.innerHTML= a.educations.date2e;
    text2e.innerHTML=a.educations.texte2e;
    date3e.innerHTML= a.educations.date3e;
    text3e.innerHTML=a.educations.texte3e;
    //-----------------------------
    photo.src = a.image.sources;
},100)

saveCompetence.addEventListener('click' , ()=>{
    
   
    let name = competenceName.value;
    let valeur = parseInt(competenceValeur.value);
    const niveau = document.createElement('div');
    const p = document.createElement('p');

    if(!isCliked){
       
        p.innerHTML = `${name}`;
        niveau.innerHTML = `
        <div class="progress my-3"> 
            <div class="progress-bar bg-info" role="progressbar"  style="width: ${valeur}%" aria-valuenow="25"><div>
        <div>
        `;
        addComtence1.appendChild(p);
        addComtence1.appendChild(niveau);
        isCliked = true;
    }else{
        p.innerHTML = `${name}`;
        niveau.innerHTML = `
        <div class="progress my-3"> 
            <div class="progress-bar bg-info" role="progressbar"  style="width: ${valeur}%" aria-valuenow="25"><div>
        <div>
        `;
        addComtence2.appendChild(p);
        addComtence2.appendChild(niveau);
        isCliked = false;

    }
    
})


//--------------------------------------------------------

positionbtn.addEventListener('click', (e)=>{

    e.preventDefault();
    let annee = anneFormation.value;
    let desc = formationValeur.value;

    console.log(annee , desc);
    
    if(!isPosition){
        positionEs.innerHTML +=`
        <div class="timeline right">
        <div class="card">
          <div class="card-body p-4">
            <h3>${annee}</h3>
            <p class="mb-0">
            ${desc}
            </p>
          </div>
        </div>
      </div>
        `
        isPosition = true;
    }
    else{

        positionEs.innerHTML +=`
        <div class="timeline left">
        <div class="card">
          <div class="card-body p-4">
            <h3>${annee}</h3>
            <p class="mb-0">
            ${desc}
            </p>
          </div>
        </div>
      </div>
        `
        isPosition = false;

    }
  /*  const niveau = document.createElement('div');
    const p = document.createElement('p');*/

})

//---------------------------------------------------

positionE.addEventListener('click', ()=>{
    
    let annee ;
    let desc ;
    console.log(annee , desc);
    
    if(!isEducation){
        
        setTimeout(()=>{
            
             annee = anneEducation.value;
             desc = educationValeur.value;
            positionEs.innerHTML +=`
            <div class="timeline right">
            <div class="card">
              <div class="card-body p-4">
                <h3>${annee}</h3>
                <p class="mb-0">
                ${desc}
                </p>
              </div>
            </div>
          </div>
            `
        },5000)
        isEducation = true;
    }
    else{

        setTimeout(()=>{

            annee = anneEducation.value;
            desc = educationValeur.value;
            positionEs.innerHTML +=`
            <div class="timeline left">
            <div class="card">
              <div class="card-body p-4">
                <h3>${annee}</h3>
                <p class="mb-0">
                ${desc}
                </p>
              </div>
            </div>
          </div>
          `

        },10)
        isEducation = false;

    }
})

//----------------------------------

nom.addEventListener('click', ()=>{
    let a = JSON.parse(localStorage.getItem("obj")) ;
    console.log(a,2);
    setTimeout(()=>{
    nom.innerHTML=`
    <h5 class="mb-3" id="name" data-bs-toggle="modal" data-bs-target="#exampleName">${nomValue.value}</h5>
    `;
    a.infos.name = nomValue.value;
    localStorage.removeItem("obj");
    localStorage.setItem("obj",JSON.stringify(a));
    },5000)
})
//--------------------------------------------------


window.addEventListener('load', ()=>{
    choix.onchange = function(event){
        var reader = new FileReader();
        reader.readAsDataURL(event.srcElement.files[0]);
        var me = this;
        reader.onload = function (){
            let a = JSON.parse(localStorage.getItem("obj"))
            var fileContent = reader.result;
            console.log(fileContent);
            photo.src = fileContent.toString();
            a.image.sources = fileContent.toString();
         
        }
    }
})

photo.addEventListener('click', ()=>{
 
    let source = choix.value;
if(!isChoix){
  
     choix.style.display = 'block';
    isChoix = true;
   /* choix.addEventListener('change', (e)=>{
       const reader = new FileReader();
       reader.addEventListener('load', ()=>{

        uploaded_image = reader.result;
        console.log(uploaded_image);
       })
    })*
    /*setTimeout(()=>{
        source = choix.value;
        console.log(source);
        photo.src = source;
    },5000)
    choix.change((e)=>{
        console.log(e)
    })*/
    
 }
 else{
     
     choix.style.display = 'none';
     isChoix = false;
    }
})
