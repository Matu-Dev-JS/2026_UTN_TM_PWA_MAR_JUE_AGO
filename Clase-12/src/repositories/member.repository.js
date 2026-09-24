import Member from "../models/member.model.js"

class MemberRepository {
    async create(fk_id_usuario, fk_id_espacio_trabajo, rol) {
        await Member.create({
            fk_id_usuario: fk_id_usuario,
            fk_id_espacio_trabajo: fk_id_espacio_trabajo,
            rol: rol
        })
    }

    async deleteById(member_id) {
        const result = await Member.findByIdAndDelete(member_id)
        console.log(result)
    }

    async updateRoleById(member_id, rol) {
        const result = await Member.findByIdAndUpdate(member_id, { rol: rol })
        console.log(result)
    }
}
const member_repository = new MemberRepository()
export default member_repository
