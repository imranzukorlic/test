const car = {
    mark: "Mazda",
    model: "CX-5",
    year: 2011,
    startSpeed: 0,
    maxSpeed: 280,
    drive: function (val) {
        if (this.startSpeed + val > this.maxSpeed) {
            alert("Nemoze ici iznad 280km/h")
        }else if (this.startSpeed + val <20) {
            alert("prva brzinu")
            this.startSpeed += val
        } else if (this.startSpeed + val <40) {
            alert("druga brzina")
            this.startSpeed += val
        }else if (this.startSpeed + val <60) {
            alert("treca brzina")
            this.startSpeed += val
        }else if (this.startSpeed + val <100) {
            alert("cetvrta brzina")
            this.startSpeed += val
        }else if (this.startSpeed + val <140) {
            alert("peta brzina")
            this.startSpeed += val
        }else if (this.startSpeed + val <200) {
            alert("sesta brzina")
            this.startSpeed += val
        }else if (this.startSpeed + val >= 200) {
            alert("sedma brzina")
            this.startSpeed += val
        }else{
            this.startSpeed += val
        }
    },
    break: function (val) {
        if (this.startSpeed - val > this.maxSpeed) {
            alert("Nemoze ici iznad 280km/h")
        }else if (this.startSpeed - val <20) {
            alert("prva brzinu")
            this.startSpeed -= val
        } else if (this.startSpeed - val <40) {
            alert("druga brzina")
            this.startSpeed -= val
        }else if (this.startSpeed - val <60) {
            alert("treca brzina")
            this.startSpeed -= val
        }else if (this.startSpeed - val <100) {
            alert("cetvrta brzina")
            this.startSpeed -= val
        }else if (this.startSpeed - val <140) {
            alert("peta brzina")
            this.startSpeed -= val
        }else if (this.startSpeed - val <200) {
            alert("sesta brzina")
            this.startSpeed -= val
        }else if (this.startSpeed - val >= 200) {
            alert("sedma brzina")
            this.startSpeed -= val
        }else{this.startSpeed -= val}
        
    },
    stop: function () {
        this.startSpeed === 0
    },

}
car.drive(28)
car.drive(40)
car.break(45)
car.drive(60)
car.drive(100)
car.break(25)
console.log(car);