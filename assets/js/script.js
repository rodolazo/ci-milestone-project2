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
     * Place the spanish word and all the english alternative on the list
     * @param {object} q 
     */
     showQuery: function(q) {
    
        // show question spanish
        let titleDiv = document.getElementById('spanish');
        titleDiv.textContent = q.spanish; 
      
        // show alternatives
        let arrLi = document.querySelectorAll('.options');
      
        arrLi.forEach(function(element, i){
          element.textContent = q.alternatives[i];
        });
    },
    
    /**
     * Verify the option selected by the user
     * @param {integer} userSelected 
     */
     checkAnswer: function(userSelected) {

        console.log(this.currLocation);
    
        let currQuestion = questions[this.currLocation];
        
        if(currQuestion.correctAnswer == userSelected) {
          // correct
          console.log('correct');
          this.score++;
          this.updateScore();
          this.showResult(true);
        }
        else {
          // not correct
          console.log('wrong');
          this.showResult(false);
        }                
        
        // increase position
        this.increasePos();
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
  