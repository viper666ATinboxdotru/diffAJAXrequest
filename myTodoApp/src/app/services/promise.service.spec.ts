/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromiseService } from './promise.service';

describe('PromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromiseService]
    });
  });

  it('should ...', inject([PromiseService], (service: PromiseService) => {
    expect(service).toBeTruthy();
  }));
});
