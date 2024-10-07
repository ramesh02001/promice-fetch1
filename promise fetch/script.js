
{/* <div class="header">header</div> */}


let div = document.createElement("div");
div.setAttribute("class","header");
div.innerHTML = "<h3>Cates</h3>"
document.body.append(div);




async function cat (){
    try{
        var res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        var data = await res.json();
     
        var flexContainer = document.createElement("div");
        flexContainer.setAttribute("class", "flexcard");


        for(let i=0;i < data.length; i++){
            console.log(data[i]);
            var div = document.createElement("div");
               
            div.innerHTML =`<div class="card" style="width: 18rem;">
            <img src="${data[i].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">CatId: ${data[i].id}</h5>
              <p class="card-text">Width${data[i].width}</p>
              <div>Height${data[i].height}</div>
            </div>
            </div>`
           
            flexContainer.appendChild(div);
        }
        document.body.appendChild(flexContainer);


    } catch(error){
console.log(error)
    }
   
   
}
cat()

 