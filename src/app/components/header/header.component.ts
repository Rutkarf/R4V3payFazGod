import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  public isMenuOpen: boolean = false;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
