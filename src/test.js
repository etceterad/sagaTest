function customConstructor() {
    this.name = "index";
}

class Class extends customConstructor {
    constructor() {
        super()
    }
}
console.log(new Class);