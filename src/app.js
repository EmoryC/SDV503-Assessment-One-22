//SECTION Requirement #1
/*Creating a const for the days within each month.
To be honest I made this array with a plan to use it but couldn't 
walk myself through the logic of it like I could with _Months
*/
const dayspermonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]

//Both have been left with whitespaces of null values in front so that each month correctly
//corresponds to it's calander number

//Creating a class _Date with which I will construct all functions (methods)
const _Date = class{ 
    constructor(day,month,year){
//  Creating a const for the names of the months with whitespace at front so numbers match
const _Months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//Setting parameters for calander days
        if(day>31){
          console.log("Invalid Input")
      } else if(_Months[month] =='Feb' && day>28){ //best guess this is how it works???
        console.log("Invalid Input")
      } else if(day<1){
            console.log("Invalid Input")
      } else {this.day = day}
//Setting parameters for calander months      
      if(month>12){
            console.log("Invalid Input")
      } else if(month<1){
            console.log("Invalid Input")
      } else {this.month = month}
//Setting an arbitrary limit to the years to try it
      if(year>2030){ 
        console.log("Invalid Input: Maximum year 2030")
    } else if(year<2000){
        console.log("Invalid Input: Minumim year 2000")
    } else {this.year = year
   } 
}
//This will be the raw input for the methods that follow   

 //This should display the date as a string of integers with slashes between
    getIntDate() { 
        return `Date: ${this.day}/${this.month}/${this.year}`; //forgot the second backtick here and almost broke everything
    }
 //This should display the date starting with integer day, string month, then integer year
    getDayMonth() {
        return `Date: ${this.day} ${_Months[this.month]} ${this.year}`;
    }
//This should display the date starting with string month, integer day, integer year
    getMonthDay() {
        return `Date: ${_Months[this.month]} ${this.day}, ${this.year}`
    }
/*I could not get these to generate output, but the parameters within the constructor
    functioned perfectly which was reassuring that I set up the class well.
    Perfecting the method output to generate in new const will take more study.
*/
}

console.log(new _Date(1,5,2022))

//SECTION Requirement #2 & #3 (plus req#1 redux)
/*When researching "overload operators" I came up with a bunch of C++ stuff that 
made no sense. I'm assuming this is assignment was likely meant for another class.
Assumed this just meant we needed to have a function that could increase and decrease 
the date. Reverted back to functions as I couldn't seem to get the class methods to work */



//Setting up variables for use in the following functions
const _Months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var day
var month
var year
//Declaring function NewDate with parameters whose values will be represented by new date
//Indexing _Months for the month notation for easier use
function NewDate(d,m,y){
    day = d
    month = m
    year = y

}
function DaysDiff(D1,D2){
    var D1 = new Date(1/5/2022)
    var D2 = new Date(10/5/2022)
    const DaysDiffNum = Math.abs(D2-D1)
        return DaysDiffNum
}
    console.log(DaysDiff(D1,D2))
/*NOTE ^^^ This was an attempt after some tries to develop a function for the
        subtraction operator thingy. Again, could not generate a result, despite 
        following what seemsto be ok logic. I think the issue is with know how to 
        execute such functions with proper syntax, and not in converting ideas into
        operations in code.
*/
//Providing values for NewDate
NewDate(1,5,2022)

//NOTE Decided to create fuctions that test the same requirements as the class _Date 
//      for practice.

//Declarting function IntDate to call the input of NewDate as a concatenated 
//string of integers
function IntDate(){ 
    console.log(day+"/"+month+"/"+year)
    }

IntDate() //results is correct 1/5/2022

//Declaring function DayMonth to call the input of NewDate as an integer for day,
//string for month, and integer for year
function DayMonth(){
console.log(day+" "+_Months[month]+" "+year)
}
DayMonth() //result is correct 1 May 2022

//Declaring the function MonthDat to call the inpur of NewDate as a String for month
//and integers for day and year seperated by a comma
function MonthDay(){
console.log(_Months[month]+" "+ day+", "+year)
}
MonthDay() //results is correct May 1, 2022

//Declaring function _IncDay to increase the days within the parameters 
function _IncDay(d,m,y) {
    //if statement with year switch to start
    //NOTE Using index notation for the months to correspond to _Months accurately
    if(month == 12) {
        if(day<31) {
            day = day++
        } else { 
            if(year<2030) {
            month = 1 
            day = 1
            year = year++
        } else {console.log("Maximum Reached")}
    } 
}
    else if(month == 1) {
    if(day<31) {
            day = day++
    } else {
            month = 2 
            day = 1
            //Now that it's in a new year, the year change is no longer required
    }
}
    else if(month == 2) {
    if(day<28) {
        day = day++
    } else {
        month = 3 
        day = 1
    }
}
    else if(month == 3) {
    if(day<31) {
        day = day++
    } else {
        month = 4 
        day = 1
    }
}
    else if(month == 4) {
    if(day<30) {
        day = day++
    } else {
        month = 5
        day = 1
    }
}
    else if(month == 5) {
    if(day<31) {
        day = day++
    } else {
        month = 6 
        day = 1
    }
}
    else if(month == 6) {
    if(day<30) {
        day = day++
    } else {
        month = 7 
        day = 1
    }
}
    else if(month == 7) {
    if(day<31) {
        day = day++
    } else {
        month = 8 
        day = 1
    }
}
    else if(month == 8) {
    if(day<31) {
        day = day++
    } else {
        month = 9 
        day = 1
    }
}
    else if(month == 9) {
    if(day<30) {
        day = day++
    } else {
        month = 10 
        day = 1
    }
}
    else if(month == 10) {
    if(day<31) {
        day = day++
    } else {
        month = 11 
        day = 1
    }
}
    else if(month == 11) {
    if(day<30) {
        day = day++
    } else {
        month = 12
        day = 1
    }
}
    
}   
_IncDay()

            /*NOTE Admitadly unsure if this is what the requirements asks for.
            I believe this function works logically, but doesn't really
            work in the big picture and the requirment seems unclear.*/

//This function will (hopefully) operate in reverse to _IncDay
function _DecDay() {
    if(month == 1) {
        if(day>1) {
          day = day--
        } else {
            if (year>2000) {
            month = 12 
            day = 31
            year = year--
        } else {console.log("Minimum Reached")}
    } 
}
    else if(month == 12) {
    if(day>1) {
        day = day--
    } else {
        month = 11
        day = 30
    }
 }
   else if(month == 11) {
    if(day>1) {
        day = day--
    } else {
        month = 10 
        day = 31
    }
 }
   else if(month == 10) {
    if(day>1) {
        day = day--
    } else {
        month = 9 
        day = 30
    }
 }
   else if(month == 9) {
    if(day>1) {
        day = day--
    } else {
        month = 8 
        day = 31
    }
 }
   else if(month == 8) {
    if(day>1) {
        day = day--
    } else {
        month = 7 
        day = 31
    }
 }
   else if(month == 7) {
    if(day>1) {
        day = day--
    } else {
        month = 6 
        day = 30
    }
 }
   else if(month == 6) {
    if(day>1) {
        day = day--
    } else {
        month = 5 
        day = 31
    }
 }
   else if(month == 5) {
    if(day>1) {
        day = day--
    } else {
        month = 4 
        day = 30
    }
 }
   else if(month == 4) {
    if(day>1) {
        day = day--
    } else {
        month = 3 
        day = 31
    }
 }
   else if(month == 3) {
    if(day>1) {
        day = day--
    } else {
        month = 2 
        day = 28
    }
 }
  else if(month == 2) {
    if(day>1) {
        day = day--
    } else {
        month = 1 
        day = 31
    }
 }

}   
_DecDay()

/*NOTE These functions while not applicable in this setting follow the logic of increasing
    and decreasing the value of the day variable when input. I am unsure how to test this
    with console.log
*/