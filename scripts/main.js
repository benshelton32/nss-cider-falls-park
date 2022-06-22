import { currentGuestsList } from "./guests.js"
import { servicesList } from "./services.js"
import { areasList } from "./parkAreas.js"

const mainContainer = document.querySelector("#container")

const contentHTML = `
<section class="parkServicesAndAreas">
    <article class="parkServices">
        <h2>ParkServices</h2>
        ${servicesList()}
    </article>
    
    <article class="parkAreas">
        <h2 class="areaListHeader">Park Areas</h2>
        ${areasList()}
    </article>
</section>

<section class="currentParkGuests">
    <h2>Current Park Guests</h2>
    ${currentGuestsList()}
</section>
`

mainContainer.innerHTML = contentHTML