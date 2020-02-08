import {async, getTestBed, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import {HttpErrorInterceptor} from "./http-error.interceptor";
import {NbDialogModule, NbDialogService, NbThemeModule} from "@nebular/theme";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";

let service: NbDialogService
let httpMock: HttpTestingController;
let http: HttpClient

describe('HttpErrorInterceptor', () => {

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NbDialogModule.forRoot(),
        NbThemeModule.forRoot(),
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        },
      ],
    });

    const injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    http = injector.get(HttpClient);
  }));

  it('should open errordialog', () => {
    service = getTestBed().get(NbDialogService);
    spyOn(service, "open").and.returnValue({});

    http.get("/test").subscribe(() => {
    })

    const data = {name: 'Invalid request parameters'};
    const mockErrorResponse = {status: 500, statusText: 'Bad Request'};

    httpMock.expectOne('/test').flush(data, mockErrorResponse);
    expect(service.open).toHaveBeenCalled();
  });

  it('should not open errordialog on success', () => {
    service = getTestBed().get(NbDialogService);
    spyOn(service, "open").and.returnValue({});

    http.get("/test").subscribe(() => {
    })


    httpMock.expectOne('/test').flush({});
    expect(service.open).not.toHaveBeenCalled()
  });

  it('should not open errordialog on auth api', () => {
    service = getTestBed().get(NbDialogService);
    spyOn(service, "open").and.returnValue({});

    http.get("/api/auth").subscribe(res => {
    }, err => {})

    const data = {name: 'Invalid request parameters'};
    const mockErrorResponse = {status: 500, statusText: 'Bad Request'};

    httpMock.expectOne('/api/auth').flush(data, mockErrorResponse);

    expect(service.open).not.toHaveBeenCalled();
  });


  it('should not open errordialog on 204 no content', () => {
    service = getTestBed().get(NbDialogService);
    spyOn(service, "open").and.returnValue({});

    http.get("/test").subscribe(res => {
    }, err => {})

    const data = {name: 'No content'};
    const mockErrorResponse = {status: 204, statusText: 'No Content'};

    httpMock.expectOne('/test').flush(data, mockErrorResponse);

    expect(service.open).not.toHaveBeenCalled();
  });

});
