
//? ELEMENTLERİ TANIMLAMA

const input = document.querySelector(".input")
const add = document.querySelector(".add")
const list = document.querySelector(".list")
const deleteX= document.querySelector(".fa fa-trash")
const lineDraw=document.querySelector(".fa fa-check")
// const reset=document.querySelector(".external")


//? EKLE BUTONUNA TIKLANDIĞINDA
add.addEventListener("click", ()=>{
    if (input.value) {
     //! yeni li elemnti oluştur   
    let li = document.createElement("li") 
    // console.log("tıklandı");
    //! oluşan li elementini clası list olan ul elementine bağla
    list.appendChild(li)
    //! stillendirebilmek için  oluşan li ye class ekle
// li.setAttribute("class", "liItem")

//! üstünü çizmek için buton oluştur
let lineDraw=document.createElement("button")
//! oluşan butpna clas ekle
lineDraw.setAttribute("class", "fa fa-check")
//! bunu li elementine bağla
li.appendChild(lineDraw)


//! linin içine taxt yazabilmek için p elementi oluştur
let pEl= document.createElement("p")
//! oluşan p elementine li ye bağla
li.appendChild(pEl)
//! içeriğini inputun value sine eşitle
pEl.textContent = input.value;


//! silmek için buton oluştur
let divDelete=document.createElement("button")
//! oluşan butpna clas ekle
divDelete.setAttribute("class", "fa fa-trash")
//! bunu li elementine bağla
li.appendChild(divDelete)


//! add butonu her tıklandığında inputun içindeki değer yeni iye eklendiğinde inputun içini boşalt 
input.value = "";

let reset= document.querySelector(".reset")
   




lineDraw.addEventListener("click",()=>{
    pEl.style.textDecoration="line-through"
    reset.style.display="block"
reset.addEventListener("click",()=>{
    if (pEl.style.textDecoration=="line-through"){ 
       li.remove()
       reset.style.display="none"
    }
    
})
   

   })

//! üstünü çizme butonu tıklandığında 
lineDraw.addEventListener("click", ()=>{
    pEl.style.textDecoration="line-through"
    pEl.style.color="white"
    li.style.backgroundColor="transparent"
    lineDraw.style.backgroundColor="white"
    lineDraw.style.color="black"
       
})
}


})

//! silme butonu tıklandığında
list.addEventListener("click", (event)=>{
if (event.target.className==="fa fa-trash") {
    let listItem= event.target.parentNode;
    list.removeChild(listItem);
    
}


})

// reset.addEventListener("click",(e)=>{
//     e.target.closest.querySelector('li');
//     if (p.style.textDecoration="line-through") {
         // let listItem= e.target.parentNode;
//        list.removeChild(listItem);
//     }
// })