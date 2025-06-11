import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, TripListing],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Travlr Getaways Admin!';
}
