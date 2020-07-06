let nepal = {
  //add property
  mountains: ['Everest', 'Fish Tail', 'Annapurna'],
  //add method
  printWithDash: function(){
    setTimeout(() => {
       console.log(this.mountains.join(" - "))
    }, 3000)
  }
};

nepal.printWithDash();