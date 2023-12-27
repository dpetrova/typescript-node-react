// requirements to can add marker
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;    
}

export class CustomMap {
    private googleMap: google.maps.Map;
    
    constructor(divId: string) {
        // "!" tells TS that you sure it's not null or undefined
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    // to can add marker argument must be of type Mappable (must have location with lat and lng property)
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        // show popup info window when click on marker
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }    
}