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


const salesAdvertBlinker = setInterval(() => {
    salesAdvert.classList.toggle("salesText-show")
}, 1000)



// CLICKS AND ACTIONS
jerseyDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    jerseyToggle()
})

searchIcon.addEventListener("click", (e) => {
    e.preventDefault
    searchBar()
})

cartIcon.addEventListener("click", (e) => {
    e.preventDefault
    cartOpenClose()
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault
    cartOpenClose()
})







