import { normalize, schema } from 'normalizr'
import App from './App'
export default () => {
  /**
   * @normalize(data, schema)
   * data: required Input JSON (or plain JS object) data that needs normalization.
   * schema: required A schema definition
   */
  // const myData = { users: [ { id: 2, unique: 12 }, { id: 3, unique:13 } ] };
  // const user = new schema.Entity('user')

  // // {key: [{}, {}]}
  // const mySchema = { users: [ user ] }
  // const normalizedData = normalize(myData, mySchema)
  // console.log(normalizedData)

  /**
   * ############### schema ###############
   *
   * Array(definition, schemaAttribute)
   */
  // const data = [ { id: '123', name: 'Jim' }, { id: '456', name: 'Jane' } ];
  // const userschema = new schema.Entity('users')
  // const mySchema = new schema.Array(userschema)
  // const myData = normalize(data, mySchema)
  // console.log(myData)

  ///////////////////////////////////////////////////////////
  // const data = [ { id: 1, type: 'admin' }, { id: 2, type: 'user' } ];

  // const userSchema = new schema.Entity('users');
  // const adminSchema = new schema.Entity('admins');
  // const myArray = new schema.Array({
  //   admins: adminSchema,
  //   users: userSchema
  // },(input) => `users`);

  // const normalizedData = normalize(data, myArray);
  // console.log(normalizedData)
  ///////////////////////////////////////////////////////////
  const data = [
    { id: '1', guest_id: null, name: 'Esther' },
    { id: '1', guest_id: '22', name: 'Tom' },
  ];
  const patronsSchema = new schema.Entity('users', undefined, {
    idAttribute: value => {
      console.log(value)
      return value.name
    }
  })

  const normalizedData = normalize(data, [patronsSchema])
  console.log(normalizedData)
}