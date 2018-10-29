#!/bin/bash

# The script will treat subsequent occurrences of "number" as an integer.


counter=1
while [ $counter -le 10 ]
do
echo $counter
((counter++))
done
echo All done
