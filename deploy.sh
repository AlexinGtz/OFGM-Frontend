#!/bin/bash

npm ci
echo ${{ github.ref }} | tr "/" "\n" | tail -2 | head -1
runEnv=$(echo ${{ github.ref }} | tr "/" "\n" | tail -2 | head -1)
echo $runEnv
