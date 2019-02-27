
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { LoaderService } from './shared/loader-service';

import sampleConfig from './.samples.config';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.display(true);
        const authReq = req.clone({
            url: sampleConfig.apiUrl + req.url,
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(authReq).pipe(
            map(event => {
                return event;
            }),
            catchError(error => {
                return Observable.throw(error);
            }),
            finalize(() => {
                this.loaderService.display(false);
            })
        );
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const authReq = req.clone({
    //         url: sampleConfig.apiUrl + req.url,
    //         headers: req.headers.set('Content-Type', 'application/json')
    //     });
    //     // send cloned request with header to the next handler.
    //     return next.handle(authReq),
    //     finalize(() => this.loaderService.display(false)));;
    // }
}
