import { Injectable } from '@angular/core';
import { ExternalService } from './external.service';
import { Prop } from '../models/prop.model';


@Injectable({
    providedIn: 'root'
})
export class MyService {

    message = '';
    constructor(private externalService: ExternalService) {
    }
    myMethod(name: string): number {
        if (name) {
            this.message = this.externalService.helloMethod(name);
        } else {
            this.message = this.externalService.helloMethod(' World !');
        }
        this.externalService.doSomething(name);
        return 666;
    }

}

