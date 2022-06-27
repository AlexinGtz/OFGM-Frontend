#!/bin/bash

GITHUB_REF=$1

npm ci
echo $GITHUB_REF | tr "/" "\n" | tail -2 | head -1
runEnv=$(echo $GITHUB_REF | tr "/" "\n" | tail -2 | head -1)
echo $runEnv
