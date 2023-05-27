const jerseyDropdown =  document.getElementById("jerseyDrop")
const jerseyMenu = document.getElementById("jerseyStyle")
const toggleArrow = document.getElementById("arrow")
const searchIcon = document.getElementById("search")
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const cartOverview = document.getElementById("cartOverview")
const cartIcon = document.getElementById("shopping-cart")
const closeBtn = document.getElementById("close")
const salesAdvert = document.getElementById("salesText")
const addToCart = document.querySelectorAll("#addToCartButton")
const empty = document.getElementById("empty")
const inCart = document.getElementById("inCart")
const sideBarDiv = document.getElementById("sideBarDiv")
const alertt = document.getElementById("alert1")
const total = document.getElementById("total")
const cartNumber = document.getElementById("cart-amount")
const deleteBtn = document.getElementById("delete")
const newItemCont = document.getElementById("item-appear")
const shoes = document.getElementById("shoes")








// FUNCTIONS
const jerseyToggle = () => {
    jerseyMenu.classList.toggle("show")
    toggleArrow.classList.toggle("arrow")
}

const searchBar = () => {
    searchInput.classList.toggle("searchBar-show")
    searchButton.classList.toggle("searchButton-show")
}

const cartOpenClose = () => {
    cartOverview.classList.toggle("cartOverview-show")
}

const shoeMessage = () => {
    showAlert("Out of Stock", "danger")
}


const salesAdvertBlinker = setInterval(() => {
    salesAdvert.classList.toggle("salesText-show")
}, 2000)

const showAlert = (message, type) => {
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.appendChild(document.createTextNode(message))

    sideBarDiv.insertBefore(div, alert1)


    setTimeout(  () => {
        document.querySelector(".alert").remove()
    }, 1000);
}

const appendItem = () => {
    const div = document.createElement("div")
    div.className = "itemAddedToCart"
    
    const textNode = document.createTextNode("My Items")
    div.appendChild(textNode)

    newItemCont.insertBefore(div, total)

    const rmvBtn = document.createElement("a")
    rmvBtn.innerHTML = "X"
    rmvBtn.className = "btn btn-sm btn-danger" 
    rmvBtn.id = "delete"

    div.appendChild(rmvBtn)
}

const increaseCartAmount = () => {
    cartNumber.innerHTML++      
}

// const decreaseCartAmount = () => {
//     cartNumber.innerHTML--    
// }


const rmvItem = () => {
    console.log(1)
}


// CLICKS AND ACTIONS
jerseyDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    jerseyToggle()
})


cartIcon.addEventListener("click", (e) => {
    e.preventDefault
    cartOpenClose()
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault
    cartOpenClose()
})

addToCart.forEach((button) => {
    button.addEventListener("click", (e) => {
        increaseCartAmount()
        e.preventDefault
        appendItem()
        empty.remove()
        showAlert("Item Successfully Added", "success")


    })
}) 


shoes.addEventListener("click", shoeMessage)














