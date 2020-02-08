import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductEditComponent} from './product-edit.component';
import {DescriptiveDetailComponent} from "./descriptive-detail/descriptive-detail.component";
import {ODescriptiveDetail, ProductService} from '@eiswind/proto-client-api';
import {ActivatedRoute} from "@angular/router";
import {of} from 'rxjs';
import {producttestimports} from "../test.imports";
import {MockComponent} from "ng-mocks";
import {By} from "@angular/platform-browser";

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

  const mockProduct = {
    productForm : 'C01',
    productComposition: 'C01',
    descriptiveDetail: {
      titleElements: {}
    } as unknown as ODescriptiveDetail
  }
  const mockProductService: Partial<ProductService> = {
    findProductById: jasmine.createSpy().and.returnValue(of(mockProduct))
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEditComponent, MockComponent(DescriptiveDetailComponent)],
      imports: producttestimports,
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: '123'})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load the product and pass value to child component', async(() => {
    expect(component).toBeTruthy();
    expect(mockProductService.findProductById).toHaveBeenCalledWith('123');

    const mockedComponent = fixture.debugElement
      .query(By.directive(DescriptiveDetailComponent)).componentInstance as DescriptiveDetailComponent;
    expect(mockedComponent).toBeTruthy();

    component.ngOnInit();
    fixture.detectChanges();
    expect(mockedComponent.descriptiveDetail).toEqual(mockProduct.descriptiveDetail);

  }));
});
