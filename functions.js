//1- Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
//2- Write a function that counts the factorial of a given number. 
//3- Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
//4- Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
//5- Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
//6- Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
//7- Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
//8- Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
//9- Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
//10- Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. 
//While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss. 
      
      
      
//1
/*
         function comparing(a,b) {
             if(a>b) {
                return -1;
             }
            
             else if(b>a) {
             return 1;
            }

             else {
             return 0;
            }
         }

         console.log(comparing(9,5));
*/

//2
/*
         let fact=1;
         function factorial(n) {
             for(let i=1; i<=n; i++) {
             fact = fact * i;
             return fact;
            }
         }
         console.log(`Faktorieli eshte ${factorial(6)}`);
 */


//3
/*
         function digits(x,y,z) {
             return x*100+y*10+z*1;   
         }
         console.log(digits(2,3,5));
*/


//4
/*
         function area(width, length){
             length= length==undefined ? width:length;
             return width*length;
         }
         console.log(`Area is: ${area(7)}`);
 */


//5
/*
         let sum=0;
         function perfectNumber(n) {
             for(let i=1; i<n; i++) {
                 if(n % i==0)
                 sum=sum + i;
             }

             if(sum==n) {
             return 'This number is a perfect number!' ;
            }
             else {
             return 'This number is not a perfect number!';  
            }
         }
          console.log(perfectNumber(7));
*/
        

//7
/*
         function time(hours, minutes, seconds) {
             seconds = seconds==undefined ? 00:seconds;
             return `${hours}:${minutes}:${seconds}`;
         }
         console.log(time(14,20))
*/

//8
/*
         function seconds(hours, minutes, seconds) {
             return hours*3600 + minutes*60 + seconds;
         }
         console.log(seconds(8,32,22))
*/


//10
/*
         function diff(h1,m1,s1,h2,m2,s2) {
             let diff=0;
             let seconds1 = seconds(h1,m1,s1);
             let seconds2 = seconds(h2,m2,s2);
             if(seconds1>seconds2) {
                  diff = seconds1-seconds2;
             }else {
                  diff = seconds2-seconds1;
             }
             let time = splitSeconds(diff);
             return `First date: ${h1}:${m1}:${s1}
                 Second date: ${h2}:${m2}:${s2}
                 Difference: ${time}`;
          
         }

         console.log(diff(14,11,17,24,28,32));
*/