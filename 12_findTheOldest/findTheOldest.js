const findTheOldest = function(people) {
    const oldestFirst = people.sort((a, b) => {
        const currentYear =  new Date().getFullYear();
        if (((!a.yearOfDeath) ? currentYear : a.yearOfDeath) - a.yearOfBirth < ((!b.yearOfDeath) ? currentYear : b.yearOfDeath) - b.yearOfBirth)
            return 1;
        else
            return -1;

    });

    return oldestFirst[0];
};

// Do not edit below this line
module.exports = findTheOldest;