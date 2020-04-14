const covid19ImpactEstimator = () => data => {
    const impact = {};
    const severeImpact = {};
   const input = data;
  impact.currentlyInfected = input.reportedCases * 10;
  severeImpact.currentlyInfected = input.reportedCases * 50;
  impact.infectionByRequestedTime = impact.currentlyInfected * (2**9);
  severeImpact.infectionByRequestedTime = severeImpact.currentlyInfected * (2 ** 9);
  return { 
  data: {},          // the input data you got   
       impact: {},        // your best case estimation   
         severeImpact: {}   // your severe case estimation
         } ;


};
 
export default covid19ImpactEstimator;
