import {Address} from "./address";
import {Appointment} from "./appointment";
import {Email} from "./email";
import {Message} from "./message";
import {Note} from "./note";
import {Phone} from "./phone";

export class Client {
    // id, firstName, lastName, profilePictureFile
    // Address (Street Number, Street Name, City, State, Zip Code),
    // Phone[(id, areaCode, phoneNumber, mobile?, optedOut?, blocked?, archived?)], //Clients can have multiple phone numbers
    // Email[(id, url)],
    // Notes[(id, header, content)],
    // birthMonth, birthDay
    // Message[(id, Sender[(id, Phone)], groupText?, Image[(id, imageFile)]), //Clients can have many messages with 1 or many senders
    // Appointment[(id, Client, DateTime(year, month, day, hour, minute), Notes[(id, header, content)])], //Clients may have many appointments with 1 or many Notes, but only one DateTime and only one Client per Appointment
    
    id: number;
    firstName: string;
    lastName: string;
    profilePictureFile: MediaImage;
    address: Address;
    phone: Phone[];
    email: Email[];
    notes: Note[];
    birthMonth: string;
    birthDay: string;
    messages: Message[];
    appointments: Appointment[];

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.profilePictureFile = data.profilePictureFile;
        this.address = data.address;
        this.email = data.email;
        this.phone = data.phone;
        this.notes = data.notes;
        this.birthMonth = data.birthMonth;
        this.birthDay = data.birthDay;
        this.messages = data.messages;
        this.appointments = data.appointments;
    }
}