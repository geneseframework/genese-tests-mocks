import { MyService } from './example.genese.tests';
describe('Test genese-tests example', () => {
    let service;
    beforeEach(() => {
        service = new MyService(undefined);
        service.externalService = {
            doSomething: () => {},
            helloMethod: () => ''
        }
    });
    it('should exist', () => {
        expect(service).toBeTruthy();
    });
    it('should call doSomething()', () => {
        spyOn(service.externalService, 'doSomething');
        service.myMethod('Dark Vador');
        expect(service.externalService.doSomething).toHaveBeenCalledWith('Dark Vador');
    });
    it('should change message value', () => {
        spyOn(service.externalService, 'helloMethod').and.returnValue('returnedMessage');
        service.myMethod('Dark Vador');
        expect(service.externalService.helloMethod).toHaveBeenCalledWith('Dark Vador');
        expect(service.message).toEqual('returnedMessage');
    })
    it('should change message value without name', () => {
        spyOn(service.externalService, 'helloMethod').and.returnValue('returnedMessage');
        service.myMethod('');
        expect(service.externalService.helloMethod).toHaveBeenCalledWith(' World !');
        expect(service.message).toEqual('returnedMessage');
    })
    it('should return 666', () => {
        const result = service.myMethod('Dark Vador');
        expect(result).toEqual(666);
    })
});
