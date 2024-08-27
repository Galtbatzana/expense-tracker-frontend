const categoriesColors = [
    {
        name: "blue", 
        value: "#0166FF",
    },
    {
        name: "sky", 
        value: "#01B3FF",
    },
    {
        name: "green", 
        value: "#41CC00",
    },
    {
        name: "yellow", 
        value: "#F9D100",
    },
    {
        name: "orange", 
        value: "#FF7B01",
    },
    {
        name: "purple", 
        value: "#AE01FF",
    },
    {
        name: "red", 
        value: "#FF0101",
    },
];

export const CatergoriesColors = () => {
    return (
        <div>
            {catergoriesColor.map(({name,value})=>(
                <div key={name} className="w-8 h-8 rounded-full" style={{backgroundColors: value}}></div>
            ))}
        </div>
    );
}