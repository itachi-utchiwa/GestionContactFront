/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NouveauContactService } from './nouveau-contact.service';

describe('Service: NouveauContact', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NouveauContactService]
    });
  });

  it('should ...', inject([NouveauContactService], (service: NouveauContactService) => {
    expect(service).toBeTruthy();
  }));
});
