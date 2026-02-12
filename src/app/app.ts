import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AppProductList } from './components/product-list/product-list';
import { Footer } from './components/footer/footer';
import { AboutUs } from './components/about-us/about-us';
import { DetailPage } from './components/detail-page/detail-page';
import { UpperHeader } from './components/upper-header/upper-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, UpperHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('FE4-Exam-3-Patricia_Ferkova');
}
