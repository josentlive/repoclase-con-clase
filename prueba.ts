class Albun{
title:string
rating:number
constructor(title,rating){
  this.title=title
  this.rating=rating
}
}
class Banda{
  members:string[]
  albums:Albun
  constructor(members:string[], albums:Albun){
    this.members=members
    this.albums=albums

  }
}
function main(){
  const unAlbun=new Albun("albunpruebba",4)
  const unaBanda=new Banda(["soyelstring"],unAlbun)
console.log(unaBanda)
console.log("otro cambio")
  console.log("cambio desde gitbusch")
}
main()
