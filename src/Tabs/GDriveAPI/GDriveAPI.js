import React, { Component } from 'react';

class GDriveAPI extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.listFiles = this.listFiles.bind(this);
        this.listFilesSuccess = this.listFilesSuccess.bind(this);
    }

    onClick(){
      this.listFiles();
    }
    
    listFiles() {
      window.gapi.client.drive.files.list({
          'pageSize': 10,
          'fields': "nextPageToken, files(id, name)"
        }).then(this.listFilesSuccess);
      }

      listFilesSuccess(response){
        this.appendPre('Files:');
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.appendPre(file.name + ' (' + file.id + ')');
          }
        } else {
          this.appendPre('No files found.');
        }
      }

    appendPre(message) {
        var pre = document.getElementById('listFiles');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

    render(){
        return <div>
             <button className= "button" onClick={this.onClick}>List Files</button>
             <pre id = "listFiles"/>
            </div>;
    }
}


export default GDriveAPI;