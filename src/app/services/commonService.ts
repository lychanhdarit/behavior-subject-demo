import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public test$ = new BehaviorSubject<number>(0);
  reset(): void{ 
    let number = Math.floor(Math.random() * 1000);
    this.test$.next(number);
  }
}
