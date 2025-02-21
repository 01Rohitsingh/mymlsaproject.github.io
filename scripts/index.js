let bagItems=[];
displayItemsOnHomepage();
displayBagIcon();

function addToBag(itemId){
  bagItems.push(itemId);
  displayBagIcon()
}

function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCountElement.innerText=bagItems.length;
  }
  else{
    bagItemCountElement.StyleMap.visibility='hidden';
  }
  
}

function displayItemsOnHomepage() {
  let itemsContainerElement = document.querySelector('.items-container')

  let innerHtml =''
  items.forEach(item=>{
    innerHtml += `<div class="item-container">
            <img class="item-image" src="${item.item_iamge}" alt="item image">
            <div class="rating">
             ${item.rating.star} ⭐ ${item.rating.noOfrating} 
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
              <span class="current-price">${item.current_price} </span>
              <span class="original-price">${item.original_price}</span>
              <span class="discount">${item.discount}</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>
          </div>`
  })
  
  itemsContainerElement.innerHTML = innerHtml;
}
// let displayItemsOnHomepage=()=>
// displayItemsOnHomepage();