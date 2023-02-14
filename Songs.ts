export class Songs{
    title:string;

    constructor(title:string){
        this.title = title;
    }


    get  titles():string{
        return this.title;
    }

    set titles(title:string){
        this.title = title;
    }
}