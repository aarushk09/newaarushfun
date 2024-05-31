// Get a reference to the database service
var database = firebase.database();

// Get reference to the hit counter node
var hitCounterRef = database.ref('hitCounter');

// Increment hit counter when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    hitCounterRef.transaction(function (currentCount) {
        // Increment counter by 1
        return (currentCount || 0) + 1;
    });
});

// Update hit counter in real-time
hitCounterRef.on('value', function (snapshot) {
    var hitCount = snapshot.val();
    // Display the hit count on the webpage
    document.getElementById('hitCounter').textContent = hitCount;
});
