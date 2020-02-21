//console.log(add(2,2));

//function add(a,b){
  // c=a+b
    //return c
//}
/*var nums=[0,1,2];
var doubledNums =nums.map(function(element){return element *2;});
console.log(doubledNums)*/
var hash = getHashFunction( 'sha1' );
var hashValue = hash( 'Secret Value' );

function getHashFunction( algorithm ){

    if ( algorithm === 'sha1' ) return function( value ){ console.log(value);return "hello hash" };
    else if ( algorithm === 'md5' ) return function( value ){ return "hello md5" };

}
console.log(hashValue)

