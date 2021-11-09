/*
	Date created: Sep 24, 2021 
	Date modified: Nov 7, 2021 
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
function getUpdates(){
	let str = localStorage.getItem("itemsObject")
	if(str !== null)
		itemsAvailable = JSON.parse(str)
}
function setUpdates(){
	localStorage.setItem("itemsObject", JSON.stringify(itemsAvailable))
}
function addItem(){
	event.preventDefault()
	hidePopup()
	getUpdates()
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
function showPopup(){
	if(!popupIsShowing){
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