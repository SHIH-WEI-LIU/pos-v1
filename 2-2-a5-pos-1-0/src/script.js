// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");         const list = document.querySelector(".list-group-item")   
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======
//menu
let htmlContent = ``
productData.forEach((item)=>{
  htmlContent += `
    <div class="col-3" id="${item.id}">
       <div class="card">
          <img src="${item.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
  `
})
menu.innerHTML = htmlContent

//觸發menu事件
//1.函式(create to cartList)
function addItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <li class="list-group-item">${event.target.previousElementSibling.previousElementSibling.textContent} X 1 小計：${event.target.previousElementSibling.textContent}</li>
  `;
  cart.appendChild(newItem);
  
 //計算總金額  
  let totalHtml = ``
  let initial= Number(totalAmount.innerHTML)
  initial += Number(event.target.previousElementSibling.textContent)
  totalHtml += initial                  
  totalAmount.textContent = totalHtml 
  }

//2.
menu.addEventListener("click",(e) => {
  if (event.target.tagName === "A") {
    addItem()
  }
})




//button
button.addEventListener("click",(e) => { 
  if (totalAmount.textContent === ""){
    alert("尚未點餐喔！")
  }else{
  alert(`感謝購買\n總金額：${totalAmount.textContent}`)
  }
  cart.innerHTML = ''
  totalAmount.textContent = ''
  })
