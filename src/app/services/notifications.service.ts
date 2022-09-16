import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
    constructor(private electron: ElectronService) { }

    show(body:string) {
       
    }
}
