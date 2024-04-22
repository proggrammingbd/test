const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');
const FILE_PATH ='./data.json';


const DATE= moment().format();

const date={
    date:DATE
}
jsonfile.writeFile(FILE_PATH,date)

simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE})