// get user's data

// get user's coordinates
async function getCoords(){
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })  
    return [position.coords.latitude, position.coords.longitude]
}

// get user's time
function userTime(){
    const now = new Date()
    return now.getHours()
}

console.log(userTime())

function getMealTime(){
    const tod = userTime()

    if (tod > 20) {
        return 'Late night snacks'
    }
    else if (tod > 16) {
        return 'Dinner'
    }
    else if (tod > 11) {
        return 'Lunch'
    }
    else {
        return 'Breakfast'
    }
}

console.log(getMealTime())

// helper functions
// check time of day


// build ads
// build ad 1
function buildAd1(mealTime){
    /* const mealTime = getMealTime() */
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}


// build ad 2
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]}, ${coords[1]},15z/`
    let content2 = document.querySelector('.ad2')
    let inner2 = document.createElement('p')
    inner2.innerHTML = `It's time to try our coffee! <span><a href="${href}">We're this close!</a></span>`
    content2.append(inner2)
}


// event listeners
// on load, build ads
window.onload = async () => {
    const mealTime = getMealTime()
    buildAd1(mealTime)
    const coords = await getCoords()
    buildAd2(coords);
}