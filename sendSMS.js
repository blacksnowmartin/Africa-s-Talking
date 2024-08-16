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

const AfricasTalking = require('africastalking');

// Replace with environment variables or configuration
const apiKey = 'atsk_753a0d6514aebb6e4c622ef2db054ea25efda84c4431af26a057381e3132151c36d979b0';
const username = 'sandbox';

const africastalking = AfricasTalking({ apiKey, username });

module.exports = async function sendSMS(phoneNumber, message) {
  try {
    // Validate phone number and message here
    const result = await africastalking.SMS.send({
      to: phoneNumber,
      message,
      from: '37779'
    });
    console.log(result);
    return result; // Return the result for potential further processing
  } catch (ex) {
    console.error(ex);
    // Handle error gracefully, e.g., retry, notify, throw custom error
    throw new Error('SMS sending failed', { cause: ex });
  }
};
