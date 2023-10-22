(function() {

    let Display = document.querySelector('.Display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btnclear');
    let equal = document.querySelector('.btnequal');

    buttons.forEach(function(button){ //forEach checks all buttons to see if any were clicked
        button.addEventListener('click', function(e){ // If button is clicked the function will perform
            let value = e.target.dataset.num; // "value" variable now retrieves the value from data-num attribute
            Display.value += value;
        })
    });

equal.addEventListener('click', function(e){
    if(Display.value === ''){
        Display.value = ""; // this leaves the display empty if no equation has been performed
    }else{
        let answer = eval(Display.value);
        Display.value = answer; // pushes the answer to the display

    }
})

clear.addEventListener('click', function(e){
    Display.value = "";
})

})();