#!/bin/bash

npm ci
runEnv=$(echo $1 | tr "/" "\n" | tail -2 | head -1)


