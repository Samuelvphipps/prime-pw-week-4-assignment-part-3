console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
const maxItems=5;

function addItem(item) {
    if(basket.length<5){
    basket.push(item);
    if(basket.indexOf(item)==-1){
        return false;
    }
    else{
        return true;
    }
    };
    return false;
}
//end add item function

console.log('checking add item function, adding water and should say true:', addItem('Water'));
console.log('checking cheese add:', addItem('Cheese'));

//added water to array to check, and added cheese
console.log('basket contains:', basket);

function listItems(array){
   if (array.length>0){
    for( i=0; i<array.length; i++){
    console.log(array[i]);
   };}
    else{
        console.log('empty')
    };
    //end list items function

return "Length of list = " + array.length
};
//lists items in basket (values in array)

listItems(basket);

//test successful now will add new item and test again

addItem('Potatoes');
console.log('test add potatoes:', basket);

listItems(basket);

function empty(array){
    for(i=array.length; i>-1; i--){
        array.pop();
    };
    console.log('Emptied succesfully.');
    return 'Emptied successfully.';
};
//end empty the basket function
console.log('Basket contains', basket, 'before being emptied.');

empty(basket);

console.log('basket now contains:', basket);

//STRETCH GOALS:
//global constant added up top
function isFull(array){
    if(array.length<5){
        return false
    };
    return true;
}
//I updated the add item function for the stretch goal
basket=['jewels', 'water', 'cheese', 'bannanas'];
function removeItem(array, item){
    let location=array.indexOf(item);
    if(location >= 0){
        array.splice(location, 1); return item;
        }
    else{
        return null;
    };
    
    }


