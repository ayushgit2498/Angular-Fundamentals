import { Injectable } from '@angular/core';

declare let toastr: any;
//This lets compiler know that we know about this toastr object and that it is global scoped

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
