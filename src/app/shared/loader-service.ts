import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private counter = 0;
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    display(value: boolean) {
        if (value && ++this.counter === 1) {
            this.status.next(true);
        } else if (!value && --this.counter === 0) {
            this.status.next(false);
        }
    }
}
