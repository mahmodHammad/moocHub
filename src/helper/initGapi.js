var listchindrens = folderID => {
  return new Promise((resolve, reject) => {
    let q = transformFolderID(folderID);
    window.gapi.client.drive.files
      .list({ q })
      .then(e => {
        console.log(e)
        resolve(e.result);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

// to make it    "1DQNrFndwdH1_D_026miRfwM7nA1duKVF" in parents
function transformFolderID(folderID) {
  let parent = "in parents";
  let s1 = "";
  let s2 = s1.concat('"' + folderID + '" ' + parent);
  return s2;
}
export default listchindrens;
