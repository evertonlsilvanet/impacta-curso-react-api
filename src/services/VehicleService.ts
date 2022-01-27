import prisma from "./PrismaService";

class VehicleService{

    public async getById(obj: IVehicleGetByIdDTO){
        
        return await prisma.vehicle.findUnique({
            where:{
                id: obj.id,
            }
        });
    }

    public async getAllByUser(obj: IVehicleGetAllByUserDTO){
        
        return await prisma.vehicle.findMany({
            where:{
                user: obj.user,
            }
        });
    }

    public async create(obj: IVehicleCreateDTO){
        
        return await prisma.vehicle.create({
            data:{
                user: obj.user,
                model: obj.model,
                type: obj.type,
                color: obj.color,
                created_at: new Date()
            }
        });
    }

    public async updateById(obj: IVehicleUpdateByIdDTO){

        return await prisma.vehicle.update({
            where:{
                id: obj.id
            },
            data:{
                user: obj.user,
                model: obj.model,
                type: obj.type,
                color: obj.color,
                update_at: new Date()
            }
        });
    }

    public async deleteById(obj: IVehicleDeleteByIdDTO){
        
        return await prisma.vehicle.delete({
            where:{
                id: obj.id
            }
        });
    }
} export default new VehicleService;

interface IVehicleGetByIdDTO{
    id: number;
}

interface IVehicleGetAllByUserDTO{
    user: number;
}

export type VehicleType = "moto" | "carro";

export type VehicleColor = "prata" | "azul" | "preto" | "vermelho" | "branco";

interface IVehicleCreateDTO{
    user: number;
    model: string;
    type: VehicleType;
    color: VehicleColor;
}

interface IVehicleUpdateByIdDTO{
    id: number;
    user: number;
    model: string;
    type: VehicleType;
    color: VehicleColor;
}

interface IVehicleDeleteByIdDTO{
    id: number;
}