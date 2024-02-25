import {BSON} from 'realm';

export class Price extends Realm.Object<Price>{
    _id!: BSON.ObjectId;
    name!: string;
    price!: string;

    static schema: Realm.ObjectSchema = {
        name:'Price',
        primaryKey:'_id',
        properties:{
            _id: {type: 'objectId', default:() => new BSON.ObjectID()},
            name: 'string',
            price: 'string'
        }
    }
}