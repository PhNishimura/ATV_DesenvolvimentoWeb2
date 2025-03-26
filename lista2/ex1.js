class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(otherVec) {
      return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }
  

    minus(otherVec) {
      return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }

    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  

  const vetor1 = new Vec(3, 4);
  const vetor2 = new Vec(1, 2);
  

  const soma = vetor1.plus(vetor2);
  console.log(`Soma: (${soma.x}, ${soma.y})`);
  

  const menos = vetor1.minus(vetor2);
  console.log(`Subtração: (${menos.x}, ${menos.y})`);
  

  console.log(`Comprimento do vetor1: ${vetor1.length}`);
  