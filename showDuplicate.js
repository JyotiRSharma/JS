// Filter out the non-unique values in an array
const ages = [12, 15, 18, 22, 19, 60, 18, 22, 19, 60];

let dup_ages = [];
ages.map(function(age) {
    if (dup_ages.indexOf(age) == -1) {
        dup_ages.push(age);
    }
});

console.log(dup_ages);
