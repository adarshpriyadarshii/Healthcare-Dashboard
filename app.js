const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html"); 
});
app.post("/", function(req, res){
    const state = req.body.stateName;
    

    const url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const covidData = JSON.parse(data)
            const activeCase = covidData.activeCases
            var region,tinfected,ninfected,recovered,nrecovered,dead,ndead;
        switch(state){
            case "Andaman and Nicobar Islands":
                region=covidData.regionData[0].region;
                tinfected=covidData.regionData[0].totalInfected;
                ninfected=covidData.regionData[0].newInfected;
                recovered=covidData.regionData[0].recovered;
                nrecovered=covidData.regionData[0].newRecovered;
                dead=covidData.regionData[0].deceased;
                ndead=covidData.regionData[0].newDeceased;break;
            case "Andhra Pradesh":
                region=covidData.regionData[1].region;
                tinfected=covidData.regionData[1].totalInfected;
                ninfected=covidData.regionData[1].newInfected;
                recovered=covidData.regionData[1].recovered;
                nrecovered=covidData.regionData[1].newRecovered;
                dead=covidData.regionData[1].deceased;
                ndead=covidData.regionData[1].newDeceased;break;
            case "Arunachal Pradesh":
                region=covidData.regionData[2].region;
                tinfected=covidData.regionData[2].totalInfected;
                ninfected=covidData.regionData[2].newInfected;
                recovered=covidData.regionData[2].recovered;
                nrecovered=covidData.regionData[2].newRecovered;
                dead=covidData.regionData[2].deceased;
                ndead=covidData.regionData[2].newDeceased;break;
            case "Assam":
                region=covidData.regionData[3].region;
                tinfected=covidData.regionData[3].totalInfected;
                ninfected=covidData.regionData[3].newInfected;
                recovered=covidData.regionData[3].recovered;
                nrecovered=covidData.regionData[3].newRecovered;
                dead=covidData.regionData[3].deceased;
                ndead=covidData.regionData[3].newDeceased;break;
            case "Bihar":
                region=covidData.regionData[4].region;
                tinfected=covidData.regionData[4].totalInfected;
                ninfected=covidData.regionData[4].newInfected;
                recovered=covidData.regionData[4].recovered;
                nrecovered=covidData.regionData[4].newRecovered;
                dead=covidData.regionData[4].deceased;
                ndead=covidData.regionData[4].newDeceased;break;
            case "Chandigarh":
                region=covidData.regionData[5].region;
                tinfected=covidData.regionData[5].totalInfected;
                ninfected=covidData.regionData[5].newInfected;
                recovered=covidData.regionData[5].recovered;
                nrecovered=covidData.regionData[5].newRecovered;
                dead=covidData.regionData[5].deceased;
                ndead=covidData.regionData[5].newDeceased;break;
            case "Chhattisgarh":
                region=covidData.regionData[6].region;
                tinfected=covidData.regionData[6].totalInfected;
                ninfected=covidData.regionData[6].newInfected;
                recovered=covidData.regionData[6].recovered;
                nrecovered=covidData.regionData[6].newRecovered;
                dead=covidData.regionData[6].deceased;
                ndead=covidData.regionData[6].newDeceased;break;
            case "Dadra and Nagar Haveli and Daman and Diu":
                region=covidData.regionData[7].region;
                tinfected=covidData.regionData[7].totalInfected;
                ninfected=covidData.regionData[7].newInfected;
                recovered=covidData.regionData[7].recovered;
                nrecovered=covidData.regionData[7].newRecovered;
                dead=covidData.regionData[7].deceased;
                ndead=covidData.regionData[7].newDeceased;break;
            case "Delhi":
                region=covidData.regionData[8].region;
                tinfected=covidData.regionData[8].totalInfected;
                ninfected=covidData.regionData[8].newInfected;
                recovered=covidData.regionData[8].recovered;
                nrecovered=covidData.regionData[8].newRecovered;
                dead=covidData.regionData[8].deceased;
                ndead=covidData.regionData[8].newDeceased;break;
            case "Goa":
                region=covidData.regionData[9].region;
                tinfected=covidData.regionData[9].totalInfected;
                ninfected=covidData.regionData[9].newInfected;
                recovered=covidData.regionData[9].recovered;
                nrecovered=covidData.regionData[9].newRecovered;
                dead=covidData.regionData[9].deceased;
                ndead=covidData.regionData[9].newDeceased;break;
            case "Gujarat":
                region=covidData.regionData[10].region;
                tinfected=covidData.regionData[10].totalInfected;
                ninfected=covidData.regionData[10].newInfected;
                recovered=covidData.regionData[10].recovered;
                nrecovered=covidData.regionData[10].newRecovered;
                dead=covidData.regionData[10].deceased;
                ndead=covidData.regionData[10].newDeceased;break;
            case "Haryana":
                region=covidData.regionData[11].region;
                tinfected=covidData.regionData[11].totalInfected;
                ninfected=covidData.regionData[11].newInfected;
                recovered=covidData.regionData[11].recovered;
                nrecovered=covidData.regionData[11].newRecovered;
                dead=covidData.regionData[11].deceased;
                ndead=covidData.regionData[11].newDeceased;break;
            case "Himachal Pradesh":
                region=covidData.regionData[12].region;
                tinfected=covidData.regionData[12].totalInfected;
                ninfected=covidData.regionData[12].newInfected;
                recovered=covidData.regionData[12].recovered;
                nrecovered=covidData.regionData[12].newRecovered;
                dead=covidData.regionData[12].deceased;
                ndead=covidData.regionData[12].newDeceased;break;
            case "Jammu and Kashmir":
                region=covidData.regionData[13].region;
                tinfected=covidData.regionData[13].totalInfected;
                ninfected=covidData.regionData[13].newInfected;
                recovered=covidData.regionData[13].recovered;
                nrecovered=covidData.regionData[13].newRecovered;
                dead=covidData.regionData[13].deceased;
                ndead=covidData.regionData[13].newDeceased;break;
            case "Jharkhand":
                region=covidData.regionData[14].region;
                tinfected=covidData.regionData[14].totalInfected;
                ninfected=covidData.regionData[14].newInfected;
                recovered=covidData.regionData[14].recovered;
                nrecovered=covidData.regionData[14].newRecovered;
                dead=covidData.regionData[14].deceased;
                ndead=covidData.regionData[14].newDeceased;break;
            case "Karnataka":
                region=covidData.regionData[15].region;
                tinfected=covidData.regionData[15].totalInfected;
                ninfected=covidData.regionData[15].newInfected;
                recovered=covidData.regionData[15].recovered;
                nrecovered=covidData.regionData[15].newRecovered;
                dead=covidData.regionData[15].deceased;
                ndead=covidData.regionData[15].newDeceased;break;
            case "Kerala":
                region=covidData.regionData[16].region;
                tinfected=covidData.regionData[16].totalInfected;
                ninfected=covidData.regionData[16].newInfected;
                recovered=covidData.regionData[16].recovered;
                nrecovered=covidData.regionData[16].newRecovered;
                dead=covidData.regionData[16].deceased;
                ndead=covidData.regionData[16].newDeceased;break;
            case "Ladakh":
                region=covidData.regionData[17].region;
                tinfected=covidData.regionData[17].totalInfected;
                ninfected=covidData.regionData[17].newInfected;
                recovered=covidData.regionData[17].recovered;
                nrecovered=covidData.regionData[17].newRecovered;
                dead=covidData.regionData[17].deceased;
                ndead=covidData.regionData[17].newDeceased;break;
            case "Lakshadweep":
                region=covidData.regionData[18].region;
                tinfected=covidData.regionData[18].totalInfected;
                ninfected=covidData.regionData[18].newInfected;
                recovered=covidData.regionData[18].recovered;
                nrecovered=covidData.regionData[18].newRecovered;
                dead=covidData.regionData[18].deceased;
                ndead=covidData.regionData[18].newDeceased;break;
            case "Madhya Pradesh":
                region=covidData.regionData[19].region;
                tinfected=covidData.regionData[19].totalInfected;
                ninfected=covidData.regionData[19].newInfected;
                recovered=covidData.regionData[19].recovered;
                nrecovered=covidData.regionData[19].newRecovered;
                dead=covidData.regionData[19].deceased;
                ndead=covidData.regionData[19].newDeceased;break;
            case "Maharashtra":
                region=covidData.regionData[20].region;
                tinfected=covidData.regionData[20].totalInfected;
                ninfected=covidData.regionData[20].newInfected;
                recovered=covidData.regionData[20].recovered;
                nrecovered=covidData.regionData[20].newRecovered;
                dead=covidData.regionData[20].deceased;
                ndead=covidData.regionData[20].newDeceased;break;
            case "Manipur":
                region=covidData.regionData[21].region;
                tinfected=covidData.regionData[21].totalInfected;
                ninfected=covidData.regionData[21].newInfected;
                recovered=covidData.regionData[21].recovered;
                nrecovered=covidData.regionData[21].newRecovered;
                dead=covidData.regionData[21].deceased;
                ndead=covidData.regionData[21].newDeceased;break;
            case "Meghalaya":
                region=covidData.regionData[22].region;
                tinfected=covidData.regionData[22].totalInfected;
                ninfected=covidData.regionData[22].newInfected;
                recovered=covidData.regionData[22].recovered;
                nrecovered=covidData.regionData[22].newRecovered;
                dead=covidData.regionData[22].deceased;
                ndead=covidData.regionData[22].newDeceased;break;
            case "Mizoram":
                region=covidData.regionData[23].region;
                tinfected=covidData.regionData[23].totalInfected;
                ninfected=covidData.regionData[23].newInfected;
                recovered=covidData.regionData[23].recovered;
                nrecovered=covidData.regionData[23].newRecovered;
                dead=covidData.regionData[23].deceased;
                ndead=covidData.regionData[23].newDeceased;break;
            case "Nagaland":
                region=covidData.regionData[24].region;
                tinfected=covidData.regionData[24].totalInfected;
                ninfected=covidData.regionData[24].newInfected;
                recovered=covidData.regionData[24].recovered;
                nrecovered=covidData.regionData[24].newRecovered;
                dead=covidData.regionData[24].deceased;
                ndead=covidData.regionData[24].newDeceased;break;
            case "Odisha":
                region=covidData.regionData[25].region;
                tinfected=covidData.regionData[25].totalInfected;
                ninfected=covidData.regionData[25].newInfected;
                recovered=covidData.regionData[25].recovered;
                nrecovered=covidData.regionData[25].newRecovered;
                dead=covidData.regionData[25].deceased;
                ndead=covidData.regionData[25].newDeceased;break;
            case "Puducherry":
                region=covidData.regionData[26].region;
                tinfected=covidData.regionData[26].totalInfected;
                ninfected=covidData.regionData[26].newInfected;
                recovered=covidData.regionData[26].recovered;
                nrecovered=covidData.regionData[26].newRecovered;
                dead=covidData.regionData[26].deceased;
                ndead=covidData.regionData[26].newDeceased;break;
            case "Punjab":
                region=covidData.regionData[27].region;
                tinfected=covidData.regionData[27].totalInfected;
                ninfected=covidData.regionData[27].newInfected;
                recovered=covidData.regionData[27].recovered;
                nrecovered=covidData.regionData[27].newRecovered;
                dead=covidData.regionData[27].deceased;
                ndead=covidData.regionData[27].newDeceased;break;
            case "Rajasthan":
                region=covidData.regionData[28].region;
                tinfected=covidData.regionData[28].totalInfected;
                ninfected=covidData.regionData[28].newInfected;
                recovered=covidData.regionData[28].recovered;
                nrecovered=covidData.regionData[28].newRecovered;
                dead=covidData.regionData[28].deceased;
                ndead=covidData.regionData[28].newDeceased;break;
            case "Sikkim":
                region=covidData.regionData[29].region;
                tinfected=covidData.regionData[29].totalInfected;
                ninfected=covidData.regionData[29].newInfected;
                recovered=covidData.regionData[29].recovered;
                nrecovered=covidData.regionData[29].newRecovered;
                dead=covidData.regionData[29].deceased;
                ndead=covidData.regionData[29].newDeceased;break;
            case "Tamil Nadu":
                region=covidData.regionData[30].region;
                tinfected=covidData.regionData[30].totalInfected;
                ninfected=covidData.regionData[30].newInfected;
                recovered=covidData.regionData[30].recovered;
                nrecovered=covidData.regionData[30].newRecovered;
                dead=covidData.regionData[30].deceased;
                ndead=covidData.regionData[30].newDeceased;break;
            case "Telangana":
                region=covidData.regionData[31].region;
                tinfected=covidData.regionData[31].totalInfected;
                ninfected=covidData.regionData[31].newInfected;
                recovered=covidData.regionData[31].recovered;
                nrecovered=covidData.regionData[31].newRecovered;
                dead=covidData.regionData[31].deceased;
                ndead=covidData.regionData[31].newDeceased;break;
            case "Tripura":
                region=covidData.regionData[32].region;
                tinfected=covidData.regionData[32].totalInfected;
                ninfected=covidData.regionData[32].newInfected;
                recovered=covidData.regionData[32].recovered;
                nrecovered=covidData.regionData[32].newRecovered;
                dead=covidData.regionData[32].deceased;
                ndead=covidData.regionData[32].newDeceased;break;
            case "Uttarakhand":
                region=covidData.regionData[33].region;
                tinfected=covidData.regionData[33].totalInfected;
                ninfected=covidData.regionData[33].newInfected;
                recovered=covidData.regionData[33].recovered;
                nrecovered=covidData.regionData[33].newRecovered;
                dead=covidData.regionData[33].deceased;
                ndead=covidData.regionData[33].newDeceased;break;
            case "Uttar Pradesh":
                region=covidData.regionData[34].region;
                tinfected=covidData.regionData[34].totalInfected;
                ninfected=covidData.regionData[34].newInfected;
                recovered=covidData.regionData[34].recovered;
                nrecovered=covidData.regionData[34].newRecovered;
                dead=covidData.regionData[34].deceased;
                ndead=covidData.regionData[34].newDeceased;break;
            case "West Bengal":
                region=covidData.regionData[35].region;
                tinfected=covidData.regionData[35].totalInfected;
                ninfected=covidData.regionData[35].newInfected;
                recovered=covidData.regionData[35].recovered;
                nrecovered=covidData.regionData[35].newRecovered;
                dead=covidData.regionData[35].deceased;
                ndead=covidData.regionData[35].newDeceased;break;
            default:
                region=" ~Enter Proper Name !~ ";
                tinfected=0;
                ninfected=0;
                recovered=0;
                nrecovered=0;
                dead=0;
                ndead=0;
         }
            res.write("<h1 ><mark>This is Data for " + region + ".</mark></h1>");
            res.write("<h2>Total no. of Infected: <mark>" + tinfected + ".</mark></h2>");
            res.write("<h2>No. of New Infected: <mark>" + ninfected + ".</mark></h2>");
            res.write("<h2>Total no. of Recovered: <mark>" + recovered + ".</mark></h2>");
            res.write("<h2>No. of New Recovered: <mark>" + nrecovered + ".</mark></h2>");
            res.write("<h2>Total no. of Deceased: <mark>" + dead + ".</mark></h2>");
            res.write("<h2>No. of New Deceased: <mark>" + ndead + ".</mark></h2>");
            res.write("<h1><mark>Go Back for another search.</mark></h1>");
            res.send()
        })
    })

})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running.");
}) 