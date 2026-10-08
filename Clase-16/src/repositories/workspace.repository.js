import Workspace from "../models/workspace.model.js"

class WorkspaceRepository {
    async createWorkspace(name, description) {
        const workspace_created = await Workspace.create({ nombre: name, description: description })
        return workspace_created
    }

}
const workspace_repository = new WorkspaceRepository()
export default workspace_repository