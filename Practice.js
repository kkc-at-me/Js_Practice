#!/bin/env node
"strict mode";

const Object1 = {
	fname : "Araign",
        lname : "pirate",
        age : "2",
        language : "",
        set lang(data){
            this.language = data;
        },
        get fullname() {
            return this.fname +" "+ this.lname;
        }
};

console.log(Object1.fullname);
