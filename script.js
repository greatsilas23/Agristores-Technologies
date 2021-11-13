/*
	Date created: Sep 24, 2021 
	Date modified: Nov 10, 2021 
*/

//constants
const opaqueBackground = document.getElementById("opaqueBackground")
const collectDataForm = document.getElementById("myAddForm")
const resultTable = document.getElementById("myTbl")
//variables
let itemId = 0
let itemName = myAddForm.itemName
let itemPrice = myAddForm.itemPrice
let searchItem = searchNewItems.searchItem
let popupIsShowing = false
let itemsAvailable = new Array()
//operational methods
function addItem(){
	event.preventDefault()
	hidePopup()
	itemsAvailable.push({
		idGiven: itemId++,
		name: itemName,
		price: itemPrice
	})
	setUpdates()
}
function removeItem(itemToRemove){
	itemsAvailable.pop(itemToRemove)
	setUpdates()
}
function showItem(){
	getUpdates()
	let totalRows = resultTable.rows.length
	while(--totalRows)
		resultTable.deleteRow(totalRows)
	for(let i = 0; i < itemsAvailable.length; i++){
		let newRow = resultTable.insertRow()
		let cell1 = newRow.insertCell()
		cell1.innerHTML = itemsAvailable[i].idGiven
		let cell2 = newRow.insertCell()
		cell2.innerHTML = itemsAvailable[i].name
		let cell3 = newRow.insertCell()
		cell3.innerHTML = itemsAvailable[i].price
	}
}
function updateItem(){

}
function getItem(){
	for(let i = 0; i < itemsAvailable.length; i++){
		if(searchItem.value == itemsAvailable[i].itemName)
			return i
		else
			alert("Sorry, the item you searched for is not in our list of items")
	}
}

//style methods
function showPopup(e){
	let thisItem = e.parentElement.parentElement.getAttribute("id")
	const isUsingPopup = document.getElementById(thisItem)
	window.scroll(isUsingPopup.style.top, isUsingPopup.style.left)
	if(!popupIsShowing){
		window.scroll(0, 0)
		opaqueBackground.style.display = "block"
		collectDataForm.style.display = "block"
		popupIsShowing = true
	} else {

	}
}
function hidePopup(){
	if(popupIsShowing){
		opaqueBackground.style.display = "none"
		collectDataForm.style.display = "none"
		popupIsShowing = false
	} else {

	}
}