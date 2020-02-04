const API_KEY = "AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0";

function listchindrens(folderID) {
    let q = transformFolderID(folderID);
    window.gapi.client.drive.files
      .list({q}).then((e, f) => {
          console.log("holy shit", e);
          return(e.result);
      }).catch(err=>{
          console.error(err)
      })
  }
  
  // to make it    "1DQNrFndwdH1_D_026miRfwM7nA1duKVF" in parents
  function transformFolderID(folderID) {
    let parent = "in parents";
    let s1 = "";
    let s2 = s1.concat('"' + folderID + '" ' + parent);
    return s2;
  }
  export default transformFolderID