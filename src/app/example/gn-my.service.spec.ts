import { async } from '@angular/core/testing';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { GnMyService } from './gn-my.service';

import { GnExternalService } from './gn-external.service';

describe('GnMyService', () => {
  let service;

  beforeEach(() => {
    service = new GnMyService(undefined);
  });

  it('should run #myMethod()', async () => {
    service.externalService = service.externalService || {};
    spyOn(service.externalService, 'helloMethod');
    spyOn(service.externalService, 'doSomething');
    service.myMethod({});
    // expect(service.externalService.helloMethod).toHaveBeenCalled();
    // expect(service.externalService.doSomething).toHaveBeenCalled();
  });

});
