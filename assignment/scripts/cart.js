console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
const maxItems=5;

function addItem(item) {
    if(isFull()===false){
        basket.push(item);
        return true;
    };
    return false;
}
//end add item function

console.log('checking add item function, adding water and should say true:', addItem('Water'));
console.log('checking cheese add:', addItem('Cheese'));

//added water to array to check, and added cheese
console.log('basket contains:', basket);

function listItems(){
   if (basket.length>0){
    for( i=0; i<basket.length; i++){
    console.log(basket[i]);
   };}
    else{
        console.log('empty')
    };
    //end list items function
return "Length of list = " + basket.length
};
//lists items in basket (values in array)

listItems();

//test successful now will add new item and test again

addItem('Potatoes');
console.log('test add potatoes:', basket, 'Will rerun listItem function.');

listItems();

function empty(){
    for(i=basket.length; i>-1; i--){
        basket.pop();
    };
    console.log('Emptied succesfully.');
    return 'Emptied successfully.';
};
//end empty the basket function

console.log('Basket contains', basket, 'before being emptied.');

empty();

console.log('basket now contains:', basket);

//STRETCH GOALS:
//global constant added up top
//updating basket for tests
basket=['jewels', 'water', 'cheese', 'bannanas'];

console.log(basket);

function isFull(){
    if(basket.length<5){
        return false
    };
    return true;
}

console.log('testing isfull, should return false:', isFull(basket));

//I updated the add item function for the stretch goal

function removeItem(item){
    let location=basket.indexOf(item);
    if(location >= 0){
        basket.splice(location, 1); return item;
        }
    else{
        return null;
    };
    }

console.log('testing remove item, should return and remove water:', removeItem('water'));

console.log('testing removeItem, should return null:', removeItem('papaya'));

console.log('basket should no longer contain water:', basket);

addItem('jasmine');

addItem('superduper cheese crackers');

console.log('Basket contains 5 items, it now contains:', basket);

console.log('testing add item to full basket, should return false:', addItem('grapes'));

