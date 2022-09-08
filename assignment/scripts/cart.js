console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];

function addItem(item) {
    basket.push(item);
    if(basket.indexOf(item)==-1){return false;}
    else{return true;}
}
console.log('checking add item function, adding water and should say true:', addItem('Water'));
console.log('checking cheese add:', addItem('Cheese'));

//added water to array to check, and added cheese
console.log('basket contains:', basket);

function listItems(array){
    let output=[];
   if (array.length>0){
    for( i=0; i<array.length; i++){
    console.log(array[i]);
   };}
    else{console.log('empty')};
    
return "Length of list = " + array.length
};
//lists items in basket (values in array)

listItems(basket);

//test successful now will add new item and test again

addItem('Potatoes');
console.log('test add potatoes:', basket);

listItems(basket);

