import { Component, OnInit } from '@angular/core';
import { ClipboardWatcherService } from './services/clipboard-watcher.service';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    clipData:any[] = [] ;

    constructor(private cbWatcher: ClipboardWatcherService, private notService: NotificationsService) {}

    ngOnInit(): void {
        this.cbWatcher.start().subscribe(cb => {
            this.notService.show(cb)
        })
    }

    closeWindow() {
        window?.close()
    }
}
