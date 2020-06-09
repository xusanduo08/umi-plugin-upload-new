// ref:
// - https://umijs.org/plugin/develop.html
import { IApi } from '@umijs/types';
import validate from './utils/validate';
import uploadDir from './uploadDir';
import uploadFile from './uploadFile';
import unixy from './utils/unixy';
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

export default function (api: IApi, options:any) {
  api.describe({
    key:'upload',
    config: {
      default: {},
      schema(joi:any){
        return joi.object({
          host: joi.string(),
          username: joi.string(),
          sourcePath: joi.string(),
          targetPath: joi.string(),
          password: joi.string()
      })
      }
    }
  })
  options = options || api.userConfig.upload || {};
  options.targetPath = unixy(options.targetPath);
  options.sourcePath = unixy(options.sourcePath);
  let {targetPath, sourcePath, host, username, password} = options;
  
  api.onBuildComplete(() => {
    validate({validateTarget:host, validateName:'Host', validateItems: [{type:'type', value:'string'}, {type:'required'}]});
    validate({validateTarget: username, validateName:'Username', validateItems: [{type:'type', value:'string'}, {type:'required'}]});
    validate({validateTarget: sourcePath, validateName:'SourcePath', validateItems: [{type: 'required'}, {type:'type', value: 'string'}]});
    validate({validateTarget: targetPath,
      validateName:'TargetPath',
      validateItems: [
        {type:'type', value: 'string'},
        {type:'required'},
        {type:'absolute path', rule:(target)=>{
          if(!target.startsWith('/')){
            return false;
          }
          return true;
        }}
      ]
    })

    if(!password){
      inquirer.prompt([{
        type:'password',
        name:'password',
        message:'Please input your password'
      }]).then(answers => {
        upload({...options, password: answers.password})
      })
    } else {
      upload(options);
    }
  });
}

function upload(options){
  if(options.sourcePath.indexOf('*') !== -1){
    uploadFile(options);
  } else if(fs.statSync(path.resolve(options.sourcePath)).isDirectory()){
    uploadDir(options);
  } else {
    uploadFile(options);
  }
}
