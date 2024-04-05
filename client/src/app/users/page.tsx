import UserCard from "@/components/UserCard";

const users = () => {

    const usuarios = [
        {
            "id": 1,
            "name": "leonardo guerrero",
            "email": "leo.19-20@hotmail.com",
            "phone": "3022220948",
            "image": "https://t3.ftcdn.net/jpg/00/61/77/60/360_F_61776002_ZEbc9JEvvE0zqyVPwK0u0R9AkH7Mc0s1.jpg"
        },
        {
            "id": 3,
            "name": "leonardo guerrero",
            "email": "jj.19-20@hotmail.com",
            "phone": "3022220948",
            "image": "https://t3.ftcdn.net/jpg/00/61/77/60/360_F_61776002_ZEbc9JEvvE0zqyVPwK0u0R9AkH7Mc0s1.jpg"
        },
        {
            "id": 5,
            "name": "leonardo guerrero",
            "email": "zz.19-20@hotmail.com",
            "phone": "3022220948",
            "image": "https://t3.ftcdn.net/jpg/00/61/77/60/360_F_61776002_ZEbc9JEvvE0zqyVPwK0u0R9AkH7Mc0s1.jpg"
        },
        {
            "id": 6,
            "name": "emily rose",
            "email": "tikitiki.19-20@hotmail.com",
            "phone": "3022220948",
            "image": "https://t3.ftcdn.net/jpg/00/61/77/60/360_F_61776002_ZEbc9JEvvE0zqyVPwK0u0R9AkH7Mc0s1.jpg"
        },
        {
            "id": 2,
            "name": "leonardo guerrero",
            "email": "leo.19-20@hotmail.com",
            "phone": "3022220948",
            "image": "https://t3.ftcdn.net/jpg/00/61/77/60/360_F_61776002_ZEbc9JEvvE0zqyVPwK0u0R9AkH7Mc0s1.jpg"
        },
        
    ]

    return (
        <div className="container relative m-auto">
            <div className="p-10">
                <p className="font-bold text-4xl">
                    Users
                </p>

                <div className="py-10 grid grid-cols-4 gap-10">
                    {usuarios.map(user=>{
                        return<UserCard
                            name={user.name}
                            email={user.email}
                            phone={user.phone}  
                            image={user.image}                    
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default users;