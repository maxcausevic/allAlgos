

//given arr [1,2,3], arr [1,2,3] ex. [1,2] != [1,2,3]

//we want to make sure we want our arrays to contain same elements, checks equality

function equalArr(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (i = 0; i <= arr1.length; i++) {
            for (j = 0; j <= arr2.length; j++) {
                if (arr1[i] == arr2[j]) {

                }
                else {
                    return false;
                }

            }

        }
    }
}

let x = 1;
let y = 2;
let z = 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);