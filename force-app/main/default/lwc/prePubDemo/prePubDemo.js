import { LightningElement, api } from 'lwc';

export default class PrePubDemo extends LightningElement {
    message = "This is private property";
   @api recordId;
}