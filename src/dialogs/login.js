(function () {
    "use strict";
    
        Office.onReady()
            .then(function() {
    
                // TODO1: Assign handler to the OK button.
                document.getElementById("mc-login").onclick = openMC;
                function openMC(){
                    window.open('https://google.com');
                }
            });
    
        // TODO2: Create the OK button handler
    
    }());