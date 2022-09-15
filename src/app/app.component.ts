import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    clipData:any[] = [] ;

    constructor(private _electronService: ElectronService) {

    }
    ngOnInit(): void {
        setInterval(async () => {
            if(this._electronService.isElectronApp) {
                let rt = this._electronService.clipboard.readText()
                //let fl = this._electronService.clipboard.read()
                console.log(rt, this._electronService.clipboard.availableFormats())
            }
            else {
                console.log("not electrron")
            }
        }, 1000)
    }
}
