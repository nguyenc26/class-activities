takes in a string and returns true if its a pangram
pangram: sentence with every letter in the alphabet

function pangramChecker(str) {
    str =str.ToLowercase()
    var alphabet = "alphabet here"
    for (var i = 0; i < alphabet.length; i++) {
        // option 2 
        if (!str.includes(alphabet[i])) {
            return false;
        }

        // option 1 
        // for (var j = 0; j <str.length; j++){
        //     if (alphabet[i] === str[j]) {
        //         continue;
        //     }}
    }
    return true;
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.3.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#reserved-urls -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>