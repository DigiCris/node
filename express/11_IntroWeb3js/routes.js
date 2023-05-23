const express=require("express");
const router=express.Router();

const Web3=require("web3");
var web3 = new Web3('HTTP://127.0.0.1:7545');

var balance;


router.get("/",(req,res)=>{
    res.render("index.ejs");
});

router.get("/getSBalance",async (req,res)=>{
    var address=req.query.address;
    console.log(address);
    balance=await getBalance(address);//'0x282228352194476920424af485f69Ac74d961386')
    res.render("getSBalance.ejs",{balance: balance});
});

async function getBalance(address){
    balance= await web3.eth.getBalance(address);//'0xCcfE43CAfEd4c12a8163acafC0A77e20710602a3');
    return balance;
}

module.exports = router;