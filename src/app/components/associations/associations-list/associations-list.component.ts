import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrls: ['./associations-list.component.scss'],
  providers: [MessageService]
})
export class AssociationsListComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event:FileUploadEvent) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'success', summary: 'Fichier importé', detail: ''});
  }
}
