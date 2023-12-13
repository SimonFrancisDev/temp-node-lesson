// commonJs, every file is a module by default
//modules - encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-ultils')
 console.log(names);
 const data = require('./6-alternative-flavour')
 require('./7-mind-graned')

  sayHi('Francis')
  sayHi(names.John)
  sayHi(names.Peter)