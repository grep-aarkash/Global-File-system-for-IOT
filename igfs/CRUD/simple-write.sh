#!/bin/bash

echo " This displays a plot of amount of time taken "

counter=0
i=0
counter2=$counter
echo " New Iteration" >> simple-write-data
while [ $counter -le 1000 ]
  do
    begin=`date +%s%3N`
    echo "Outer Loop $counter"
    while [ $i -le $counter ]
      do
        echo "Inner loop"
        node simple-write.js
        ((i++))
      done
    end="$(date +%s%3N)"
    timer=$((end-begin))
    echo $timer >> simple-write-data
    ((counter++))
    i=0
    echo $counter
  done
