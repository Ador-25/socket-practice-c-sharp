const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', socket => {
  console.log('Client connected');

  socket.send('Welcome to the WebSocket server!\nPlease enter two numbers separated by a space: \n');

  socket.on('message', data => {

    console.log(data)
    const message = data.toString(); // Convert the message object to a string
    const [num1, num2] = message.trim().split(' ');

    if (isNaN(num1) || isNaN(num2)) {
      console.log(num1)
      console.log(num2)
    } else {
      const sum = parseFloat(num1) + parseFloat(num2);
      console.log(num1)
      console.log(num2)
      socket.send(`\n The sum of ${num1} and ${num2} is: ${sum}\n`);
      console.log(`The sum of ${num1} and ${num2} is: ${sum}\n`)
    }
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('Server started on port 3000');
