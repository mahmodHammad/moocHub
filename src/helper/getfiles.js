const listchindrens = (folderID , type) => {
  return new Promise((resolve, reject) => {
    let q 
    if(type ==="folder"){
       q =" name contains '_' and"+transformFolderID(folderID)+" and mimeType = 'application/vnd.google-apps.folder' "
    }else if(type ==="pdf"){
      q =transformFolderID(folderID)+" and mimeType = 'application/pdf'"
    }
    window.gapi.client.drive.files
      .list({ q ,orderBy:"createdTime",spaces:"drive",fields:"files(name ,id)" })
      .then(e => {
        resolve(e.result);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

// to make it    "1DQNrFndwdH1_D_026miRfwM7nA1duKVF" in parents
function transformFolderID(folderID) {
  let s1 = "";
  let s2 = s1+ '"' + folderID + '" in parents';
  return s2;
}
export default listchindrens;
