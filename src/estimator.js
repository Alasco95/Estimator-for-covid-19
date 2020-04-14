const covid19ImpactEstimator = (data) =>  {
     data: {
    region: {
    avgDailyIncomeInUsd
    }
    reportedCases,
    timeToElaspse,
    periodType,
    Population,
    totalHospitalBeds
    } ;
    
    const impact;
    const severeImpact;
    
    //challenge 1
    
    impact.currentlyInfected= math.trunc(reportedCases * 10);
    severeImpact.currentlyInfected= math.trunc(reportedCases * 50);
    
    //check if the time elasped is in days weeks or months
    
    let timeFactor;
    
    switch (periodType.trim( ).toLowerCase( ))
    {
    case 'months':
    timeFactor = Math.trunc((timeToElaspe * 30) / 3);
    Break;
    case 'weeks':
    timeFactor = Math.trunc((timeToElaspe * 7) / 3);
    Break;
    
    case 'days':
    timeFactor = Math.trunc((timeToElaspe) / 3);
    Break;
    Default:
    ;
    
    };
    
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** timeFactor);
    
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * ( 2** timeFactor);
    
    //Challenge 2
    ImpactRequestedTime= impact.infectionsByRequestedTime * 0.15;
    
    SevereRequestedTime= 
    severeImpact.infectionsByRequestedTime * 0.15;
    
    impact.severeCasesByRequestedTime = Math.trunc(ImpactRequestedTime);
    severeImpact.severeCasesByRequestedTime = Math.trunc(severeImpactRequest);
    
    const bedsAvailable = totaHospitalBeds * 0.35;
    
    const ImpactHospitalBedval = bedsAvailable * ImpactRequestedTime;
    const sevImpactHospitalBedval = bedsAvailable * severeImpactRequest;
    
    impact.hospitalBedsByRequestedTime = Math.trunc(ImpactHospitalBedval);
    
    severeImpact.hospitalBedsByRequestedTime = Math.trunc(sevImpactHospitalBedval);
    
    //Challenge 3
    
    
    const ImpactCasesforICU =  impact.infectionsByRequestedTime * 0.05;
    const sevImpactCasesforICU = severeImpact.infectionsByRequestedTime * 0.05;
    const ImpactVentilator = impact.infectionsByRequestedTime * 0.02;
    const sevImpactVentilator = severeImpact.infectionsByRequestedTime * 0.02;
    
    impact.casesForICUByRequestedTime = Math.trunc(ImpactCasesforICU);
    severeImpact.casesForICUByRequestedTime = Math.trunc(sevImpactCasesforICU);
    
    impact.casesForVentilatorsByRequestedTime = Math.trunc(ImpactVentilator);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(sevImpactVentilator);
    
    let newDay;
    
    const compute = population * avgDailyIncomeInUsd;
    
    If (periodType === 'months') 
    {
    newDay = timeToElaspe * 30;
    
    impact.dollarsInFlight = {
    
    Math.trunc ( (impact.infectionsByRequestedTime * compute) / newDay)
    };
    
    severeImpact.dollarsInFlight = {
    
    Math.trunc((severeImpact.infectionsByRequestedTime * compute) / newDay)
    };
      }
    
    else if (periodType === 'weeks') {
    
    newDay = timeToElaspe * 7;
    impact.dollarsInFlight = {
    
    Math.trunc((Impact.infectionsByRequestedTime * compute) / newDay)
    };
    
    severeImpact.dollarsInFlight = {
    
    Math.trunc((severeImpact.infectionsByRequestedTime * compute) / newDay)
    };
     }
    
    else if (periodType === 'days') {
    
    newDay = timeToElaspe * 1;
    impact.dollarsInFlight = {
    
    Math.trunc((impact.infectionsByRequestedTime * compute) / newDay)
    };
    
    severeImpact.dollarsInFlight = {
    
    Math.trunc((severeImpact.infectionsByRequestedTime * compute) / newDay)
    };
     }
     
    return
    {
     data: {}          // the input data you got  
     impact: {}        // your best case estimation  
     severeImpact:{}   // your severe case estimation 
      };
    };
        
 
export default covid19ImpactEstimator;
