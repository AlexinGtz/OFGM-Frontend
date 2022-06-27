#!/bin/bash

npm ci
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install
runEnv=$1#$(echo $1 | tr "/" "\n" | tail -2 | head -1)
export AWS_ACCESS_KEY_ID=$2
export AWS_SECRET_ACCESS_KEY=$3

npm run build


if [[ $runEnv = 'qa' ]]    # ← see 'man test' for available unary and binary operators.
then
    S3_BUCKET='ofgm-backend-qa-ofgmwebpage-9l73f84jk8mg'
    CF_DIST='E1RKAY3OTOGCHL'
elif [[ $runEnv = 'prod' ]]
then
    S3_BUCKET='testBucekt'
    CF_DIST='test?Dist'
else
    echo 'environment in the tag not valid'
    exit 1
fi

echo ${S3_BUCKET}
echo ${CF_DIST}

#aws s3 sync ./build s3://${S3_BUCKET} --region=us-east-1
#aws cloudfront create-invalidation --distribution-id ${CF_DIST} --paths '/*' --region=us-east-1

