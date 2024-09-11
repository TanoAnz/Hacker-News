import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: DataService;
  let httpMock: HttpTestingController;

  const mockIds = [12345, 67890, 111213, 141516, 171819, 202122, 232425, 262728, 293031, 323334];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchId and set id when data is received', () => {
    spyOn(dataService, 'getDati').and.returnValue(of(mockIds));

    component.fetchId();

    expect(dataService.getDati).toHaveBeenCalled();
    expect(component.ids).toEqual(mockIds);
  });

  it('should handle error when fetchId fails', () => {
    spyOn(dataService, 'getDati').and.returnValue(throwError(() => new Error('Error fetching data')));

    spyOn(console, 'error');

    component.fetchId();

    expect(dataService.getDati).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith("Errore nel caricamento dei 500 id", jasmine.any(Error));
  });

});

