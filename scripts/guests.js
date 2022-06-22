import { getGuests } from "./database.js";

const guests = getGuests()

export const currentGuestsList = () => {
    let guestListHTML = "<ul>"

    for (const guest of guests) {
        guestListHTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    guestListHTML += "</ul>"

    return guestListHTML
}