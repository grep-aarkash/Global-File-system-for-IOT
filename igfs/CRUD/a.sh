#!/bin/bash

# The script will treat subsequent occurrences of "number" as an integer.


counter=1
while [ $counter -le  1 ]
do
echo $counter $counter
((counter++))
done
echo All done
