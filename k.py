class A {
  def A(x,y):
    self.x = x
    self.y = y
  
  def getX():
    try{
      retrun self.x
    }catch(err){
      if(err) print(err)
    }
 
  def setX(x):
    try{
      self.x = x
    }catch(err){
       if(err) print(err)
    }
}




a = new A([{id: '001', name: 'S', description: 0},{id: '002', name: 'T', description: 0}],0)

print((a.getX[0] * a.getY[1])/365)


