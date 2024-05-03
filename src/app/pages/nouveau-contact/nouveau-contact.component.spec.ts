import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauContactComponent } from './nouveau-contact.component';

describe('NouveauContactComponent', () => {
  let component: NouveauContactComponent;
  let fixture: ComponentFixture<NouveauContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
