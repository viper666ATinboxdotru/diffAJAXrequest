/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockTasksService } from './mock-tasks.service';

describe('MockTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTasksService]
    });
  });

  it('should ...', inject([MockTasksService], (service: MockTasksService) => {
    expect(service).toBeTruthy();
  }));
});
