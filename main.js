function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function getQuote(){
    fetch("https://api.kanye.rest/")
  .then((respsonse) => respsonse.json())
  .then((data) => {
      console.log(data);
      document.querySelector("#quote").innerHTML =
       `<h2><q> ${data.quote} </q></h2>`
  });
  }
  
  async function loop() {
    while (true) {
      getQuote();
      await waitForMs(3000);
    }
  }
  loop();
  