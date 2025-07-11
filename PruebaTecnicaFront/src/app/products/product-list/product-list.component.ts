import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productForm: FormGroup;
  products: any[] = [];
  allProducts: any[] = [];
  limit = 5;
  offset = 0;
  
  showModal = false;
  showToast = false;
  modalPage = 1;
  productsPerPage = 5;  

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {

    this.productService.getAll(this.limit, this.offset).subscribe({
      next: (data: any) => this.products = data,
      error: () => alert('Error al cargar productos')
    });

    this.productService.getAll(1000, 0).subscribe({
      next: (data: any) => this.allProducts = data,
      error: () => console.warn('Error al cargar productos para el modal')
    });

  }

  createProduct() {
    if (this.productForm.valid) {
      this.productService.create(this.productForm.value).subscribe({
        next: () => {
          this.productForm.reset();
          this.loadProducts();
          this.showToast = true;
          setTimeout(() => this.showToast = false, 3000);
        },
        error: () => alert('Error al agregar producto')
      });
    }
  }

  nextPage() {
    this.offset += this.limit;
    this.loadProducts();
  }

  prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadProducts();
    }
  }

  get paginatedProducts() {
  const start = (this.modalPage - 1) * this.productsPerPage;
  return this.allProducts.slice(start, start + this.productsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.allProducts.length / this.productsPerPage);
  }

  nextModalPage() {
    if (this.modalPage < this.totalPages) this.modalPage++;
  }

  prevModalPage() {
    if (this.modalPage > 1) this.modalPage--;
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: () => alert('Error al eliminar el producto')
    });
  }

}
