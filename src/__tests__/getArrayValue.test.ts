import getArrayValue from "../getArrayValue";

describe('getArrayValue', () => {
  it('reads array index', () => {
    const source = {users: ['John Doe']}; 
    const value = getArrayValue(source, 'users[0]', 'currentPath', 'fullPath');
    expect(value).toBe('John Doe');
  })
})