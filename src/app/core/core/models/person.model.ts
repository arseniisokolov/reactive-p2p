export class PersonModel {

    public Id: string;
    public Name: string;
    public LastName: string;
    public Patronymic: string;
    public BirthDate: Date;

    constructor(data?: IPersonModel) {
        this.fromData(data);
    }

    public fromData(data: IPersonModel): void {
        if (!data)
            return;
        this.Id = data.id ? data.id.toString() : undefined;
        this.Name = data.name;
        this.LastName = data.lastname;
        this.Patronymic = data.patronymic;
        if (data.birthdate)
            this.BirthDate = new Date(data.birthdate);
    }

    /** Выдает имя в формате ФИО */
    public getFullName(): string {
        const fullname: string = `${this.LastName || ''} ${this.Name || ''}`.trim();
        return this.Patronymic ? fullname.concat(` ${this.Patronymic}`) : fullname;
    }

    /** TO DO: заюзать moment.js */
    public getAge() {
        // const age = Helpers.parseNumber(data.age)
        // this.Age = age ? Math.abs(age) : undefined;
    }

}

export interface IPersonModel {

    id: string | number;
    name: string;
    lastname?: string;
    patronymic?: string;
    birthdate?: number | string;

}