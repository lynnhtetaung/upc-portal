

import { Component } from '@angular/core';


@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
})

export class FileUploadComponent {
    // Options
    public title = "Nihon University's UPC System"; // title / heading
    public allowFileTypes = ".xls,.csv,.png,.py,.cc"; // file types
    public fileLimit = 5; // file limit
    public allowMultiple = true; // allow multiple files

    public payload: any;
    public message = '';

    constructor() { }

    ngOnInit() { }

    // Recieved files event
    getDroppedFiles(e) {
        // this.sendPayload(e);
        console.log('File Name >>', e[0]['name']);

        let file = new Blob(e, { type: "text/x-c++src" })
        let link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = e[0]['name'];
        link.click();
        link.remove();
    }
}