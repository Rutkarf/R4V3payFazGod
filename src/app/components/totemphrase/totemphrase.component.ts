import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-totemphrase',
  templateUrl: './totemphrase.component.html',
  styleUrls: ['./totemphrase.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add necessary modules here
})
export class TotemphraseComponent implements OnInit {
  totemPhrase: string = "Votre phrase totem ici";
  editedTotemPhrase: string = "";
  editing: boolean = false; 

  constructor() {}

  ngOnInit(): void {
    // Méthode ngOnInit correctement implémentée
  }

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

