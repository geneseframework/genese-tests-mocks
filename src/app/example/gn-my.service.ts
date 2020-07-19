import { Injectable } from '@angular/core';
import { GnExternalService } from './gn-external.service';


@Injectable({
    providedIn: 'root'
})
export class GnMyService {

    prop = '';

    constructor(private externalService: GnExternalService) {
    }

    myMethod(name: string): number {
        if (name) {
            this.prop = this.externalService.helloMethod(name);
        } else {
            this.prop = this.externalService.helloMethod(' World !');
        }
        this.externalService.doSomething(name);
        return 666;
    }
}

