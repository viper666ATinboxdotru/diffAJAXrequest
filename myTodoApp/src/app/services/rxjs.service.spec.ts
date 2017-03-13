/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RxjsService } from './rxjs.service';

describe('RxjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsService]
    });
  });

  it('should ...', inject([RxjsService], (service: RxjsService) => {
    expect(service).toBeTruthy();
  }));
});
