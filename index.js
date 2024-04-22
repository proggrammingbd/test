const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');
const FILE_PATH ='./data.json';
const random =require('random');



const DATE= moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
const makeCommit=(n)=>{
    const x=random.int(0,54);
    const y=random.int(0,6)
    const date={
        date:DATE
    }
    jsonfile.writeFile(FILE_PATH,date,()=>{
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
    });
}


makeCommit(100);