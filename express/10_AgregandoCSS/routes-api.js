const express=require("express");
const router=express.Router();

router.get("/api/v1/getBalance",(req,res)=>{
    res.json({
        usdc : 98,
        ars : 10000
    })
});

router.get("/api/v1/getAccounts",(req,res)=>{
    res.json({
        cuenta1 : '0x1234332131231243243242131243452',
        cuenta2 : '0x9879887131231243243242139809808'
    })
});

module.exports = router;