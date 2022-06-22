#!/bin/bash

npm ci
echo $GITHUB_REF | tr "/" "\n" | tail -2 | head -1
runEnv=$(echo $GITHUB_REF | tr "/" "\n" | tail -2 | head -1)
echo $runEnv
