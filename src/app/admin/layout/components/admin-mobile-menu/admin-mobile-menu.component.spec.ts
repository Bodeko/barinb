import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminMenuService } from '@app/admin/menu';

import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

describe('AdminMobileMenuComponent', () => {
  let component: AdminMobileMenuComponent;
  let fixture: ComponentFixture<AdminMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminMobileMenuComponent],
      providers: [
        {
          provide: AdminMenuService,
          useValue: {
            links: jest.fn(() => []),
          } as Partial<AdminMenuService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
