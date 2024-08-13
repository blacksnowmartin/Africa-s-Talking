const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'atsk_753a0d6514aebb6e4c622ef2db054ea25efda84c4431af26a057381e3132151c36d979b0', 
  username: 'sandbox'
});



module.exports = async function sendSMS() {
    
    // TODO: Send message
try {
  const result=await africastalking.SMS.send({
    to: '[+254700895391]', 
    message: 'Hello Blacksnow Martin... Do not forget you will always remain great!',
    from: '[37779]'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};