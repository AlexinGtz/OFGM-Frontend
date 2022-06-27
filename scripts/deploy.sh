#!/bin/bash

npm ci
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install
runEnv=$(echo $1 | tr "/" "\n" | tail -2 | head -1)
accessKey=$2
secretKey=$3

npm run build

ls -al

aws --version

aws s3 sync ./build s3://ofgm-backend-qa-ofgmwebpage-9l73f84jk8mg
aws cloudfront create-invalidation --distribution-id E1RKAY3OTOGCHL --paths '/*'

