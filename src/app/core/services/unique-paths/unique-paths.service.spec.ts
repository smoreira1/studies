import { TestBed } from '@angular/core/testing';

import { UniquePathsService } from './unique-paths.service';

describe('UniquePathsService', () => {
  let service: UniquePathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniquePathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2', () => {
    const grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 2, -1],
    ];
    expect(service.uniqueSearch(grid)).toEqual(2);
  });

  it('should return 4', () => {
    const grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2],
    ];
    expect(service.uniqueSearch(grid)).toEqual(4);
  });

  it('should return 0', () => {
      const grid = [
        [0, 1],
        [2, 0],
      ];
    expect(service.uniqueSearch(grid)).toEqual(4);
  });

});
