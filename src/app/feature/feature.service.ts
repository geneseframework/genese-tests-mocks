import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  add(a: number, b: number): number {
    return a + b;
  }


  slc(a: string): string {
      return a.slice(2);
  }


  combo(a: string,  b: string): number {
      const zzzA = this.slc(a).length;
      const zzzB = this.slc(b).length;

      return this.add(zzzB, zzzA)
  }

}
