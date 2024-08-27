import { House, HousePlus, ShoppingCart, BusFront, CarTaxiFront, Ambulance, CircleParking, CircleParkingOff, PlaneTakeoff, Bike, Fuel, Cigarette, Anchor, Tractor, BaggageClaim, Phone, Video, BadgeDollarSign, Landmark} from "lucide-react";

const catergoriesIcons = [
    {
        name: "Home",
        Icon: House,
    },
    {   
        name: "HousePlus",
        Icon: HousePlus,
    },
    {
        name: "ShoppingCart",
        Icon: ShoppingCart,
    },
    {
        name: "BusFront",
        Icon: BusFront,
    },
    {
        name: "CarTaxiFront",
        Icon: CarTaxiFront,
    },
    {
        name: "Ambulace",
        Icon: Ambulance,
    },
    {
        name: "CircleParking",
        Icon: CircleParking,
    },
    {
        name: "CircleParkingOff",
        Icon: CircleParkingOff,
    },
    {
        name: "PlaneTakeoff",
        Icon: PlaneTakeoff,
    },
    {
        name: "Bike",
        Icon: Bike,
    },
    {
        name: "Fuel",
        Icon: Fuel,
    },
    {
        name: "Cigarette",
        Icon: Cigarette,
    },
    {
        name: "Anchor",
        Icon: Anchor,
    },
    {
        name: "Tractor",
        Icon: Tractor,
    },
    {
        name: "BaggageClaim",
        Icon: BaggageClaim,
    },
    {
        name: "Phone",
        Icon: Phone,
    },
    {
        name: "Video",
        Icon: Video,
    },
    {
        name: "BadgeDollarSign",
        Icon: BadgeDollarSign,
    },
    {
        name: "Landmark",
        Icon: Landmark,
    },

] ;

export const CatergoriesIcons = () => {
    return (
        <div>
            {catergoriesIcons.map(({name, Icon})=>(
                <div key={name}>
                    <Icon />
                </div>
            ))}
        </div>
    );
}