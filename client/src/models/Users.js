const Users = [
    { Name: 'Harika', Password: '2020', Email: 'tadis1@newpaltz.edu' },
    { Name: 'Tadi', Password: '1998', Email: 'tadis1@hawkmail.newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}