class Applications  
{
    #name;
    #age;
    constructor(name, age)
    {
        this.#name = name;
        this.#age = age;
    }

    Dispaly()
    {
        console.log("Hello "+this.#name+" your age is : "+this.#age);
    }
}

var app = new Applications('Vinu', 25);

app.Dispaly();