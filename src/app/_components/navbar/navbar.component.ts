import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
      this.mensagem();
  }
  mensagem(){
    
  }

 }

 