export default class User{
    id: string;
    name: string;
    likes: any;
    voteRight: any;
    optionsVoted: string[];

    getName():string{
        return this.name;
    }
}