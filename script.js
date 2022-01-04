/*
	Date created: Sep 24, 2021 
	Date modified: Jan 4, 2022
*/
//variables
let isSideBarShowing = false
//constants
//(i)form tablinks
const execTablinkFrm = document.querySelector("div.execTablinkFrm")
const featureTablinkFrm = document.querySelector("div.featureTablinkFrm")
const subsidiaryTablinkFrm = document.querySelector("div.subsidiaryTablinkFrm")
//(ii)form containers
const execFrm = document.querySelector("div.execFrm")
const featureFrm = document.querySelector("div.featureFrm")
const subsidiaryFrm = document.querySelector("div.subsidiaryFrm")
//(ii) navigation
const sideBarToggle = document.querySelector("div.sideBarToggle")
const sideBar = document.querySelector("div.sideBar")
const opaqueBg = document.querySelector("div.opaqueBg")
//event listener methods
//1. Exec form
execTablinkFrm.addEventListener('click', function addGreenColor() {
    //1. Exec form
    //(i)form tablink
    execTablinkFrm.classList.remove("whiteColor")
    execTablinkFrm.classList.add("greenColor")
    execTablinkFrm.classList.add("colorWhiteText")
    //(ii)form container
    execFrm.classList.remove("hide_stuff")
    //2. Feature form
    //(i)form tablink
    featureTablinkFrm.classList.remove("greenColor")
    featureTablinkFrm.classList.add("whiteColor")
    featureTablinkFrm.classList.remove("colorWhiteText")
    //(ii)form container
    featureFrm.classList.add("hide_stuff")
    //3. Subsidiary form
    //(i)form tablink
    subsidiaryTablinkFrm.classList.remove("greenColor")
    subsidiaryTablinkFrm.classList.add("whiteColor")
    subsidiaryTablinkFrm.classList.remove("colorWhiteText")
    //(ii)form container
    subsidiaryFrm.classList.add("hide_stuff")
})
//2. Feature form
featureTablinkFrm.addEventListener('click', function addGreenColor() {
    //1. Feature form
    //(i)form tablink
    featureTablinkFrm.classList.remove("whiteColor")
    featureTablinkFrm.classList.add("greenColor")
    featureTablinkFrm.classList.add("colorWhiteText")
    //(ii)form container
    featureFrm.classList.remove("hide_stuff")
    //2. Executive form
    //(i)form tablink
    execTablinkFrm.classList.remove("greenColor")
    execTablinkFrm.classList.add("whiteColor")
    execTablinkFrm.classList.remove("colorWhiteText")
    //(ii)form container
    execFrm.classList.add("hide_stuff")
    //3. Subsidiary form
    //(i)form tablink
    subsidiaryTablinkFrm.classList.remove("greenColor")
    subsidiaryTablinkFrm.classList.add("whiteColor")
    subsidiaryTablinkFrm.classList.remove("colorWhiteText")
    //(ii)form container
    subsidiaryFrm.classList.add("hide_stuff")
})
//3. Subsidiary form
subsidiaryTablinkFrm.addEventListener('click', function addGreenColor() {
    //1. Subsidiary form
    //(i)form tablink
    subsidiaryTablinkFrm.classList.remove("whiteColor")
    subsidiaryTablinkFrm.classList.add("greenColor")
    subsidiaryTablinkFrm.classList.add("colorWhiteText")
    //(ii) form container
    subsidiaryFrm.classList.remove("hide_stuff")
    //2. Subsidiary form
    //(i) form tablink
    featureTablinkFrm.classList.remove("greenColor")
    featureTablinkFrm.classList.add("whiteColor")
    featureTablinkFrm.classList.remove("colorWhiteText")
    //(ii) form container
    featureFrm.classList.add("hide_stuff")
    //3. Exec form
    //(ii) form tablink
    execTablinkFrm.classList.remove("greenColor")
    execTablinkFrm.classList.add("whiteColor")
    execTablinkFrm.classList.remove("colorWhiteText")
    //(ii) form container
    execFrm.classList.add("hide_stuff")
})
//4. Sidebar
sideBarToggle.addEventListener('click', function displaySideBar(){
    event.preventDefault()
    if(!isSideBarShowing){
        sideBar.classList.remove("hide_stuff")
        opaqueBg.classList.remove("hide_stuff")
        sideBar.classList.add("mySidebarAnimation")
        sideBar.addEventListener('animationend', function stopAnimatingSideBar(e){
            sideBar.classList.remove("mySidebarAnimation")
        })
        isSideBarShowing = true
    } else {
        sideBar.classList.add("hide_stuff")
        opaqueBg.classList.add("hide_stuff")
        isSideBarShowing = false
    }
})
execTablinkFrm.click()
console.log(`script.js loaded`)