var n=5;
count=1;
var GUESS_NUMBER_MAX=100;
var GUESS_NUMBER_MIN=1;
var confirmed=confirm ("Salom omadingizni sinab ko'rasizmi")
console.log(confirmed);
if (confirmed) {
    var RANDOM_NUMBER = Math.floor(Math.random() * (GUESS_NUMBER_MAX - GUESS_NUMBER_MAX + 1) + GUESS_NUMBER_MIN);
    var number =prompt ("son kiriting agar random bilan mos tushsa tabriklaymiz (sizda 3 ta urinish mavjud)")
    while (count<3) {
        if (number!=RANDOM_NUMBER) {
            var number=prompt ("qayta urinib ko'ring ")
            count++;
        }
        if (number==RANDOM_NUMBER) {
            alert ("Qoyil topdingiz")
            count=3;
        }
    }
    alert ("Kechirasiz boshqa safar urinib ko'rasiz")
}