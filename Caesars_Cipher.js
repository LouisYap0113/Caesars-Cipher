function rot13(str) {
//to make each character of str into each individual element of an array
    let strarr = str.split("");
//

//using map() on each element to get final arr
    let finalarr = strarr.map(element=>{
        if (/[A-Z]/.test(element))
            //if the element is alphabet, decipher it
            {
                if (element.charCodeAt() <= 77) //for A-M
                    {return String.fromCharCode(element.charCodeAt() + 13);}

                else {return String.fromCharCode(element.charCodeAt() - 13);} //for N-Z
            }
            //

        else {return element;} //if the element is non-alphabet, pass it on
    });
//

    return finalarr.join(""); //make the decoded element string again. all done.
  }