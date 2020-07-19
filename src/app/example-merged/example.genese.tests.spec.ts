import { MyService } from './example.genese.tests';


fdescribe('Test genese-tests example', () => {
    let service;
    // let mockExternalService;

    beforeEach(() => {
        service = new MyService(undefined);
        service.externalService = {
            doSomething: (name: string) => {},
            helloMethod: (name: string) => {}
        }
    });

    it('should exist', () => {
        expect(service.toBeTruthy);
    });

    it('should call doSomething()', () => {
        spyOn(service.externalService, 'doSomething');
        service.myMethod('Dark Vador');
        expect(service.externalService.doSomething).toHaveBeenCalledWith('Dark Vador');
    });
});
