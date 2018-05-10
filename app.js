//CLASE
function _on(c, f){
  var obj = {c,f};
  this.dictionary.push(obj);
  
}

function _run(testString){
    var index;
    var countA=0,countB=0,countD=0;

   for(var element in testString){
       element = testString[element];
        //add elemente to the dictionary
        if (element == 'a' || element == 'c'){
            this.on(element, function() { console.log('char: ' +  element)});   
            //counts
            if  (element == 'a')
                countA++
            if  (element == 'c')
                countB++
                
        }else{
            try{
                index = this.dic.indexOf(element); //h
                console.log(index);
                if (index !=  -1) { //found
                    this.dic[index][element](); //run function               
                }  else { //not found
                    this.onDefault(element); //run default
                    //counts                
                    countD++                
                }
            } catch (err) {
                countD++                
            }
            
            
        }       

    } //end for

    return [countA,countB,countD];

}


function Tokenizer(){    
    this.dictionary = [];      
    this.run =_run;
    this.on = _on;
    this.onDefault = function(char) { console.log('not found' + char)};    
}



//TEST
function testTokenizer(){
  
  var t = new Tokenizer;
  var counts = [];
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?']; 
  counts = t.run(testString);
  
  //test add element
  t.on('x', function(char) { console.log('char x')});
  
  //test element not found
  t.onDefault('y');

  //here goes the code to run the test over testString
  
  console.log("numero de a's: " + counts[0]);
  console.log("numero de c's: " + counts[1]);
  console.log("numero d'altres caracters: " + counts[2]);
}

testTokenizer();

