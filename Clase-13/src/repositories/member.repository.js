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

    async getAllWorkspaceByUserId (user_id){
        //Traer todas las membresias de un usuario
        const result = await Member
        .find({fk_id_usuario: user_id})
        .populate(
            'fk_id_espacio_trabajo',
            'nombre fecha_creacion'
        )

        /* 
        populate permite expandir referencias,
        OSEA SOLO ES VALIDO EN PROPIEDADES CON ref en el modelo
        */
        console.log(result)
    }

    //Traer todos miembros de un espacio de trabajo
    async getAllMembershipsByWorkspaceId(workspace_id){
        const result = await Member
        .find({fk_id_espacio_trabajo: workspace_id})
        .populate('fk_id_usuario', 'nombre email')
        console.log(result)
    }
}
const member_repository = new MemberRepository()
export default member_repository
