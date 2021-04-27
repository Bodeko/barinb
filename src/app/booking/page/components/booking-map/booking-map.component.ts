import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { MapMarkerConfig } from '@app/maps/common';

@Component({
  selector: 'app-booking-map',
  templateUrl: './booking-map.component.html',
  styleUrls: ['./booking-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingMapComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {
      lat: 59.93839227045331,
      lng: 30.360033589998572,
    },
    zoom: 14,
  };

  mapMarkers$!: Observable<MapMarkerConfig[]>;
  markerOptions: google.maps.MarkerOptions = { draggable: false, icon: '/' };

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.mapMarkers$ = this.bookingService.mapMarkers$;
  }

  onMapMarkerClicked(event: MapMarkerConfig): void {
    console.log(event);
  }
}