# 🌶 Chilli Shop Web Application

A responsive single-page web application for selling chilli products.  
Built with **Angular**, **TypeScript**, and **Bootstrap**, it showcases dynamic product listings, a shopping cart, and routing with detailed product pages.

---

![Chillizone Screenshot](https://i.imgur.com/spLoUFe.jpeg)

---

## 🚀 Overview

- Browse products and view detailed information
- Add products to a shared shopping cart
- Responsive design using Bootstrap
- Dynamic routing and route parameters
- Component-based architecture with Angular services

---

## 🛠 Tech Stack

- **Angular**
- **TypeScript**
- **Bootstrap 5**
- **HTML5 / CSS3**
- **JSON** for product data

---

## ⚡ Features

- **Home Page** – Highlights featured products
- **Product List** – Displays all available chillis
- **Product Detail Page** – Dynamic route `/detailPage/:id` with detailed product info and “Add to Cart”
- **Shopping Cart** – Add/remove products, shared state across components
- **About Us & Products/Services Pages** – Static informational content
- **Responsive Layout** – Works across multiple screen sizes

---

![Chillizone Screenshot](https://i.imgur.com/gJkNzIw.png)

---

## 🏗 Architecture & Design

- **Component-based design** for modular UI
- **Routing** for navigation, including dynamic routes
- **Singleton service (`ProductCartService`)** for shared cart state
- **TypeScript models** ensure consistent product data
- **Bootstrap** for layout, spacing, and responsive design

---

## 📌 Key Implementation

### Product Detail Page

- Loads product dynamically using route parameters
- Displays image, name, rating, description, and price
- Add-to-cart functionality via shared cart service

### Cart Service

- Singleton service provided at root
- Stores current cart items
- Methods: `addProduct(product)` and `removeProduct(productId)`
- Ensures multiple components share the same cart state

---

![Chillizone Screenshot](https://i.imgur.com/MChrxv8.png)

---

## 🔧 Setup & Usage

Clone the repo:

````bash
git clone https://github.com/PatFerko/Chilli-Shop
cd chilli-Shop
npm install

## Development server

To start a local development server, run:

```bash
ng serve
````

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
