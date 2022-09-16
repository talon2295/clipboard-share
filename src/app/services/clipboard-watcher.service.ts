import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipboardWatcherService {

    constructor(private electron: ElectronService) { 
    }

    start(watchTime = 1000) { //ms
        return new Observable<string>((subscriber) => {
            let lastCb = "" ;
            let intervallTimer = setInterval(() => {
                if(this.electron.isElectronApp) {
                    let cb = this.electron.clipboard.readText() ;
                    if(cb != lastCb) {
                        console.log("NEW CLIPBOARD", cb, lastCb)
                        lastCb = cb ;
                        subscriber.next(cb) ;
                    }
                }
            }, watchTime);

            return {
                unsubscribe() {
                    if(intervallTimer)
                        clearInterval(intervallTimer) ;
                    
                    console.log("STOPPING INTERVALL")
                }
            }
        })
    }

}
