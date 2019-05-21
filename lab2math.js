const calculate = (method, x, y) => {

    switch (method.toLowerCase()) {   
      case 'subtract':
        
        console.log( x-y, operation);
      case 'multiply':
        
        console.log( x*y, operation);
      case 'divide':
      
        console.log( x/y, operation);
      case 'add':
       
        console.log( x+y, operation);
      default:

        return '****This is an invalid option just numbers are valid****';
    }
  };
  
  const validOptions = ['add', 'subtract', 'multiply', 'divide'];
  
  const cal = (req, res) => {
  parseInt(number ,x);// Parse string value of x into a number
  parseInt(number, y);// Parse string value of y into a number
    const { x, y, method } = parseInt;
  
    //check if method is correct
    if (method != 'add' && method != 'subtract' && method != 'multiply' && method != 'divide') {
    	res.write('Please input a correct method: add, subtract, multiply, or divide');
    }
    else {    	
    	//calculate result based on method
    	if (method == 'add') {
	    	method = '+';
	    	result = x + y;
	    }
	    	else if (method == 'subtract') {
	    		method = '-';
	    		result = x - y;
	    	}
	    		else if (method == 'multiply') {
	    			method = '*';
	    			result = x * y;
	    		}
	    			else if (method == 'divide') {
	    				method = '/';
	    				result = x / y;
	    			}
	    //output the result
	    res.write(x + ' ' + method + ' ' + y + ' = ' + result);
    }
  
    // Get our Operation and Result from handle calculation
    const { operation, result } = cal(method, x, y);

  };
  
  module.exports = cal; // Export our calculation function
  