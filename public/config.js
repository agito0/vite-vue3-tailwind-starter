
var host = ""

var hostName = window.location.host;
var protocolStr = window.location.protocol;
var wsProtocol = 'ws://';
if(protocolStr == "http:"){
  wsProtocol = 'ws://';
}
if(protocolStr == "https:"){
  wsProtocol = 'wss://';
}

// if(window.location.host.indexOf('internel') != -1 || window.location.host.indexOf('wegrow') == -1){
//   host = 'https://internel-slardar.airudder.com'
// }else {
//   host = 'https://wegrow.airudder.com'
// }

window.globalConfig={
  host            :host,
  login           :host+'/api/login',
  user            :host+'/api/user',
  campaigns       :host+'/api/campaign',
  segment         :host+'/api/segment',
  automation      :host+'/api/automation',
  bill            :host+'/api/bill',
  site            :host+'/api/site',
  SockName        :wsProtocol + hostName,
  
  dev_host:"https://localhost:8088",
}
//接口路径 //协议：域名/api/版本/模块名/接口名/功能
