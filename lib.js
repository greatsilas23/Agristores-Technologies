
module.exports.L = class L{

   constructor(new Array(item)){

     this.name = item.name 


     this.description = item.description

     this.isEmpty = false

   }
   function getName(){
     this.name !== '' ? return this.name.toString() : console.log('err')
   }
   function setName(x){
     this.name !== '' ? this.name = x.toString() : console.log('err')
     return
   }
   function getDescription(){
     this.description !== '' ? return this.description.toString() : console.log('err')
   }

} 
