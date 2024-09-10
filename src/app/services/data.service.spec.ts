import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  const mockNewStoriesIds = [12345, 67890];
  const mockNewsItem = {
    id: 12345,
    type: 'story',
    by: 'author',
    time: 1160418111,
    title: 'Sample News',
    url: 'https://example.com'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getDati', () => {
    it('should return an Observable of news IDs', () => {
      service.getDati().subscribe(ids => {
        expect(ids).toEqual(mockNewStoriesIds);
      });

      const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/newstories.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockNewStoriesIds);
    });
  });

  describe('#getNews', () => {
    it('should return an Observable of news item', () => {
      service.getNews(12345).subscribe(news => {
        expect(news).toEqual(mockNewsItem);
      });

      const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/item/12345.json ');
      expect(req.request.method).toBe('GET');
      req.flush(mockNewsItem);
    });
  });
});

