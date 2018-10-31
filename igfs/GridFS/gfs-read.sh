#!/bin/bash

echo " This displays a plot of amount of time taken "

counter=1
i=1
counter2=2
echo " New Iteration" >> DATA/gfs-read-data
while [ $counter -le 200 ]
  do
    begin=`date +%s%3N`
    echo "Outer Loop $counter"
    while [ $i -le $counter ]
      do
        echo "Inner loop"
        node gfs-read.js
        ((i++))
      done
    end="$(date +%s%3N)"
    timer=$((end-begin))
    echo $counter2  "," $timer >>  DATA/gfs-read-data
    ((counter++))
    ((counter2++))
    i=0
    echo $counter
  done
