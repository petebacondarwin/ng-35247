import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {producttestimports} from "../test.imports";
import {of} from "rxjs";
import {BookProductView, ProductService} from '@eiswind/proto-client-api';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  const mockProducts: Array<Partial<BookProductView>> = [{
    titleText: "Title"
  }];

  const mockProductService = {
    findAllProducts: jasmine.createSpy()
      .and.returnValue(of([mockProducts])),

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: producttestimports,
      providers: [
        {provide: ProductService, useValue: mockProductService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
