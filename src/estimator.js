const covid19ImpactEstimator = (data) => data => {
    const {
        region: {
            avgDailyIncomeInUd
        },
        reportedCases,
        timeToElasped,
        periodType,
        totalHospitalBeds
    } = data; 

    const impact = {};
    const severeImpact = {};

    //Challenge 1
    impact.currentlyInfected = Math.trunc(reportedCases * 10);
    severeImpact.currentlyInfected = Math.trunc(reportedCases * 50);

    //check time elasped in days, weeks or months

    let timeFactor;

    switch (periodType.trim().toLowerCase()) {
        case 'months':
            timeFactor = Math.trunc((timeToElasped * 30) / 3);
            break;
            case 'weeks':
                timeFactor = Math.trunc((timeToElasped * 7) / 3);
            break;
              case 'days':
                timeFactor = Math.trunc((timeToElasped) / 3);
                 break;
                 default:



    }


impact.infectionByRequestedTime = impact.currentlyInfected * (2 ** timeFactor);
severeImpact.infectionByRequestedTime = severeImpact.currentlyInfected * (2 ** timeFactor);

}

export default covid19ImpactEstimator;
