const AWS = require('aws-sdk');
const keys = require('../../config/env/index');
class SendingSES {
  sendingEmail(reciver, design) {
    AWS.config.update({
      accessKeyId: keys.accessKeyId,
      secretAccessKey: keys.secretAccessKey,
      region: keys.region
    });

    var params = {
      Destination: {
        ToAddresses: [
          //single mail or multiple mails separated by comma
        ]
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: design
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'MOK' //
        }
      },
      Source: 'mok@mok.co.il' ///will be your domian
    };
    params.Destination.ToAddresses[0] = reciver; //'nirdahan23@gmail.com'; //destinationEmails; reciver we can write your email for now ok
    var sendPromise = new AWS.SES().sendEmail(params).promise();
    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function(data) {
        console.log(data.MessageId);
      })
      .catch(function(err) {
        console.error(err, err.stack);
      });
  }
}
module.exports = new SendingSES();
