let userInput = document.getElementById("userInput");
    const calculateInput = document.getElementById("calculate");
    let reset = document.getElementById("resetField");
    let convertedValue = document.getElementById('convertedValue');
    let toF = document.getElementById("toF")
    let toC = document.getElementById("toC")
    userInput.focus()

    
    //adding an event that will change the color of toF when clicked.
    //This will help us to know if toF or toC is clicked when the user clicks calculateInput
    let changeColorToFChecker = false;
    let changeColorToCChecker = false;
    toF.addEventListener('click', changeColorOftoF);
    
    
    function changeColorOftoF(){
      changeColorToFChecker = true;
      if (changeColorToFChecker=true){
        toF.classList.remove('toF');
        toF.classList.add('toF-active');
        toC.classList.add('toC');
        toC.classList.remove('toC-active')


        //The following line will run only if the user clicks convert button when "C to F" has been clicked
        calculateInput.addEventListener('click', calculateUserInput);

        function calculateUserInput(){
          if (userInput.value === ''){
          convertedValue.textContent = 'Input a number to be converted first!';
        }else{
          let computedUserInput = Number(userInput.value)*1.8 + 32;
          convertedValue.textContent = `${userInput.value}\u00B0 Celsius is ${computedUserInput.toFixed(2)} \u00B0 Fahrenheit`
        }
          
      }
    }
    }
    
    
    toC.addEventListener('click', changeColorOftoC);
    
    function changeColorOftoC(){
      if (changeColorToCChecker===false){
        toF.classList.remove('toF-active');
        toF.classList.add('toF');
        toC.classList.remove('toC');
        toC.classList.add('toC-active');
        calculateInput.addEventListener('click', calculateUserInput);

        function calculateUserInput(){
          if (userInput.value === ''){
          convertedValue.textContent = 'Input a number to be converted first you moron!';
        }else{
          computedUserInput = Number(userInput.value-32) /1.8;
          convertedValue.textContent = `${userInput.value}\u00B0 Fahrenheit is ${computedUserInput.toFixed(2)} \u00B0 Celsius`
        }



          
          
        } 
    }
      }

      reset.addEventListener('click', clearAll)
        function clearAll(){
          toC.classList.add('toC');
          toC.classList.remove('toC-active');
          userInput.value = "";
          convertedValue.textContent = "";
          toF.classList.add('toF');
          toF.classList.remove('toF-active');
        }
    
    //calculateInput.addEventListener('click', calculateUserInput);
    //function calculateUserInput(){
      //if(changeColorToFChecker){
        //let computedUserInput = Number(userInput.value)*1.8 + 32;
        
        //convertedValue.textContent = `${userInput.value} to °Fahrenheit is ${computedUserInput}`;
        
      //}else if(changeColorToCChecker){
        
        //computedUserInput = Number(userInput.value)/1.8 - 32;
 
        //convertedValue.textContent = `${userInput.value} to Celsius is ${computedUserInput}`
      //}
      
    //}

