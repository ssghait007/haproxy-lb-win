# HA Proxy tutorial (on windows) 
example of layer 4 and layer 7 proxy
## Instruction to use
 1. Clone the repo
 2. Run `npm i` in root folder to install dependencies
## layer 4 proxy (TCP Load Balancer)

1. Keep two processes of node app running, we will load balance between these processes.
2. Run below commands in separate cmd instances
	`set PORT=3333 && node index.js `
	`set PORT=4444 && node index.js ` 
3. cd into haproxy directory and run it using below command
	`cd ha-win && haproxy.exe -f ha-proxy-tcp(L4).conf -d`
4. Now go to browser and enter `localhost:8888` IP of proxy, It will show the content with port from actual process(say 3333), now kill that process and refresh again, you will get response from  port 4444.

## layer 7 proxy (Application Load Balancer)
1. Keep four processes of node app running, we will load balance between these processes.
2. Run below commands in separate cmd instances
	`set PORT=1111 && node index.js `
	`set PORT=2222 && node index.js ` 
	`set PORT=3333 && node index.js `
	`set PORT=4444 && node index.js ` 
3. cd into haproxy directory and run it using below command
	`cd ha-win && haproxy.exe -f ha-proxy-http(L7).conf -d`
4. Now go to browser and enter `localhost:9999` IP of proxy. Now this will show error `503 unavailable`. Because we have allowed only path `/app1` and `/app2`
5. You can try to hit paths `localhost:9999/app1` and `localhost:9999/app2` proxy will route you to respective servers 
6. Also you can see the requests are distrubuted in round_robin manner