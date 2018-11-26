var app = new Vue
      ({
          el: "#app",    // creates a hook that links to id in div
          data:     // object 
          {
            imgSrc: "smb.gif",  // All of these variables are referenced to the div!
            clicked: 0,
            click5: 0,
            message: "Okay!",     
            tasks: ["learn HTML", "Learn JS", "Learn Vue","Finish Project"] 
          },
          methods:      // this is refrenced in Div
          {
              changeMessage()
              {
                this.message = "I got Vued from the button";
              },
              increment() 
              {
                  this.clicked++;
                  this.click5 += 10;
              },
              decrement()
              {
                  this.clicked--;
                  this.click5 -=10;
              }
              
          }
      });