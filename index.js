var buttonCollapse1 = document.getElementById("collapseButton1");
var buttonCollapse2 = document.getElementById("collapseButton2");
var buttonCollapse3 = document.getElementById("collapseButton3");
var buttonMoreInfo1 = document.getElementById("initiationInfoButton");
var buttonMoreInfo2 = document.getElementById("specializationInfoButton");
var buttonMoreInfo3 = document.getElementById("advancedInfoButton");
var buttonBuyNow = document.getElementById("buyNowButton");


// Función de flecha para manejar el evento de clic
const topicsCollapse = (event) => {
    let button = event.currentTarget;
    if (button.getAttribute("aria-expanded") === "false") {
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi-caret-down-square" viewBox="0 0 16 16"> \
        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z"/> \
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/> \
         </svg >';
    } else {
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi-caret-up-square" viewBox="0 0 16 16"> \
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/> \
        <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/> \
        </svg>';
    }
};

const seeMoreInfo = (event) => {
    let button = event.currentTarget;
    let buttonCollapseId = button.getAttribute("href").split("#")[1];
    let divCollapse = document.getElementById(buttonCollapseId);
    let buttonCollapse = divCollapse.getElementsByTagName("button")[0];
    if (buttonCollapse.getAttribute("aria-expanded") === "false") {
        buttonCollapse.click();
    }
}


buttonCollapse1.addEventListener("click", topicsCollapse);
buttonCollapse2.addEventListener("click", topicsCollapse);
buttonCollapse3.addEventListener("click", topicsCollapse);
buttonMoreInfo1.addEventListener("click", seeMoreInfo);
buttonMoreInfo2.addEventListener("click", seeMoreInfo);
buttonMoreInfo3.addEventListener("click", seeMoreInfo);


$('#exampleModalCenter').on('shown.bs.modal', function () {
    $('#buyNowButton').trigger('focus')
})


// const showModalForPurchase = (event) => {
//     let modalforPurchase = document.getElementById("modalForPurchase");
//     modalforPurchase
// }

// // Modal for purchase
// buttonBuyNow.addEventListener("click", showModalForPurchase);