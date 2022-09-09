declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
  }
  
  interface Window {
    globalConfig:{
      host:string,
      login:string,
      user:string,
      campaigns:string,
      segment:string,
      automation:string,
      bill:string,
      site:string,
      SockName:string,
    },
  }