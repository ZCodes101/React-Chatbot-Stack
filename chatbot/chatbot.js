'use strict'
const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');
const { response } = require('express');
const mongoose = require('mongoose');


const projectID = config.googleProjectID;

const sessionId = config.dialogFlowSessionID;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};


const sessionClient = new dialogflow.SessionsClient({projectID: projectID, credentials: credentials});


const sessionPath = sessionClient.sessionPath(
    projectID,
    sessionId
    );

 const Registration = mongoose.model('registration'); 


module.exports = {
    textQuery: async function(text, userID ,parameters = {}) {

       let sessionPath = sessionClient.sessionPath(projectID, sessionId + userID);


        let self = module.exports;

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            queryParms:{
                payload:{
                    data: parameters
                }
            }
        };
      let responses = await sessionClient
            .detectIntent(request);
           
         responses = await self.handleAction(responses);   
        return responses;
        
    },
    
    eventQuery: async function(event,userID , parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectID, sessionId + userID);


        let self = module.exports;

        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            
        };
      let responses = await sessionClient
            .detectIntent(request);
           
         responses = await self.handleAction(responses);   
        return responses;
        
    },


    handleAction: function(responses){
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        switch (queryResult.action) {
            case 'contact-yes':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);
                }
                break;
        }

        return responses;
    },



    saveRegistration: async function(fields){
        const registration = new Registration({
            name: fields.name.stringValue,
            phone: fields.phone.stringValue,
            email: fields.email.stringValue,
            notes: fields.notes.stringValue,

            dateSent: Date.now()
        });
        try{
            let reg = await registration.save();
            console.log(reg);
        } catch (err){
            console.log(err);
        }
    }


}