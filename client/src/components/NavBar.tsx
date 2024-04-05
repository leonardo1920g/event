import Link from "next/link";

const NavBar = () => {

    return (

        <>
            <div className="bg-sky-900 text-white flex justify-between py-5 px-20">

                <h1 className="font-bold text-xl">Events VIP</h1>

                <ul className="flex justify-center gap-10 font-bold ">
                    <li>
                        <Link href={'/events'}>events</Link>
                    </li>
                    <li>
                        <Link href={'/users'}>users</Link>
                    </li>
                    <li>
                        <Link href={'/eventForm'}>create event</Link>
                    </li> 
                </ul>  

            </div>      
        </>
    )
};

export default NavBar;