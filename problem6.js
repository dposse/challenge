//Problem 6

//sort arrays, then compare
//O(n) + O of sort, where n is largest array

function getOverlap(array1,array2) {
    
    array1.sort();
    array2.sort();
    
    //make sure sort() sorts like expected
    console.log(array1.length,array2.length);
    
    let index1 = 0;
    let index2 = 0;
    let overlapArray = [];
    while (index1 < array1.length && index2 < array2.length) {
        
        console.log(array1[index1],array2[index2]);
        
        if (array1[index1] == array2[index2]) {
            overlapArray.push(array1[index1]);
            index1++;
            index2++;
        }
        
        else {
            
            (array1[index1] < array2[index2]) ? index1++ : index2++;
            
        }
        
        console.log(overlapArray);
        
    }
    
    return overlapArray;
    
}

alert(getOverlap(['a', 'b', 'c', 'a', 'a', 'b', 'd'],['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g']));