let grades = [80, 75, 90, 87, 95];
let summary = {
    totalGrades : 0,
    excellentGrades : 0,
    averageGrade : 0
}
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    summary.totalGrades++;
    sum += grades[i];
    console.log(grades[i]);
    if(grades[i] >= 90 ){
        summary.excellentGrades++;
        console.log(`Garde ${grades[i]} is excellent`);
    }
}
summary.averageGrade =  sum / grades.length;
console.log(summary);