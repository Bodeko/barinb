import { TestBed } from '@angular/core/testing';

import { RoomBookingPriceModule } from './room-booking-price.module';

describe('RoomBookingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingPriceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingPriceModule).toBeTruthy();
  });
});
