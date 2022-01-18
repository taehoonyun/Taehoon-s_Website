function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json => json.items)
}

function displayItems(items){
    const container = document.querySelector('.items')
    container.innerHTML = items.map(item =>createHTMLString(item)).join('');
    
}

function createHTMLString(item){
    return `
    <li class="item">
        <img src ="${item.image}" alt="${item.type}" class="item_thumbnail"/>
        <span class="item_description">${item.gender},${item.size}</span>
    </li>`;
}

// function hidden(items,key,value){
    
//     items.forEach(item => { 
        
//         if(item[key]===value){
//             const li = document.querySelector(".item")
//             li.classList.remove("hidden")
//             console.log(li);
//         }
//         else{
//             const li = document.querySelector(".item")
//             li.classList.add("hidden");
//         } 
//     });
// }

function SelectOpt(event,items){
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;
    const li = document.querySelector(".item")

    if(key == null || value == null ){
        return;
    }
    displayItems(items.filter(item=>item[key]==value));
    // hidden(items,key,value);
    // console.log(li);
    
}

function setEventListeners(items){
    const opt = document.querySelector(".selectOpt");
    opt.addEventListener("click",(event)=>SelectOpt(event,items));
    const logo = document.querySelector(".logo");
    // console.log(logo);
    logo.addEventListener("click",()=>displayItems(items));

}

loadItems()
.then(items =>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);