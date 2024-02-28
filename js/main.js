const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}
const displayPhone = (phones) => {
    phoneContainer.textContent='';

    if (phones.length > 10) {
        showAllBtn.classList.remove('hidden');
    }else{
        showAllBtn.classList.add('hidden');
    }

    
        phones=phones.slice(0,10);
    
    phones.forEach(phone => {
        const singlePhone = document.createElement('div');
        singlePhone.classList = `card w-auto bg-base-100 shadow-xl m-4 hover:border`;
        singlePhone.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}"
                    class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2> 
                <p class="capitalize">click to see more details</p>
                <div class="card-actions">
                    <button class="btn btn-primary capitalize" onclick="seeMoreDetails('${phone.slug}')">see more</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(singlePhone);
    });
    loaderIconAnimation(false);
};

const homeBannerSearchBtn=()=>{
    loaderIconAnimation(true);
    const searchText=homeBannerSearchInput.value;
    loadPhone(searchText);
}

const loaderIconAnimation=(isLoading)=>{
    if (isLoading) {
        
        loaderIcon.classList.remove('hidden');
    }else{
        
        loaderIcon.classList.add('hidden');
    }
}

const seeMoreDetails=async (id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json();
    showDetailsModal(data);
}

const showDetailsModal=(phone)=>{
    const modalContainer=document.getElementById('showModalContainer');
    console.log(phone);
    modalContainer.innerHTML=`

        <img class="mx-auto" src="${phone.data.image}" class="rounded-xl" />
        <h2 class="card-title">${phone.data.name}</h2> 
        <p class="card-title">storage:${phone.data.mainFeatures.storage}</p> 
        <p class="card-title">Display:${phone.data.mainFeatures.displaySize}</p> 
        <p class="card-title">chipSet:${phone.data.mainFeatures.chipSet}</p> 
        <p class="card-title">memory:${phone.data.mainFeatures.memory}</p> 
        <p class="card-title">sensors:${phone.data.mainFeatures.sensors}</p> 
        <p class="card-title">others:${phone.data.others}</p> 
        <p class="card-title">USB:${phone.data.others.USB}</p> 
        <p class="card-title">GPS:${phone.data.others.GPS}</p> 
    `
    moreDetailsModal.showModal();
}




function newElementValueUpdate(valueId,value) {

    // update
    const totalvalueElement = document.getElementById(valueId);
    totalvalueElement.innerText = value;
}