// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
// Task #1
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

// Task #2
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

// Task #3
export class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600);
    this._size = new Size();
    this._position = new Position();
  }

  get screenSize() {
    return this._screenSize;
  }

  get size() {
    return this._size;
  }

  get position() {
    return this._position;
  }

  // Task #4
  resize({ width, height }) {
    if (width < 1 || height < 1) {
      this.size.width = 1;
      this.size.height = 1;
      return;
    }

    this.size.width = width;
    this.size.height = height;
  }

  // Task #5
  move({ x, y }) {
    let finalX = x;
    let finalY = y;

    if (x < 0) finalX = 0;
    if (y < 0) finalY = 0;

    if (finalX + this.size.width > this.screenSize.width) {
      finalX = this.screenSize.width - this.size.width;
    }

    if (finalY + this.size.height > this.screenSize.height) {
      finalY = this.screenSize.height - this.size.height;
    }

    this.position.x = finalX;
    this.position.y = finalY;
  }
}
