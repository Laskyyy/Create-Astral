scoreboard objectives add DayCounterSc dummy "Day Counter"
scoreboard players set $dayprevious DayCounterSc -999
scoreboard players set $daycurent DayCounterSc 999
scoreboard players set $daydisplay DayCounterSc 999
scoreboard players set $tickcount DayCounterSc 0
scoreboard players set $tickcountlimit DayCounterSc 60
scoreboard players set $init DayCounterSc 1