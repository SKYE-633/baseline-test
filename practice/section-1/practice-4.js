'use strict';

function collectSameElements(collectionA, objectB) {
    var tempb = object_b.value.toString().split(',');
    var asw = new Array();
    var t = 0;
    for(var x in collectionA) {
        for(var y in objectB) {
            if(collectionA[x].key == objectB[y]) {
                asw[t] = collectionA[x].key;
                t++
            }
        }
    }
    return '实现练习要求，并改写该行代码。';
}
 
