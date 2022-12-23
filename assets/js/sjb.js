$(document).ready(function(){
  var navHeight = $(".navbar").innerHeight();
  $("main").css("padding-top",navHeight)
  $(".top-heading").css("top",navHeight)
})

// Following based on
// https://getbootstrap.com/docs/5.2/components/modal/#varying-modal-content
const modalPhoto = document.getElementById('modalPhoto')
if (modalPhoto) {
  modalPhoto.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget

    // Extract info from data-bs-* attributes
    const photo = button.getAttribute('data-bs-photo')
  
    // Update the modal's content.
    const modalImage = modalPhoto.querySelector('.photo-modal-image')
    const modalSaveButton = modalPhoto.querySelector('.photo-modal-save')
  
    modalImage.src = photo
    modalSaveButton.href = photo
  })
}
