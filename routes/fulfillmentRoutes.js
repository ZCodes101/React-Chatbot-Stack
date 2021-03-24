const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');


module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function snoopy(agent) {
            agent.add(`Welcome to my Snoopy fulfillment!`);
        }

        async function registration(agent) {

            const registration = new Registration({
                name: agent.parameters.name,
                phone: agent.parameters.phone,
                email: agent.parameters.email,
                dateSent: Date.now()
            });
            try{
                let reg = await registration.save();
                console.log(reg);
            } catch (err){
                console.log(err);
            }
        }

        async function learn(agent) {

            Demand.findOne({'course': agent.parameters.courses}, function(err, course) {
                if (course !== null ) {
                    course.counter++;
                    course.save();
                } else {
                    const demand = new Demand({course: agent.parameters.courses});
                    demand.save();
                }
            });
  
            agent.add(responseText);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }

        let intentMap = new Map();
   
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

}