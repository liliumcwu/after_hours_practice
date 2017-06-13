var randomName = function() {
       var name = ['George', 'Mike', 'Joe', 'Natalie'];
       //RETURN A RANDOM NAME FROM THE name ARRAY
       //YOU CAN USE Math.random method
       var index = Math.floor(Math.random() * 4);
       return name[index];
   }

    var say = function(x) {
      console.log('Say ' + x);
    }
    var yell = function(x) {
      console.log('Yell ' + x);
    }
    var eat = function(x) {
      console.log('Eat ' + x);
    }

    var roll = function(x) {
      console.log ('Roll ' + x);
    }

    function random_function(a, x, y, z, f) {     //the parameters can be anything, as long as they are used within the function
      //x,y,z,f parameters are FUNCTIONS, call these functions using a as parameter. LOOK AT EXAMPLE BELOW
      if (typeof x === 'function') {
        x(a());
      }
      if (typeof y === 'function') {
        y(a());
      }
      if (typeof z === 'function') {
        z(a());
      }
      if (typeof f === 'function') {
        f(a());
      }
    }

    random_function(randomName, say, yell, eat, roll);    //When you call the function make sure to use the correct function name. IMP!
    // Possible results include:
    // Roll George
    // Eat Ninja
    // Say Mike
    // Eat George
