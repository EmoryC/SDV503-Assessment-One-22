//SECTION Requirement #1
//  Creating a const for the names of the months
const _Months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//Creating a const for the days within each month
const dayspermonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]
//Both have been left with whitespaces of null values in front so that each month correctly
//corresponds to it's calander number

//Creating a class _Date with which I will construct all functions (methods)
class _Date{ 
    constructor(day,month,year){
      if(year>2030){ //Setting an arbirary limit to the years to try it
        console.log("Invalid Input: Maximum year 2030")
    } else if(year<2000){
        console.log("Invalid Input: Minumim year 2000")
    } else {
        this.day = day
        this.month = month
        this.year = year 
    } //This will be the raw input for the methods that follow
}
    getIntDate() { //This should display the date as a string of integers with slashes between
        return `${this.day}/${this.month}/${this.year}'
    }
    
    getDayMonth() {

    }



}
