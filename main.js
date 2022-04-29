console.log('Bonjour')
// //let cors = require("cors");
// //app.use(cors());

async function getBeers(){
  try{
      const response = await axios.get("https://api.punkapi.com/v2/beers")
      console.log("reponse", response);
      
    
        for(let name of response.data){
          console.log(name)
        
        
        // create a new div element
        var afficher = document.createElement("afficher");

        // and give it some content
        var newContent = document.createTextNode(name.name);

        // add the text node to the newly created div
        afficher.innerHTML = newContent;

        // add the newly created element and its content into the DOM
        document.body.insertBefore(afficher, newContent);
}

  }catch (error){
      console.error(error);
  }
}

await getBeers()
