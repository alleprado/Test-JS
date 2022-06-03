var list = 100;
var visualNuts;

if ( Number.isInteger(list)) {
    for (let i = 1; i <= list; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            visualNuts = 'visualNuts';
    
        } else if (i % 3 === 0) {
            visualNuts = 'Visual';
    
        } else if (i % 5 === 0) {
            visualNuts = 'Nutes';
    
        } else {
            visualNuts = i;
    
        } 
    
        console.log(visualNuts);
    
    }


} else {
    console.log('digite um numero inteiro!')
}



