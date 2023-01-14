const L = require('./lib.js')

switch(new L([{id: 'foo', name: 'foo', description: 'foo'},{id: 'bar', name: 'bar', description: 'bar'}]).isEmpty){
   case true:
     window.alert('empty')
     break
   case false
     window.alert('not empty')


     console.log(new L([{id: 'foo', name: 'bar', description: 'foo'}].getName())
)
     break
    default: 
      console.log('err')
      break

}

