/*
	Date created: Sep 24, 2021
	Date modified: Jan 4, 2022
*/
//constants
//(i)tables
const execTbl = document.querySelector("div.execTbl")
const featureTbl = document.querySelector("div.execTbl")
const subsidiariesTbl = document.querySelector("div.subsidiariesTbl")
//(ii)reports

//variables
//executive form array with getter: getMyExec
let myExec = new Array()
//executive form array with getter: getMyExec
let myFeatures = new Array()
//executive form array with getter: getMyExec
let mySubsidiaries = new Array()

//operational methods
function getMyExec() {
    let strExec = localStorage.getItem("myExec")
    if(strExec !== null)
        myExec = JSON.parse(strExec)
}
function getMyFeatures(){
    let strFeatures = localStorage.getItem("myFeatures")
    if(strFeatures !== null)
        myFeatures = JSON.parse(strFeatures)
}
function getMySubsidiaries(){
    let strSubsidiaries = localStorage.getItem("mySubsidiaries")
    if(strSubsidiaries !== null)
        mySubsidiaries = JSON.parse(strSubsidiaries)
}
//event listener methods
execFrm.addEventListener('submit', function getExecInput(){
    event.preventDefault()
    console.log(`validating exec frm`)
    if(execFrm.children[2].children[2].value != ""){
        myExec.push({
            name: execFrm.children[2].children[2].value,
            post: execFrm.children[2].children[6].value
        })
        localStorage.setItem("myExec", JSON.stringify(myExec))
        console.log(execFrm.children[2].children[2].value)
        console.log(execFrm.children[2].children[6].value)
        console.log(`exec form validated and stored`)
    } else {
        alert(`invalid form`)
        console.log(execFrm.children[2].children[2].value)
    }
})
featureFrm.addEventListener('submit', function getFeatureInput(){
    event.preventDefault()
    console.log(`validating feature frm`)
    if(featureFrm.children[2].children[2].value !== ""){
        myFeatures.push({
            name: featureFrm.children[2].children[2].value,
            post: featureFrm.children[2].children[6].value
        })
        localStorage.setItem("myExec", JSON.stringify(myFeatures))
        console.log(`feature form validated and stored`)
    } else {
        alert(`invalid form`)
    }
})
subsidiaryFrm.addEventListener('submit', function getSubsidiaryInput(){
    event.preventDefault()
    console.log(`validating subsidiary frm`)
    if(subsidiaryFrm.children[2].children[2].value !== ""){
        mySubsidiaries.push({
            name: subsidiaryFrm.children[2].children[2].value,
            post: subsidiaryFrm.children[2].children[6].value
        })
        localStorage.setItem("myExec", JSON.stringify(mySubsidiaries))
        console.log(`subsidiary form validated and stored`)
    } else {
        alert(`invalid form`)
    }
})
console.log(`app.js loaded`)

