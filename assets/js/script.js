let game = {
    /**
     * Method: Initialize the game
     */
     begin: function() {
    
        //Property to know the location of the question
        this.currLocation = 0;
        //Property to know the actual score
        this.score = 0; 

        //Remove div restart
        document.getElementById('restart').style.display="none"
    
        // get the array of <li> elements
        let arrLi = document.querySelectorAll('.options'); 

        // show question
        this.showQuery(questions[this.currLocation]);   
              
        //Iterate all the <li> elements ,add eventListener and check answer
        arrLi.forEach((element, i) => {
                
          element.addEventListener('click', () => {
            // check correct answer
            this.checkAnswer(i);
          });
        });
    },
    
    /**
     * Verify the option selected by the user
     * @param {integer} userSelected 
     */
    checkAnswer: function(userSelected) {
    },
    
    /**
     * Update position of the Array
     */
    increasePos: function() {
    },
    
    /**
     * Print score on the board game
     */
    updateScore: function() {
    },
    
    //Print result of selection on the board game
    showResult: function(isCorrect) {        
    }
    
};
  
// begin the application
game.begin();
  