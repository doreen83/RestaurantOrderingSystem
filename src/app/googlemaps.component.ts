import { Component } from '@angular/core'
import { AgmMarker } from '@agm/core'

@Component({
    selector: 'google-maps',
    styles: [`
        agm-map {
            height: 300px;
        }
    `],
    template: `
            <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
                <agm-marker [latitude]="lat" [longitude] = "lng"></agm-marker>
            </agm-map>
            `
})
export class GooglemapsComponent {
   lat: number = 41.938717;
   lng: number = -87.644644;
   zoom: number = 14;
}