const jsonfile=require('jsonfile')
const moment=require('moment')

const FILE_PATH ='./data.json';


const DATE= moment().format();

const date={
    date:DATE
}
writeFile(FILE_PATH,date)
