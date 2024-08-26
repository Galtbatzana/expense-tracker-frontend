const categories = [
    { name: "Food & Drinks"},
    { name: "Shopping"},
    { name: "Housing"},
    { name: "Transportation"},
    { name: "Vehicles"},
    { name: "Life & Entertainment"},
    { name: "Communications, PC"},
    { name: "Financial Expenses"},
    { name: "Investment"},
    { name: "Income"},
    { name: "Others"},
]


export const Categories = () => {
    return (
        <div>
            <div>
                {categories.map((cat)=> {
                    <div key={cat.id}>{cat.name}</div> 
                })
                }  
            </div>
        </div>
    );
}

