/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XhrServiceService } from './xhr-service.service';

describe('XhrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XhrServiceService]
    });
  });

  it('should ...', inject([XhrServiceService], (service: XhrServiceService) => {
    expect(service).toBeTruthy();
  }));
});
