const nsq = require('nsqjs');
const nsqWriter = new nsq.Writer('127.0.0.1', 4150);
nsqWriter.connect();
nsqWriter.on('ready', () => {
  nsqWriter.publish('sample_topic', 'it really tied the room together');
  nsqWriter.publish('sample_topic', [
    'Uh, excuse me. Mark it zero. Next frame.',
    'Smokey, this is not \'Nam. This is bowling. There are rules.'
  ]);
  nsqWriter.publish('sample_topic', 'Wu?', err => {
    if (err) { return console.error(err.message); }
    console.log('Message sent successfully');
    nsqWriter.close();
  });
});

nsqWriter.on('closed', () => {
  console.log('Writer closed');
});