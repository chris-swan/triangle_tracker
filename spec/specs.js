describe('triangle', function(){

  it("determines if 3 sides create a valid triangle", function(){
    expect(triangle(3,3,9)).to.equal("These sides do not make a triangle.")
  });

  it("determines if 3 sides are equal in an equilateral triangle", function(){
      expect(triangle(4,4,4)).to.equal("equilateral triangle")
  });

  it("detemines if 3 sides make an isosceles triangle", function(){
    expect(triangle(7,7,4)).to.equal("isosceles")
  });

  it("determines if 3 sides make a scalene triangle", function(){
    expect(triangle(2,3,4)).to.equal("scalene")
  });
});
