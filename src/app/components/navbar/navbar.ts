import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  get productsInCart() {
    return this._service.products.length;
  }

  constructor(private _router: Router, private _service: ProductCartService) {}

  cartIcon() {
    this._router.navigate(['cart']);
  }
}
