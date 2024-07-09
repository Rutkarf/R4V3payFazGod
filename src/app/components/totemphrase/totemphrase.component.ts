import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totemphrase',
  templateUrl: './totemphrase.component.html',
  styleUrls: ['./totemphrase.component.scss']
})
export class TotemphraseComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Propriétés existantes
  totemPhrase: string = "Votre phrase totem ici";
  editedTotemPhrase: string = "";
  editing: boolean = false; 
  
    // Méthodes existantes
    startEditing() {
      this.editedTotemPhrase = this.totemPhrase;
      this.editing = true;
    }
  
    saveTotemPhrase() {
      this.totemPhrase = this.editedTotemPhrase;
      this.editing = false;
    }
  
    cancelEditing() {
      this.editedTotemPhrase = this.totemPhrase;
      this.editing = false;
    }

}
