// kredi türü
const selectEl = document.querySelector("#select");
// vade oranı
const vade = document.querySelector("#vade");
// tutar oranı
const tutar = document.querySelector("#tutar");
// btn 
const btn = document.querySelector(".btn");

// sonuclar td 
const sonuclar = document.querySelector(".sonuclar");

const form = document.querySelector("form");
let faizToplamTutar = 0;
let faizOran = 0;

form.addEventListener("click",(e) => {

e.preventDefault();




if(e.target.classList.contains("btn")){

// alert("Please enter")

// if(vade.innerText == "" && tutar.innerText == "" ){
//       alert("boş bırakmayınız!")
// }

if(confirm("Are you sure you want to")){
      if(selectEl.value === "Konut Kredisi"){
            faizOran = 1.29;
            
      }
      else if(selectEl.value === "Ihtiyac Kredisi"){
            faizOran = 1.99;
            
      }
      else if(selectEl.value === "Arac Kredisi"){
            faizOran = 1.59;
           
      }




}
let taksitAy = 0;
const faiz = faizOran / 100;
faizToplamTutar = parseFloat(tutar.value) * (faiz * (1 + faiz) * vade.value) / (1 + faiz) * parseFloat(vade.value) - 1 ;
taksitAy = faizToplamTutar / parseFloat(vade.value)
// console.log(selectEl.value)
// console.log(faiz)
// console.log((faizToplamTutar).toFixed(2) )
// console.log(taksitAy.toFixed(2))

sonuclar.innerHTML += 
`<table class="table table-sm">
  <thead>
    <th>İhtiyaç</th>
    <th>Vade</th>
    <th>Toplam Tutar:</th>
    <th>Taksit Tutarı:</th>
  </thead>
  <tbody>
  <td>${selectEl.value}</td>
  <td>${vade.value}</td>
  <td>${Math.round(faizToplamTutar)}</td>
  <td>${Math.round(taksitAy)}</td>
  </tbody>
</table> `;




      }



// if(e.target.classList ){

// }

})