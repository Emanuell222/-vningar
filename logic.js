function hälsning(namn, tid) {
    if (tid >= 5 && tid < 12) {
        return "God morgon, " + namn + "!";
    } else if (tid >= 12 && tid < 18) {
        return "God eftermiddag, " + namn + "!";
    } else if (tid >= 18 && tid < 22) {
        return "God kväll, " + namn + "!";
    } else {
        return "God natt, " + namn + "!";
    }
}

console.log(hälsning("Emanuell", 10));