// import { User } from '../models/User'
import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Willian'

  expect(user.name).toEqual('Willian')
})
