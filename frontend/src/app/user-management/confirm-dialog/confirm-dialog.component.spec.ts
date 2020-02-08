import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import {NbCardModule, NbDialogModule, NbDialogRef} from "@nebular/theme";
import {ConfirmDialogComponent} from "./confirm-dialog.component";

describe('Confirm Dialog', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogComponent ],
      imports: [
        NbCardModule,
        NbDialogModule.forRoot()
      ],
      providers: [
        {
          provide: NbDialogRef,
          useClass: class {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
