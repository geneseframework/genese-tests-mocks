import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExternalService {

    aPropertyWhichWillNotBeUsed = 3;

    helloMethod(name: string) {
        return `Hello ${name} !`;
    }

    doSomething(name: string) {
        // Do something
    }

    willNotBeCalledInMyService() {

    }
}

