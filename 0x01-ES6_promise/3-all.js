import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  let i;
  let j;
  let k;
  try {
    const uploadedphoto = await uploadPhoto();
    i = uploadedphoto.body;
    const newuser = await createUser();
    j = newuser.firstName;
    k = newuser.lastName;
  } catch (e) {
    console.log('Signup system offline');
  }
  console.log(`${i} ${j} ${k}`);}
