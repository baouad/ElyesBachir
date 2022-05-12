let card = document.getElementById("card")
let idB;
let nameB = ""
let imageB = ""
let taglineB = ""
let description = ""
async function getBeers() {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers')
    console.log(response);
    let titleA = [];
    for (const element of response.data) {
      idB = element.id
      nameB = element.name
      imageB = element.image_url
      taglineB = element.tagline
      description = element.description
      
      titleA.push(nameB);

      card.innerHTML += `
     
      <div class="container d-grid gap-10 col-12">
      <button type="button" class="btn btn-lite" data-bs-toggle="modal" data-bs-target= #myModal id="butt-${idB}">
      <p class="card-text" >${nameB}
      </button>
      <img src="${imageB}" class="card-img-top" alt="..." style="width: 18rem;"></p>
      <\div>
      ` 

    }

    for(let i = 0; i < titleA.length - 1; i++){
      let id = response.data.find(element => element.id == i)
      console.log(titleA[i]);
      let title = document.getElementById('title');
      title.innerHTML = titleA[i];

    }

      
      
    

         
    // console.log(titleA);



    // $('#modal').on('click', function() {
    //   $(".modal-body1").html('<h3>test</h3>');
    //   }); 

  } catch (error) {
  }
}

await getBeers()

