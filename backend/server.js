const express=require("express");
const bodyParser=require("body-parser");
const cors= require("cors");
const app = express();
const create_question_bank=require("./question_bank")
const questions=create_question_bank();
questions.message="HI YALL";
app.use(bodyParser.json());
app.use(cors());


app.get('/user',(req,res)=>{
    res.json(questions);
    // res.json(questions);
})
let info;

app.post("/submitform",async(req,res)=>{
    info=req.body;

    console.log(info);
    res.json({ success: true, message: 'Form data received successfully' });
})
app.get("/question",async(req,res)=>{
    
    if (info)
    {
        const easy_ques=questions.filter((e)=>e.dificulty==="easy");
        const medium_ques=questions.filter((e)=>e.dificulty==="medium");
        const hard_ques=questions.filter((e)=>e.dificulty==="hard");
        const finalQues=[];
        const easy_ques_no=Math.round(((parseInt(info.easy)/100)*parseInt(info.total_marks))/20);
        const medium_ques_no=Math.round(((parseInt(info.medium)/100)*parseInt(info.total_marks))/20);
        const hard_ques_no=Math.round(info.total_marks-(easy_ques_no*20+medium_ques_no*20))/20;
        for (let i =0;i<parseInt(easy_ques_no);i++)
        {
            finalQues.push(easy_ques[i])
        }
        for (let i =0;i<parseInt(medium_ques_no);i++)
        {
            finalQues.push(medium_ques[i])
        }
        for (let i =0;i<parseInt(hard_ques_no);i++)
        {
            finalQues.push(hard_ques[i])
        }
        res.json(finalQues)

    }
    else 
    {
        res.json({status:false,message:"NO data recieved"});
    }
    // for (let i =0;i<parseInt(info.dificulty);i++)
    // {
    //     if (easy_ques[i].dificulty==="easy") finalQues.append(easy_ques[i])
    // }
    // res.json(finalQues);


});
app.listen(5000,(req,res)=>{
    console.log("app running on port 5000");
})