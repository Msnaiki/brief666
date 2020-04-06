const path = require('path');

const express = require("express");
const hbs = require('hbs');
const dataAccess = require('./MyModules/dataAccess');
const app = express();
const extentionsPath = path.join(__dirname, './Extensions');

var bodyParser = require('body-parser'),
 
path_jsonfile = 'Data/data.json';

var data = dataAccess.LoadJson(path_jsonfile);
var Questions = dataAccess.LoadJson('Data/Questions.json');
var Departement_Data= dataAccess.LoadJson('Data/Departement.json');



urlencodedParser = bodyParser.urlencoded({ extended: false });
// *Define paths for express config
const viewPath = path.join(__dirname, './views');
// *setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('vien engine','pug');

app.set('views', viewPath)

hbs.registerPartials(extentionsPath)
 
app.use("/Style",express.static("./Style"))
app.use("/Script",express.static("./Script"))
app.use("/Images",express.static("./Images"))

// Lancement des pages
app.get("/Q&A.hbs", (req, res) => {
  res.render('Q&A');
});
app.get("/QA.hbs", (req, res) => {
  res.render('QA',{Departement_Data});
  console.log(Departement_Data)
  
});
 
app.get("/Signup.hbs", (req, res) => {
    res.render('Signup');
  });

  app.get("/", (req, res) => {
    res.render('404');
  });
  
  app.get('/index',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

// Port
var port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));
/*server local*/
//filer
app.post("/QA.hbs",function(req,res){
  var Questions = dataAccess.LoadJson('Data/Questions.json');
  var Question_Data=[{ID:null, dep:null, province:null, commune:null, cin:null, objet:null, msg:null, date:null}] ;
  var j=0;
  for (var i =0; i<Questions.length;i++){
    if(req.body.name_depp == Questions[i].dep){
      Question_Data[j]=Questions[i];
      j++;
    }
  }
  res.render('QA.hbs',{Question_Data});
}); 


 
//l'ajout d'un nouveau utilisateur
app.post('/submit',urlencodedParser, function (req, res) {
    
  var methode = Personne.prototype;
   function Personne(Nom,Prenom,Cin,qualite,tel,submit)
   {
       this.Nom= Nom;
       this.Prenom= Prenom;
       this.Cin= Cin;
       this.qualite=qualite;
       this.tel=tel;
       this.submit=submit;

   } 
   console.log(req.body);
   
  


   

   var Personne1 = new Personne(req.body.Nom,req.body.Prenom,req.body.CIN,req.body.Qualite,req.body.tel,'true') ;


   
 
     
     

      // data.persons.forEach(element => {
        
      //     console.log(element.Cin.split("#"));
      // });
      var list_Cin = [] ;
      var j=0;

      data.persons.forEach(element => {
        
        list_Cin [j]= element.Cin.split("#") ;
        j++;
    });
    
 

      console.log(req.body.CIN);
 
      console.log(list_Cin[0].length);

      function Search_Data_Exist(cible,arr)
{
  var trouve = false;

  for(var i=0;i<arr[0].length;i++)
  {
    if(arr[0][i]==cible)
    {
       
      trouve=true;
      console.log(arr[0][i]);
      break;
     
    }

  }
   
    
 
    
 
    if(trouve==false)
    {
        return -1;
    }
    else 
    return 1;

   


}

    var test=Search_Data_Exist(req.body.CIN,list_Cin);


   
      if(test==-1)
      {
        data.persons[0].Nom =data.persons[0].Nom+"#"+Personne1.Nom;
        data.persons[0].Prenom =data.persons[0].Prenom+"#"+Personne1.Prenom;
        data.persons[0].qualite =data.persons[0].qualite+"#"+Personne1.qualite;
        data.persons[0].Cin =data.persons[0].Cin+"#"+Personne1.Cin;
        data.persons[0].tel =data.persons[0].tel+"#"+Personne1.tel;
  
        data.persons[0].submit =data.persons[0].submit+"#"+Personne1.submit;
        //    push_Data();
       dataAccess.SaveJson(path_jsonfile,data);
       res.render('registeration_Done.hbs');

      }
      else
      {
        res.render('registeration_undone.hbs');

      }

 
  
});

app.post('/submit1.0',urlencodedParser, function (req, res) {

  var methode_question = Question.prototype;
  function Question (id,dep,province,commune,cin,objet,msg,date)
  {
          this.id=id;
          this.dep= dep;
          this.province= province;
          this.commune= commune;
          this.cin=cin;
          this.objet=objet;
          this.msg=msg;
          this.date=date;

  }
 
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
      
    
  var QuestionData = dataAccess.LoadJson('Data/Questions.json');

  Save_Question(QuestionData);
  res.render('msg_sent');

  function Save_Question (obj)
 
  {
    var id=obj[obj.length - 1].ID + 1;
    var Q1 = new Question(id,req.body.name_dep,req.body.name_prov,req.body.name_commune,req.body.name_cin,req.body.name_objet,req.body.name_message,dateTime);
    console.log(Q1);
    var dataToPush =
        {
              ID  : Q1.id,
              dep : Q1.dep,
          province:Q1.province,
          commune :Q1.commune,
          cin     :Q1.cin,
          objet   :Q1.objet,
          msg     :Q1.msg,
          date    :Q1.date
      
      };
      console.log(dataToPush);

      obj.push(dataToPush);
      
      dataAccess.SaveJson('Data/Questions.json',obj);

  }


 });


 


