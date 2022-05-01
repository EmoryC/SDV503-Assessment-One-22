class _Date{
    constructor(day,month,year){
      if(year>2030){
        console.log("Invalid Input: Maximum year 2030")
    } else if(year<2000){
        console.log("Invalid Input: Minumim year 2000")
    } else {
        this.day = day
        this.month = month
        this.year = year
    }
}
    getIntDate() {
        return `${this.day}/${this.month}/${this.year}'
    }
    


}