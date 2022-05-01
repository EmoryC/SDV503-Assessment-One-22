//SECTION Requirement #1
//Creating a const for the days within each month
const dayspermonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]
//Both have been left with whitespaces of null values in front so that each month correctly
//corresponds to it's calander number

//Creating a class _Date with which I will construct all functions (methods)
class _Date{ 
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
//I could not get these to generate output but I believe individually they would operate fine



}

//SECTION Requirement #2
/*When researching "overload operators" I came up with a bunch of C++ stuff that 
made no sense. I'm assuming this is assignment was likely meant for another class.
Reverted back to functions as I couldn't seem to get the class methods to function */


//Setting up variables for use in the following functions
const _Months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var day
var month
var year
//Declaring function NewDate with parameters whose values will be represented by new date
function NewDate(d,m,y){
    day = d
    month = m
    year = y
}
//Providing values for NewDate
NewDate(1,5,2022)

//Declaring function _IncDay to increase the days within the parameters 
function _IncDay() {
    //if statement with year switch to start
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
