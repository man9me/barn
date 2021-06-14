import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';

//intercepter добавляется к HttpInterceptor, работает как сервер, провайдется в модуле
// причем в порядке исполнения
//  {
//       provide: HTTP_INTERCEPTORS,
//       useClass: LoggingInterceptorService,
//       multi: true
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptorService,
//       multi: true
//     }

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //влазиет перед реквестом соответствено 2аргумент
    //функция которую нужно выполнить после него
    const modifiedRequest = req.clone({
      //сам прерываймый реквест нельзя модифицировать, но можно кланировать и изменить
      headers: req.headers.append('Auth', 'xyz'),
    });
    return next.handle(modifiedRequest); // обязательно ретерн с некс-хендл

    //тут можно встроется в ретерн часть реквеста
    // return next.handle(modifiedRequest).
    // pipe(tap(e=>{if (e.type===HttpEventType.Response){}}));
  }
}
