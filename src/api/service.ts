import database from '../loaders/database';

export const handleRegisterUser = async (email: string, reg: string, name: string) => {
  const collection = (await database()).collection('registration');
  const exist = await collection.findOne({ email });
  if (exist) {
    throw new Error('User Already Registered');
  }
  await collection.insertOne({ email, name, reg, attendance: false });
};
export const handleVerifiedUser = async (email: string) => {
  const collection = (await database()).collection('registration');
  const exist = await collection.findOne({ email });
  if (!exist) {
    throw new Error('The user does not exist!');
  }
  await collection.updateOne({ email }, { $set: { attendance: true } });
};

export const handleGetUsers = async () => {
  const collection = (await database()).collection('registration');
  return collection.find({}).toArray();
};
