export interface IPlayer {
    id: number;
    name: string;
    pass: number;
    wins: number;
}

export class Player implements IPlayer {
    constructor(public id: number,
                public name: string,
                public pass: number = 5,
                public wins: number
    ) { }
}
