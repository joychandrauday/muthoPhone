const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}
const displayPhone = phones => {
    phoneContainer.textContent='';

    if (phones.length>10) {
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
                    <button class="btn btn-primary capitalize">see more</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(singlePhone);
    });
};

const homeBannerSearchBtn=()=>{
    const searchText=homeBannerSearchInput.value;
    loadPhone(searchText);
}

loadPhone();