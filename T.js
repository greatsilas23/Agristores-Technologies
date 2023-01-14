class T{
  constructor(x){
    this.x = new Array(x)
  }

  function getX(this.x){
    this.x !== [] ? return this.x.nextX()  : return 
  }
  function setX(x){
    this.x !== [] ? this.x = x.trim() : return

  }

  function nextX(this.x){
    for(let i = 0; i < this.x.length - 1; i++){

      if(this.x[i] !== this.x[this.x.length - 1]){

        return this.x[i + 1]
      }else{
        return
      }
     }
   }
}
class U extends T{
  constructor(x){
    this.x = new Object(x)
  }
  function getLeft(){

    this.x !== {} ? return new T([2,3,5,7,11]).getNext(this.x.id) : return
  }
  function getRight(){


    this.x !== {} ? return new T([13,17]).nextX(this.x.id) : return
  }
}

