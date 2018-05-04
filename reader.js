const nsq = require('nsqjs');
const reader = new nsq.Reader('sample_topic', 'test_channel', {
  lookupdHTTPAddresses: '127.0.0.1:4161'
});
reader.connect();
reader.on('message', msg => {
  console.log('Received message [%s]', msg.id);
  console.log("message", msg.body.toString('utf8'));
  msg.finish();
});