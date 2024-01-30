const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
} 

console.log(college.unique);
console.log(college.unique.result);
console.log(college.unique.result.gpa, '\n');

console.log(college.events[1], '\n');


// delete propety
delete college.events;
console.log(college);