import {Component, NgZone, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookProductView, ProductService} from '@eiswind/proto-client-api';
import {RowEvent} from "ag-grid-community";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  NEW_BOOK_ID = '00000000-0000-0000-0000-000000000000';

  products: Observable<Array<BookProductView>>;

  columnDefs = [
    {headerName: 'Title', field: 'titleText'},

  ];

  selectedProduct: BookProductView;

  constructor(private productService: ProductService,
              private ngZone: NgZone,
              private router: Router) {
  }

  ngOnInit() {
    // @ts-ignore
    this.products = this.productService.findAllProducts()
  }

  onSelectionChanged(event: RowEvent) {
    const selection = event.api.getSelectedRows() as BookProductView[];
    if (selection.length > 0) {
      this.selectedProduct = selection[0];
    } else {
      this.selectedProduct = null;
    }
  }

  edit() {
    if (this.selectedProduct == null) {
      return
    }
    this.ngZone.run(() => {
      this.router.navigate(['/product/edit', this.selectedProduct.id]);
    })

  }
}
