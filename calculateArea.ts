export function calculateArea(height: number, width: number): number{
    if (height < 0 || width < 0) {
        throw new Error("height and width must not be negative numbers");
    }
    return height * width;
}
console.log(calculateArea(30, 12));