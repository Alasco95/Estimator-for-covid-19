const covid19ImpactEstimator = () => {
    return data => {
        const impact = {};
        const severeImpact = {};
        const input = data;
        impact.currentlyInfected = input.reportedCases * 10;
        severeImpact.currentlyInfected = input.reportedCases * 50;
        impact.infectionByRequestedTime = impact.currentlyInfected * (2 ** 9);
        severeImpact.infectionByRequestedTime = severeImpact.currentlyInfected * (2 ** 9);
        return {
            data: {},
            impact: {},
            severeImpact: {}
        };
    };
};
 
export default covid19ImpactEstimator;
