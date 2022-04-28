console.log('Bonjour')
//let cors = require("cors");
//app.use(cors());

async function getBeers(){
  try{
      const response = await axios.get("http://entreprise.vinko-roditi.com/api/entreprise/list")
      console.log("reponse", response);
      let afficher = document.getElementById('afficher');
      for (var i; i < afficher.length; i++)
      {
        afficher.innerHTML = arricher[i]; 
      }
           
  }catch (error){
      console.error(error);
  }
}

await getBeers()

