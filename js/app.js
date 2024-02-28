//nav search box
const navSearchInput=document.getElementById('navSearchBox');
const navSearchPhone=document.getElementById('navSearchPhone');
const navSearchBtn=document.getElementById('navSearchBtn');
const phoneContainer=document.getElementById('phoneContainer');
const homeBannerSearchInput=document.getElementById('homeBannerSearchInput');
const loaderIcon=document.getElementById('loaderIcon');

const showAllBtn=document.getElementById('showAllBtn');

function navSearchBox() {
    navSearchInput.style.display='block';
    navSearchInput.style.display='flex';
}
function searchThePhone() {
    const searchText=navSearchPhone.value;
    loadPhone(searchText);
}

