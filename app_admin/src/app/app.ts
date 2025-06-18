import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Travlr Getaways Admin!';
}
