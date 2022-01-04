/*
	Date created: Sep 24, 2021 
	Date modified: Jan 4, 2022
*/
//variables
let isSideBarShowing = false
let isLoginFormShowing = false
//constants
//(i)form tablinks
const execTablinkFrm = document.querySelector("div.execTablinkFrm")
const featureTablinkFrm = document.querySelector("div.featureTablinkFrm")
const subsidiaryTablinkFrm = document.querySelector("div.subsidiaryTablinkFrm")
const accessTablinks = document.querySelector("div.accessTablinks")
const accessTabContents = document.querySelector("div.accessTabContents")
const loginTablink = document.querySelector("div.loginTablink")
const registerTablink = document.querySelector("div.registerTablink")

//(ii)form containers
const execFrm = document.querySelector("div.execFrm")
const featureFrm = document.querySelector("div.featureFrm")
const subsidiaryFrm = document.querySelector("div.subsidiaryFrm")
//(ii) navigation
const sideBarToggle = document.querySelector("div.sideBarToggle")
const sideBar = document.querySelector("div.sideBar")
const opaqueBg = document.querySelector("div.opaqueBg")
const loginFrmToggle = document.querySelector("div.loginFrmToggle")
const loginFrm = document.querySelector("div.loginFrm")
const registerFrm = document.querySelector("div.registerFrm")
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
//5. Login Form
loginFrmToggle.addEventListener('click', function displayLoginForm(){
    event.preventDefault()
    if(!isLoginFormShowing){
        if(!isLoggedIn){
            loginTablink.click()
        } else {
            console.log(`already logged`)
        }
        opaqueBg.classList.remove("hide_stuff")
        isLoginFormShowing = true
    } else {
        loginFrm.classList.add("hide_stuff")
        accessTablinks.classList.add("hide_stuff")
        opaqueBg.classList.add("hide_stuff")
        isLoginFormShowing = false
    }
})
//(i) Register Tablink of
registerTablink.addEventListener('click', function showRegisterActions(){
    accessTablinks.classList.remove("hide_stuff")
    accessTabContents.classList.remove("hide_stuff")
    registerTablink.classList.remove("whiteColor")
    registerTablink.classList.add("greenColor", "colorWhiteText")
    registerFrm.classList.remove("hide_stuff")
    loginTablink.classList.remove("greenColor", "colorWhiteText")
    loginTablink.classList.add("whiteColor")
    loginFrm.classList.add("hide_stuff")
})
//(ii) Login Tablink of
loginTablink.addEventListener('click', function showLoginActions(){
    accessTablinks.classList.remove("hide_stuff")
    accessTabContents.classList.remove("hide_stuff")
    loginTablink.classList.remove("whiteColor")
    loginTablink.classList.add("greenColor", "colorWhiteText")
    loginFrm.classList.remove("hide_stuff")
    registerTablink.classList.remove("greenColor", "colorWhiteText")
    registerTablink.classList.add("whiteColor")
    registerFrm.classList.add("hide_stuff")
})
execTablinkFrm.click()
console.log(`script.js loaded`)