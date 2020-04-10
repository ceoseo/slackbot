const Slack = require('slack-node');
const schedule = require('node-schedule');
const webhookUri = "";
const slack = new Slack();

slack.setWebhook(webhookUri);

const send = async(message) => {
  slack.webhook({
	  text:message,
	  attachments:[
		{
		  fallback:"구글드라이브: <https://drive.google.com/drive/folders/|업무보고>",
		  pretext:"구글드라이브: <https://drive.google.com/drive/folders/|업무보고>",
	      color:"#00FFFF",
	      fields:[
	        {
	          title:"[알림]",
	          value:"퇴근전 주간보고 + 신나는 청소 = 행복한 주말",
	          short:false
	        }
	      ]
	    }
	  ]
	}, function(err, response){
	  console.log(response);
	});
}

schedule.scheduleJob('30 13 * * *', function(){
	send('[기반봇] 퇴근전에 업무보고 미리미리 쓰시지 말입니다.');
});
