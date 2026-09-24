import Workspace from "../models/workspace.model.js"

class WorkspaceRepository {
    async createWorkspace(name, description) {
        await Workspace.create({ nombre: name, description: description })
    }

}
const workspace_repository = new WorkspaceRepository()
export default workspace_repository