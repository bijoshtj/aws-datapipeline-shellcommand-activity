# ShellCommand Activity Sample for datapipeline

A sample project for aws datapipeline shellcommand activity, which will take input script from s3bucket and run the sccript in
ec2 instance and push the output back to s3 bucket

## Components:

datapipeline.js - This is a simple nodejs script which will be executed in ec2resource.
data_pipeline.json - Datapipeline template, which have all datapipeline configuration details.

## Description

s3DataNode acts as input data node as well as output datanode with stage property set to true.
ec2Resource will execute the woprk defined by activity.

Shell command activity do the following:
- install nodejs
- execute datapipeline.js script and store output in a file (output.txt).
- upload output.txt file to s3.



