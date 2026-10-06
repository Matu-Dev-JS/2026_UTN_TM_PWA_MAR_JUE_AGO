import bcrypt from 'bcrypt'

export async function generateHash(data){
    const hash = await bcrypt.hash(data, 12)
    return hash
}