import { LightningElement,api,wire } from 'lwc';
import{getRecord,getFieldValue} from 'lightning/uiRecordApi';

//import Name_Field from '@salesforce/schema/Account.Name';
//import Phone_Field from '@salesforce/schema/Account.phone';
//import Rating_Field from '@salesforce/schema/Account.Rating';
const FIELDS =[ 'Account.Name',
'Account.phone'
]

export default class WireAdapterDemo extends LightningElement {
    @api recordId;

    @wire(getRecord, {recordId:"$recordId", fields:[ FIELDS]})
record;

get name(){
    //return this.record.data ? getFieldValue(this.record.data, 'Account.Name') : '';
    return this.record.data.fields.Name.value;
}
get phone(){
    //return this.record.data ? getFieldValue(this.record.data, 'Account.phone') : '';
    return this.record.data.fields.phone.value;
}
// get rating(){
//     return this.record.data ? getFieldValue(this.record.data, 'Account.Rating') : '';
//     //return this.record.data.fields.Rating.value;
// }

}