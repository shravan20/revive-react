#!/bin/bash

# Define the number of empty commits you want to create
num_commits=1

# Create a Git repository if it doesn't exist
if [ ! -d .git ]; then
  git init
fi

# Perform 100 empty commits
for ((i=1; i<=$num_commits; i++))
do
  echo "Creating empty commit $i"
  git commit --allow-empty -m "Trigger Build".
  git push origin main
done
