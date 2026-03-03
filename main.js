function viewDiscounts() {
    let budget = Number(document.getElementById('discounts-container').value);
    let discvalue =  Number(budget * 0.20).toFixed(2);
    
    document.getElementById('discounts-container').innerHTML = `
    <div class=" container bg-light p-3 rounded" id="discounts-container"> 
    <h2 class="text-black">Available Discount:</h2> <br>
    <button type="button" class="btn btn-outline-primary">Lenovo</button> <br>
    <button type="button" class="btn btn-outline-primary">Acer</button> <br>
    <button type="button" class="btn btn-outline-primary">Asus</button> <br>

    <p> Available discount:
    <span class="badge bg-success text-white">
        ${discvalue}
        </span>
        </p>

    </div>
    `
}

function viewStoreLocations() {
    document.getElementById('Store-locations-container').innerHTML = `
    <div class=" container bg-light p-4">
        <ul>
            <li>SM Megamall EDSA, corner Doña Julia Vargas Ave, Ortigas Center, Mandaluyong City, 1555 Metro Manila</li>
            <li> L420, GH PHASE 1 Mall Greenhills Shopping Center, Ortigas Ave, Greenhills, San Juan City, Metro Manila</li>
            <li>4th Floor, SM Megamall Cyberzone, Bldg. B Doña Julia Vargas Ave, Ortigas Center, Mandaluyong City, 1550 Metro Manila</li>
        </ul>
    </div>
    
   
    `
}


    