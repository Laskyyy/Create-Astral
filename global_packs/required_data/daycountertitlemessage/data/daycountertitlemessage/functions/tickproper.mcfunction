execute store result score $daycurent DayCounterSc run time query day
execute if score $dayprevious DayCounterSc < $daycurent DayCounterSc run function daycountertitlemessage:showtitle
execute store result score $dayprevious DayCounterSc run time query day