import {Component, NgZone, OnInit} from '@angular/core';
import {OProduct, ProductService} from '@eiswind/proto-client-api';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: OProduct;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.findProductById(params["id"]).subscribe(p => {
        this.product = p;

      })
    })
  }

  saveDisabled() {
    //return this.form.invalid
  }

  save() {
    this.productService.insertProduct(this.product, 'response').subscribe(resp => {
      if (resp.status == 201) {
        this.ngZone.run(() => {
          this.router.navigate(['product/list'])
        })
      }
    })
  }
}
