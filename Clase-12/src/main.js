
import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";

connectMongoDB()


let user_id =  '6aabfd4d5f848b9d98808f0f'
let workspace_id = '6ab2729b3784a8b4ecb9936e'
member_repository.create(
    user_id,
    workspace_id,
    'owner'
)






