const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

test ('Capitalize each word', () => {
    expect(capitalizeWords("hello")).toBe("Hello")
})

test ('Filters active users from an array', () => {
    const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
];
filterActiveUsers(users);
    expect(filterActiveUsers(users)).toEqual([{ name: "Alice", isActive: true}])
})

test ('Logs an action performed by a user with a timestamp', () => {
    const mockDate = new Date('2024-01-15T10:30:00.000Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const result = logAction('login', 'Alice');
    
    expect(result).toBe('User Alice performed login at 2024-01-15T10:30:00.000Z');

    jest.restoreAllMocks();
})