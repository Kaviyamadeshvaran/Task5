document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    let category;
    let description;

    if (age < 0) {
        category = "Invalid";
        description = "The age entered is not valid.";
    } else if (age >= 0 && age <= 1) {
        category = "Infant";
        description = "You are in the earliest stage of life, typically from birth to 1 year old.";
    } else if (age > 1 && age <= 3) {
        category = "Toddler";
        description = "You are in the stage where you are learning to walk and talk, typically from 1 to 3 years old.";
    } else if (age > 3 && age <= 5) {
        category = "Preschooler";
        description = "You are in the early stages of learning and development, typically from 3 to 5 years old.";
    } else if (age > 5 && age <= 12) {
        category = "Child";
        description = "You are in the school-going age, typically from 6 to 12 years old.";
    } else if (age >= 10 && age <= 12) {
        category = "Preteen (Tween)";
        description = "You are in the transitional years before adolescence, typically from 10 to 12 years old.";
    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
        description = "You are in the adolescent years, typically from 13 to 19 years old.";
    } else if (age >= 20 && age <= 39) {
        category = "Young Adult";
        description = "You are in early adulthood, often focused on building careers and starting families.";
    } else if (age >= 40 && age <= 59) {
        category = "Middle-Aged Adult";
        description = "You are in mid-life, typically managing work, family, and other responsibilities.";
    } else if (age >= 60 && age <= 79) {
        category = "Senior Adult";
        description = "You are transitioning into the later years of life, possibly including retirement.";
    } else if (age >= 80 && age <= 99) {
        category = "Elderly";
        description = "You are in the later years of life, often with a focus on health and support.";
    } else if (age >= 100) {
        category = "Centenarian";
        description = "You have reached 100 years or more, a rare and significant milestone.";
    } else {
        category = "Invalid";
        description = "The age entered is not valid.";
    }

    document.getElementById('result').textContent = `${category}: ${description}`;
});
