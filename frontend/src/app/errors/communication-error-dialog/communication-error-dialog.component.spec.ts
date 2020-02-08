import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import {NbCardModule, NbDialogModule, NbDialogRef} from "@nebular/theme";
import {CommunicationErrorDialogComponent} from "./communication-error-dialog.component";

describe('Communication Error Dialog', () => {
  let component: CommunicationErrorDialogComponent;
  let fixture: ComponentFixture<CommunicationErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationErrorDialogComponent ],
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
    fixture = TestBed.createComponent(CommunicationErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
