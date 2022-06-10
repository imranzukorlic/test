const Auto = {
    marka: 'Mazda',
    model: 3,
    maxBrzina: 220,
    trenutnaBrzina: 0,
    drive: function (num) {
        if (this.trenutnaBrzina + num > this.maxBrzina) {
            alert('ide preko ogranicenja')
        } else{
            this.trenutnaBrzina += num
        }
         
    },
    koci: function (num) {
         this.trenutnaBrzina -= num
    },
    stop: function () {
         this.trenutnaBrzina = 0
    },
}
console.log(Auto);

Auto.drive(180)
Auto.drive(41)



