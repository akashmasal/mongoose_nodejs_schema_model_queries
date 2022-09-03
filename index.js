const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoose").then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});

const employeeSchema = new mongoose.Schema({
    id : Number,
    name : String,
    designation : String,
    salary : Number,
    department : String,
    joining_date : Date,
    active : Boolean
});

const Employee = new mongoose.model("Employee",employeeSchema);

const createDocument = async()=>{
    try{
        const employee_one = new Employee({
            id : 1,
            name : "akash",
            designation : "Developer",
            salary : 0,
            department : "web development",
            joining_date : 04-04-2020,
            active : true
        });
        const employee_two = new Employee({
            id : 2,
            name : "amit",
            designation : "Developer",
            salary : 0,
            department : "web development",
            joining_date : 04-04-2020,
            active : true
        });
        const employee_three = new Employee({
            id : 3,
            name : "amit",
            designation : "Developer",
            salary : 0,
            department : "web development",
            joining_date : 04-04-2020,
            active : true
        });
        const employee_four = new Employee({
            id : 4,
            name : "amit",
            designation : "Developer",
            salary : 0,
            department : "web development",
            joining_date : 04-04-2020,
            active : true
        });
        const employee_five = new Employee({
            id : 5,
            name : "amit",
            designation : "Developer",
            salary : 0,
            department : "web development",
            joining_date : 04-04-2020,
            active : true
        });

        const result = await Employee.insertMany([employee_one,employee_two,employee_three,employee_four,employee_five]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// createDocument();

const getDocument = async ()=>{
    const get = await Employee.find();
    console.log(`list of all documents in employee model ${get}`);
};
getDocument();


