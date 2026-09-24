import Member from "../models/member.model.js"

class MemberRepository {
    async create(userId, workspaceId, role) {
        await Member.create({
            fk_id_usuario: userId,
            fk_id_espacio_trabajo: workspaceId,
            rol: role
        })
    }

    async deleteById(memberId) {
        const result = await Member.findByIdAndDelete(memberId)
        console.log(result)
    }

    async updateRoleById(memberId, role) {
        const result = await Member.findByIdAndUpdate(memberId, { rol: role })
        console.log(result)
    }
}
const member_repository = new MemberRepository()
export default member_repository
