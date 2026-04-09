import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [MatIcon,
    MatMenu,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
