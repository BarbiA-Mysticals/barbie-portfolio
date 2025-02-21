function updateCollectables() {

    // Start counting total coins collected
    let count = 0;

    
    // Define list of pages
    const pages = [ 'art','about', 'games'];
    
    // For each page in my list
    for (let page of pages) {
      
      // If page coin is already collected
      if (localStorage.getItem(page) === "collected") {
        
        // Update count
        count++;
  
        // Find coin to be collected
        const toBeCollected = document.querySelector(`.to-be-collected[data-page="${ page }"]`);
  
        // If it exists
        if (toBeCollected) {
          // Remove it
          toBeCollected.remove()
        }
  
        // Find slot
        const slot = document.querySelector(`.coin[data-page="${ page }"]`);
  
        // Add collected class to slot
        slot.classList.add("collected");

        if (count == 3){
          //Targeting image with the id introimg and changing the img when the required number of coins are collected
    

          document.getElementById("introimage").src = "./images/logo.PNG"
        }



      }

      
    }
  
    // Update count display
    const output = document.querySelector('#collectables output');
    output.textContent = count;
  }
  
  function collect(coin) {
  
    //Targeting the audio with id blink

    Audio = document.querySelector("#blink")


    // Find page that clicked coin belongs to
    const page = coin.dataset.page;

  
    // Set coin to collected in local storage
    localStorage.setItem(page, "collected");
  
    // Remove coin from page
    coin.remove();

    //play sound when coin item is clicked
    Audio.play()

  
    // Call function after coin is clicked
    updateCollectables();


  }

  
  
  // Call function when page loads
  updateCollectables();
  