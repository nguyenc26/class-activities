var dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function makenoise () {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
};

var cats = {
    raining: true,
    noise: "meow",
    makeNoise: function makenoise () {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
