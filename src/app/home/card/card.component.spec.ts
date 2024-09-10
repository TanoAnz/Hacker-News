import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardComponent } from './card.component';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';
import { news } from '../../model/news.model';
import { of } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let dataService: DataService;
  let httpMock: HttpTestingController;

  const mockNews: news = {
    by: 'author',
    descendants: 0,
    id: 123456,
    time: 1160418628,
    title: 'Example Title',
    type: 'story',
    url: 'https://example.com',
    score: 0
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardComponent],
      providers: [DataService, DatePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);

    component.id = 123456;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the correct URL when onClick is called', () => {
    component.news = mockNews;
    spyOn(window, 'open');

    component.onClick();

    expect(window.open).toHaveBeenCalledWith(mockNews.url, '_blank');
  });
  it('should convert timestamp to formatted date correctly', () => {
    component.news = mockNews;
    const formattedDate = component.convertDate();
    const expectedDate = component.datePipe.transform(new Date(mockNews.time * 1000), 'dd/MM HH:mm');
    
    expect(formattedDate).toBe(expectedDate);
  });

  it('should handle null news in convertDate method', () => {
    component.news = null as any;
    const formattedDate = component.convertDate();
    expect(formattedDate).toBeNull();
  });
});
