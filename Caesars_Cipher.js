function rot13(str) {
//to make each character of str into each individual element of an array
    let strarr = str.split("");
//

//using map() on each element to get final arr
    let finalarr = strarr.map(element=>{
        if (/[A-Z]/.test(element))
            {}//To decipher the encoded alphabet
        else {return element;} //if the element is non-alphabet, pass it on


    });










    return str;
  }
  
  rot13("SERR PBQR PNZC");
  