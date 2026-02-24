function viewDiscounts() {
    const discountsContainer = document.getElementById('discounts-container');
    
}

function viewStoreLocations() {
    const discountsContainer = document.getElementById('Store-locations-container');
    discountsContainer.innerHTML = `
        <h3>Store Locations</h3>
        <ul>
            <li>Store 1:  Cyberzone, Building B, SM Megamall EDSA, cor Doña Julia Vargas Ave, Ortigas Center, Mandaluyong City, 1555 Metro Manila</li>
            <li>Store 2:  439, SM Mega Mall Building - B, EDSA Cor. Julia Vargas Avenue, Ortigas Center, Mandaluyong City, 1550 Metro Manila</li>
            <li>Store 3: 3rd Floor, Glorietta 2, Ayala Center, Makati City, Metro Manila</li>
        </ul>
    `;
}

let budget = document.getElementById('budget').value;