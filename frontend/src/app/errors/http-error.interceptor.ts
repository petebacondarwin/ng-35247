import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NbDialogService} from "@nebular/theme";
import {CommunicationErrorDialogComponent} from "./communication-error-dialog/communication-error-dialog.component";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private dialogService: NbDialogService) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(request.url.startsWith('/api/auth')){
          return throwError(error)
        }
        if(error.status === 204){
          return throwError(error)
        }
        if(error.status === 404){
          return throwError(error)
        }

        const data = {
          reason: error && error.error ? JSON.stringify(error.error) : '',
          status: error.status
        };
        this.dialogService.open(CommunicationErrorDialogComponent, { context:  { reason: data.reason, status: data.status }});
        return EMPTY;
      }))
  }


}


