//CLASE
function _on(c, f){
  
  var obj = {'char' : c, 'f' : f };
  this.dictionary.push(obj);
  
}

function findElement(char, dic){
    var count = 0;
    for(var item in dic){
        
        if (dic[item].char == char) 
            return count;

        count ++;
    }   
    
    return -1;
}



function _run(testString){
    
   for(var element in testString){
       element = testString[element];
                   
            try{                
                index = findElement(element, this.dictionary )                
                if (index !=  -1) { //found                                       
                    this.dictionary[index].f(); //run function                                
                }  else { //not found
                    this.onDefault(); //run default                                                   
                }
            } catch (err) {
                // ...
            }
            
    } //end for

}


function Tokenizer(){    
    this.dictionary = [];      
    this.run =_run;
    this.on = _on;    
    this.onDefault;
}



//TEST
function testTokenizer(){
    var countA=0;
    var countC=0;
    var countD=0;

  var t = new Tokenizer;
  var counts = [];
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?']; 
    
  //add elements to the dictionary
    t.on('a', function(){
      countA++;      
    });    

    t.on('c', function(){
       countC++;
    });
    
    //test element not found
    t.onDefault = function(){
        console.log("here");
        countD++;
    };

  //here goes the code to run the test over testString
  counts = t.run(testString);

  console.log("numero de a's: " + countA);
  console.log("numero de c's: " + countC);
  console.log("numero d'altres caracters: " + countD);
  
  
}

testTokenizer();

