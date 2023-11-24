import { LightningElement } from 'lwc';

export default class RenderingListForEach extends LightningElement {
    contacts = [
        {
            Id:1,
            FirstName:"Ramesh",
            LastName:"Gupta",
            phone:11223344

        },
        {
            Id:2,
            FirstName:"Suresh",
            LastName:"Gupta",
            phone:22334455

        },
        {
            Id:3,
            FirstName:"Sanyukta",
            LastName:"Jadhav",
            phone:33445566

        },
        {
            Id:4,
            FirstName:"Mugdha",
            LastName:"Patil",
            phone:88776655

        },
        {
            Id:5,
            FirstName:"Kapil",
            LastName:"Mane",
            phone:9988776655

        },
    ];
}