execute store result score $daydisplay DayCounterSc run time query day
scoreboard players add $daydisplay DayCounterSc 1
title @a title [{"text":"Day "},{"score":{"objective":"DayCounterSc","name":"$daydisplay"}}]