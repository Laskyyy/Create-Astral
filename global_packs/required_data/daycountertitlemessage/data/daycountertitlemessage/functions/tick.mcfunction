#Based and improved on https://www.planetminecraft.com/data-pack/dawn-day-counter/
#Created by Armir Mitrandir

scoreboard objectives add DayCounterSc dummy "Day Counter"

#scoreboard objectives setdisplay sidebar DayCounterSc
#function daycountertitlemessage:showtitle
#function daycountertitlemessage:initialize

execute unless score $init DayCounterSc matches 1 run function daycountertitlemessage:initialize
execute if score $tickcount DayCounterSc < $tickcountlimit DayCounterSc run function daycountertitlemessage:tickatstart
execute unless score $tickcount DayCounterSc < $tickcountlimit DayCounterSc run function daycountertitlemessage:tickproper



