const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
var mongoose = require('mongoose');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'ajxakL6ciVc5dSe8nc7h_HWQ5GC8kAU3WSXqVAul2Bvt',
  }),
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/f16e1e92-3182-47b0-aa65-19b096e4b4d2',
});

const queryParams = {
  environmentId: '4cb673b0-d4a4-47ae-abde-f6874643a876',
  collectionId: 'd8dd0551-f5b1-431b-8d3b-3ddc4c1a5f83',
  naturalLanguageQuery: "sp"
};


discovery.query(queryParams)
.then(queryResponse => {
    var entity = new watson({
      keyword1: queryResponse.result.naturalLanguageQuery
      });

    console.log(entity);
    entity.save(function (err) {
      if (err) throw err;
      console.log('Dados salvos com sucesso!');
});

  })
  .catch(err => {
    console.log('error:', err);
  });



  
  mongoose.connect('mongodb://localhost:27017/keywords');
  var watson = mongoose.model('features',{
    keyword1: String,
    keyword2: String,
    keyword3: String
    } );

