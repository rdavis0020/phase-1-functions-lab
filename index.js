function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42; 
    let difference = pickupLocation - headquartersLocation;
    if (difference < 0) {
        difference = -difference;
    }
    return difference;
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let distanceInBlocks = start - destination;
    if (distanceInBlocks < 0) {
        distanceInBlocks = -distanceInBlocks;
    }
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - destination);
    const distanceInFeet = distanceInBlocks * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const pricePerFoot = 0.02; // $0.02 per foot
        return (distanceInFeet - 400) * pricePerFoot;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else if (distanceInFeet >= 2500) {
        return 'cannot travel that far';
    }
}