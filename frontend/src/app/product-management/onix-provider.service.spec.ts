import {TestBed} from '@angular/core/testing';

import {OnixProviderService} from './onix-provider.service';
import {OnixCodeService} from '@eiswind/proto-client-api';
import {of} from "rxjs";

describe('OnixProviderService', () => {

  const mockService: Partial<OnixCodeService> = {
    findAllOnixCodes: jasmine.createSpy().and.returnValue(of({}))
  };


  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: OnixCodeService,
      useValue: mockService
    }]
  }));

  it('should be created', () => {
    const service: OnixProviderService = TestBed.get(OnixProviderService);
    expect(service).toBeTruthy();
  });
});
