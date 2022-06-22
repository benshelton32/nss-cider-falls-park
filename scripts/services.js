import { getServices, getAreaServices, getParkAreas } from "./database.js";

const services = getServices()
const areaServices = getAreaServices()
const parkAreas = getParkAreas()

export const servicesList = () => {
    let servicesListHTML = "<ul>"

    for (const service of services) {
        servicesListHTML += `<li id="service--${service.id}">${service.name}</li>`
    }
    servicesListHTML += "</ul>"

    return servicesListHTML
}

const filterServicesByArea = (service) => {
    let arrayOfAreasForEachService = []

    for (const areaService of areaServices) {
        if (service.id === areaService.serviceId) {
            arrayOfAreasForEachService.push(areaService)
        }
    }

    return arrayOfAreasForEachService
}

const getAreaNames = (arrayOfAreasForEachService) => {
    let areaNamesForEachService = ""
    let arrayofAreaNames = []

    for (const areaService of arrayOfAreasForEachService) {
        for (const parkArea of parkAreas) {
             if (areaService.areaId === parkArea.id) {
                arrayofAreaNames.push(parkArea.name)
            }
        }
    }
            
    if (arrayofAreaNames.length === 1) {
        areaNamesForEachService = `${arrayofAreaNames[0]}`
    } else if (arrayofAreaNames.length === 2) {
        areaNamesForEachService = `${arrayofAreaNames[0]} and ${arrayofAreaNames[1]}`
    } else if (arrayofAreaNames.length === 3) {
        areaNamesForEachService = `${arrayofAreaNames[0]}, ${arrayofAreaNames[1]}, and ${arrayofAreaNames[2]}`
    }

    return areaNamesForEachService
}

// const getAreaNames = (arrayOfAreasForEachService) => {
//     let arrayofAreaNames = []

//     for (const areaService of arrayOfAreasForEachService) {

//         for (const parkArea of parkAreas) {

//             if (areaService.areaId === parkArea.id) {
//                 arrayofAreaNames.push(parkArea.name)
//             }
//         }
//     }

//     return arrayofAreaNames
// }

// const getAreaNamesHTML = (arrayofAreaNames) => {
//     let areaNamesForEachService = ''

//     if (arrayofAreaNames.length === 1) {
//         areaNamesForEachService = `${arrayofAreaNames[0]}`
//     } else if (arrayofAreaNames.length === 2) {
//          areaNamesForEachService = `${arrayofAreaNames[0]} and ${arrayofAreaNames[1]}`
//     } else if (arrayofAreaNames.length === 3) {
//          areaNamesForEachService = `${arrayofAreaNames[0]}, ${arrayofAreaNames[1]}, and ${arrayofAreaNames[2]}`
//     }

//     return areaNamesForEachService
// }

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")
            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const servicesOfferedInTheArea = filterServicesByArea(service)
                    const areaNames = getAreaNames(servicesOfferedInTheArea)
                    // const areaNamesArray = getAreaNames(servicesOfferedInTheArea)
                    // const areaNames = getAreaNamesHTML(areaNamesArray)
            
                    window.alert(`${service.name} is available in ${areaNames}`)
                }
            }
        }
    }
)