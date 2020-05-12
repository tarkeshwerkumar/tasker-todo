import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoToastrService {

  constructor(private toastr: ToastrService) { }

  successToast(msg: string, header: string) {
    this.toastr.success(msg, header);
  }

  warningToast(msg: string, header: string) {
    this.toastr.warning(msg, header);
  }

}
