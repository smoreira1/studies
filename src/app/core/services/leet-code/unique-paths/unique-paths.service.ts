import { Injectable } from '@angular/core';

interface Results {
  amount: number;
  path: string[];
}

interface Postion {
  x: number;
  y: number;
}

interface GridSpecifications {
  startingPosition: Postion;
  endingPosition: Postion;
  amountOfSpace: number;
  amountOfObstacles: number;
}

@Injectable({
  providedIn: 'root'
})
export class UniquePathsService {

  constructor() { }

  public uniqueSearch(grid: number[][]): number {
  let results: Array<Results> = [];
  let gridSpecifications: GridSpecifications = {
    startingPosition: this.getTargetSquare(grid, 1),
    endingPosition: this.getTargetSquare(grid, 2),
    amountOfObstacles: this.getBlockingSquaresAmount(grid),
    amountOfSpace: this.amountOfSpaces(grid),
  };

  for (let i = gridSpecifications.startingPosition.x; i < grid.length; i++) {
    results.push({ amount: 0, path: [] });
    for (
      let j = gridSpecifications.startingPosition.y;
      j < grid[i].length;
      j++
    ) {
      if (grid[i][j] === -1) {
        results.splice(i);
        break;
      }
      results[i].amount++;
      results[i].path.push(`(${i} , ${j})`);
      if (
        i === gridSpecifications.endingPosition.x &&
        j === gridSpecifications.endingPosition.y
      ) {
        break;
      }
    }
    if (
      results[i] &&
      results[i]?.amount !==
        gridSpecifications.amountOfSpace - gridSpecifications.amountOfObstacles
    ) {
      delete results[i];
    }
  }
  return results.length;
}

  private getTargetSquare(grid: number[][], targetSquare: number): Postion {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return { x: i, y: j };
      }
    }
  }
  throw 'Target Does Not Exist';
}

private getBlockingSquaresAmount(grid: number[][]) {
  let blockingSquaresAmount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === -1) {
        blockingSquaresAmount++;
      }
    }
  }
  return blockingSquaresAmount;
}

private amountOfSpaces(grid: number[][]) {
  let amounts = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      amounts++;
    }
  }
  return amounts;
}


}
