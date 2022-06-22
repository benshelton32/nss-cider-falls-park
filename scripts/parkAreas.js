import { getParkAreas, getGuestAreas } from "./database.js";

const parkAreas = getParkAreas()
const guestAreas = getGuestAreas()

export const areasList = () => {
    let areasListHTML = ""

    for (const parkArea of parkAreas) {
        areasListHTML += `<div id="area--${parkArea.id}" class="parkAreaNames">${parkArea.name}</div>`
    }

    return areasListHTML
}

const filterAreaByNumberOfGuests = (parkArea) => {
    let numberOfGuests = 0

    for (const guestArea of guestAreas) {
        if (guestArea.areaId === parkArea.id) {
            numberOfGuests ++
        }
    }
    return numberOfGuests
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [, areaId] = itemClicked.id.split("--")

            for (const parkArea of parkAreas) {
                if (parkArea.id === parseInt(areaId)) {

                    const numberOfGuests = filterAreaByNumberOfGuests(parkArea)

                    window.alert(`There are ${numberOfGuests} guests in this area`)
                }
            }
        }
    }
)