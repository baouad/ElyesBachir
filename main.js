let card = document.getElementById("card")
let nameB = ""
let imageB = ""
let taglineB = ""
let description = ""
async function getBeers() {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers')
    console.log(response);

    // var myModal = document.getElementById('myModal')
    // var myInput = document.getElementById('myInput')

    // myModal.addEventListener('shown.bs.modal', function () {
    //   myInput.focus()
    // })
    
    for (const element of response.data) {   
      nameB = element.name
      imageB = element.image_url
      taglineB = element.tagline
      description = element.description

      card.innerHTML += `
     
      <div class="container d-grid gap-10 col-12">
      <button type="button" class="btn btn-lite" data-bs-toggle="modal" data-bs-target= #myModal>
      <p class="card-text" >`+nameB+`
      </button>
      <img src="`+imageB+`" class="card-img-top" alt="..." style="width: 18rem;"></p>
      <\div>
      ` 
    }

  } catch (error) {
  }
}

await getBeers()

 





