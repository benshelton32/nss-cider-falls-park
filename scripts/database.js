const database = {
    guests: [
        {id: 1, name: "Alphonse Meron"}, 
        {id: 2,name: "Damara Pentecust"}, 
        {id: 3, name: "Anna Bowton"}, 
        {id: 4, name: "Hunfredo Drynan"}, 
        {id: 5, name: "Elmira Bick"}, 
        {id: 6, name: "Bernie Dreger"}, 
        {id: 7, name: "Rolando Gault"}, 
        {id: 8, name: "Tiffanie Tubby"}, 
        {id: 9, name: "Tomlin Cutill"}, 
        {id: 10, name: "Arv Biddle"}
    ],  
    guestAreas: [
        {id: 1, guestId: 1, areaId: 6},
        {id: 2, guestId: 2, areaId: 4},
        {id: 3, guestId: 3, areaId: 2},
        {id: 4, guestId: 4, areaId: 1},
        {id: 5, guestId: 5, areaId: 3},
        {id: 6, guestId: 6, areaId: 5},
        {id: 7, guestId: 7, areaId: 6},
        {id: 8, guestId: 8, areaId: 1},
        {id: 9, guestId: 9, areaId: 1},
        {id: 10, guestId: 10, areaId: 5}
    ],
    parkAreas: [
        {id: 1, name: "Lodge", sectionLocation: "NW"},
        {id: 2, name: "Lost Wolf Hiking Trail", sectionLocation: "N"},
        {id: 3, name: "Chamfort River", sectionLocation: "NE"},
        {id: 4, name: "Gander River", sectionLocation: "SW"},
        {id: 5, name: "Campgrounds", sectionLocation: "S"},
        {id: 6, name: "Pine Bluff Trails", sectionLocation: "SE"}
    ],
    areaServices: [
        {id: 1, serviceId: 7, areaId: 1},
        {id: 2, serviceId: 8, areaId: 1},
        {id: 3, serviceId: 9, areaId: 1},
        {id: 4, serviceId: 5, areaId: 1},
        {id: 5, serviceId: 4, areaId: 2},
        {id: 6, serviceId: 5, areaId: 2},
        {id: 7, serviceId: 6, areaId: 2},
        {id: 8, serviceId: 1, areaId: 3},
        {id: 9, serviceId: 2, areaId: 3},
        {id: 10, serviceId: 3, areaId: 3},
        {id: 11, serviceId: 3, areaId: 4},
        {id: 12, serviceId: 4, areaId: 4},
        {id: 13, serviceId: 9, areaId: 5},
        {id: 14, serviceId: 7, areaId: 5},
        {id: 15, serviceId: 8, areaId: 5},
        {id: 16, serviceId: 4, areaId: 6},
        {id: 17, serviceId: 5, areaId: 6},
        {id: 18, serviceId: 10, areaId: 6}
    ],
    services: [
        {id: 1, name: "Rafting"},
        {id: 2, name: "Canoeing"},
        {id: 3, name: "Fishing"},
        {id: 4, name: "Hiking"},
        {id: 5, name: "Picnicking"},
        {id: 6, name: "Rock Climbing"},
        {id: 7, name: "Lodging"},
        {id: 8, name: "Parking"},
        {id: 9, name: "Information"},
        {id: 10, name: "Ziplines"}
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}

export const getGuestAreas = () => {
    return database.guestAreas.map(guestArea => ({...guestArea}))
}