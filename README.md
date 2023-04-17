# Clone the code

`git clone https://github.com/onlyfunnels/sales-channel.git`

## Make changes

Make your changes.

`git add .`
`git commit -m "commit message"`
`git push origin main`

## SSH into AWS EC2 instance

Follow this to ssh into AWS EC2 instance

https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#ConnectToInstance:instanceId=i-0520b3d8084cf3dc2

## Fetch the latest changes

`cd sales-channel-app`
`git pull`

## Restart the server

`pm2 restart web/index.js`
