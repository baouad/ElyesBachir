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
     
      <div class="d-grid gap-12">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target= #`+taglineB+`>
      <p class="card-text" >`+taglineB+`
      <img src="`+imageB+`" class="card-img-top" alt="..."></p>
      </button>
      <\div>
    
      
      <!-- Modal -->
      <div class="modal fade" id=`+taglineB+` tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="card" style="width: 18rem;">
            <img src="`+imageB+`" class="card-img-top" alt="...">
            <div class="`+nameB+`" id="name">
              <p class="card-text" >`+taglineB+`</p>
              <p class="des"> `+description+`</p>
            </div>
          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    
      
   
    `
    }


  } catch (error) {
  }
}

await getBeers()



