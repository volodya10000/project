console.log("Hello World");



var team = new Object();
var team = {
    position : [ "Junior developer" , "Middle developer" , "Senior developer" , "Junior QA" , "Middle QA" , "Senior QA" , "Project managar"],
    namePerson : new Array (7),

    getname: function() {
        for (i = 0 ; i < this.position.length ; i++ ) {
        this.namePerson[i] = prompt (" Введіть im'я : " + this.position[i] + ":") };
        console.log(this.namePerson);
    },
   
    infoWorkers: new Array(7),
    getfullInfo : function() {
      
        for (i = 0 ; i < this.position.length ; i++ ) {
            this.infoWorkers[i] = this.position[i] + ' : ' + this.namePerson[i] };
            console.log(" Інформація про працівників : ");
            console.log(this.infoWorkers);
    },

    salary : new Array(7),
    randomSalary : function() {
        for (i = 0; i < this.position.length; i++) {
    //   if (this.position[i] === "Junior developer") {                    
    //     this.salary[i] = Math.random() * (max - min) + min;
    //     console.log(this.salary)  }
            if (this.position[i].indexOf("Junior developer") !== -1 ){
                this.salary[i] = Math.random() * ((max = 1000 )- (min = 500)) + 500; 
            }else if (this.position[i].indexOf("Middle developer") !== -1 ){
                this.salary[i] = Math.random() * ((max = 2000 )- (min = 1500)) + 1500; 
            }else if (this.position[i].indexOf("Senior developer") !== -1 ){
                this.salary[i] = Math.random() * ((max = 3000 )- (min = 2500)) + 2500; 
            }else if (this.position[i].indexOf("Junior QA") !== -1 ){
                this.salary[i] = Math.random() * ((max = 1000 )- (min = 500)) + 500; 
            }else if (this.position[i].indexOf("Middle QA") !== -1 ){
                this.salary[i] = Math.random() * ((max = 2000 )- (min = 1500)) + 1500; 
            }else if (this.position[i].indexOf("Senior QA") !== -1 ){
                this.salary[i] = Math.random() * ((max = 3000 )- (min = 2500)) + 2500; 
            }else if(this.position[i].indexOf("Project managar") !== -1 ){
                this.salary[i] = Math.random() * ((max = 4500 )- (min = 4000)) + 4000; 
            }  
        }console.log(this.salary);
    },

    tellAbout : new Array(7),
    tellAboutYourSelf : function() {
        for (i = 0; i < this.infoWorkers.length; i++) {
            this.tellAbout[i] = " Мене звати - " + this.namePerson[i] + ", знаходжусь на посаді -" + this.position[i] + " , Моя зарплата складає :  " + this.salary[i] + " $ " ;
        }
        console.log(this.tellAbout);                  
    },

    showTeam : new Array(7),                     //тут можливо не докінця зрозумів завдання бо воно дуже схоже до минулого методу , або в минулому не так зрозумів. А може і все ок)
    showT: function() { 
        for (i = 0; i < this.infoWorkers.length; i++) {
            this.showTeam[i] = this.namePerson[i] + " - " + this.position[i] + " .Зарплата - " + this.salary[i] + " $ " ;
        }
         console.log(this.showTeam); 
    }



}

team.getname();
team.getfullInfo();
team.randomSalary();
team.tellAboutYourSelf();
team.showT();