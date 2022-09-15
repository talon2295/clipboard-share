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
            console.log(this._electronService.clipboard.readText())
            //this.clipData.push(clipboard.readSync())
        }, 1000)
    }
}
