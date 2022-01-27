import prisma from "./PrismaService";

class UserService{

    public async getById(obj: IUserGetByIdDTO){
        
        return await prisma.user.findUnique({
            where:{
                id: obj.id,
            }
        });
    }

    public async create(obj: IUserCreateDTO){

        return await prisma.user.create({
            data:{
                name: obj.name,
                email: obj.email,
                created_at: new Date()
            }
        });

    }

    public async updateById(obj: IUserUpdateByIdDTO){
        
        return await prisma.user.update({
            where:{
                id: obj.id
            },
            data:{
                name: obj.name,
                email: obj.email,
                update_at: new Date()
            }
        });
    }

    public async deleteById(obj: IUserDeleteByIdDTO){
        
        return await prisma.user.delete({
            where:{
                id: obj.id
            }
        });
    }

} export default new UserService;

interface IUserGetByIdDTO{
    id: number;
}

interface IUserCreateDTO{
    name: string;
    email: string;
}

interface IUserUpdateByIdDTO{
    id: number;
    name: string;
    email: string;
}

interface IUserDeleteByIdDTO{
    id: number;
}
