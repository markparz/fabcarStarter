var profile = require ('./creds.json');

function getChannelName(){
    var keys = Object.keys(profile.channels);
    return keys[0];
}
function getCAUrl(){
    return profile.certificateAuthorities["org1-ca"].url;
}
function getCAName(){
    return profile.certificateAuthorities["org1-ca"].caName;
}
function getMSP(){
    return profile.organizations.org1.mspid;
}
function getPeerUrl(){
    return profile.peers["org1-peer1"].url;

}
function getEventUrl() {
    return profile.peers["org1-peer1"].eventUrl;
}
function getOrdererUrl(){
    return profile.orderers.orderer.url;
}
function getGrpcOpts(){
    let data = profile.orderers.orderer.tlsCACerts.pem;
    let grpcOpts = {
	    pem: data,
	    'ssl-target-name-override': null
    };
    return grpcOpts
}

function getAdminID(){
    return profile.certificateAuthorities["org1-ca"].registrar[0].enrollId;
}

function getAdminSecret(){
    return profile.certificateAuthorities["org1-ca"].registrar[0].enrollSecret;
}
exports.getChannelName = getChannelName;
exports.getCAUrl = getCAUrl;
exports.getPeerUrl = getPeerUrl;
exports.getEventUrl = getEventUrl;
exports.getOrdererUrl = getOrdererUrl;
exports.getCAName = getCAName;
exports.getMSP = getMSP;
exports.getAdminID = getAdminID;
exports.getAdminSecret = getAdminSecret;
exports.getGrpcOpts = getGrpcOpts;
module.exports.CHAINCODE_NAME = 'fabcar';