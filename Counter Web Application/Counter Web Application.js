(function(){
    const button = document.querySelectorAll(".btn-counter");
    let count = 0;
    const counter = document.querySelector(".CounterMachine");
    const countercontainer = document.querySelector(".counter");

    button.forEach(function(button){
        button.addEventListener("click", function() {
            // If the button has the class 'desc-btn', decrement the count
            if(button.classList.contains("desc-btn")){
                count--;
            }
            // Otherwise, increment the count
            else{
                count++;
            }
            
            // Update the counter display with the current count
            counter.textContent = count;

            // If count is positive, apply positive class and remove negative
            if(count > 0){
                countercontainer.classList.remove("negative");
                countercontainer.classList.add("positive");
            }
            // If count is negative, apply negative class and remove positive
            else if(count < 0){
                countercontainer.classList.remove("positive");
                countercontainer.classList.add("negative");
            }
            // If count is zero, remove both classes
            else{
                countercontainer.classList.remove("negative");
                countercontainer.classList.remove("positive");
            }
        });
    });
})();
