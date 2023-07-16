import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { CircleNotch } from 'phosphor-react'
import { Popover } from '@headlessui/react'


export default function LoginNavigation() {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

    let menuLogin:any;

    // if (status === 'loading') {
    //     menuLogin = (
    //         <div className="right">
    //             <CircleNotch weight="bold" className="w-4 h-4 animate-spin float-right" />
    //         </div>
    //     );
    // }

    // if (!session && status !== 'loading') {
        menuLogin = (
            <div className="right">
                {/* <Link href="/login"> */}
                {/* <Link href="/api/auth/signin"> */}
                    <a>
                        <button className="text-transparent bg-clip-text bg-gradient-to-bl from-purple-400 to-pink-600 bg-white underline-offset-4 rounded-lg text-sm font-medium px-5 py-2.5 text-center inline-flex items-center mr-2 transition ease-in-out delay-150 hover:scale-110 duration-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-11 fill-[purple]" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Acessar minha conta
                        </button>
                    </a>
                {/* </Link> */}
            </div>
        );
    // }

    // if (session) {
    //     let bnrAvatar:string = session?.user?.image!;
    //     menuLogin = (
    //         <div className="right">
    //             <Popover className="relative">
    //                 <Popover.Button className="focus:outline-none">
    //                     <a className="focus:outline-none flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" type="button">
    //                         <span className="sr-only">Conectado</span>
    //                         <Image className="w-8 h-8 rounded-full" src={bnrAvatar} width={40} height={40} />
    //                     </a>
    //                 </Popover.Button>

    //                 <Popover.Panel className="absolute z-10">
    //                     <div className="bnrLoginMenu z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    //                         <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
    //                         <div>{session?.user?.name}</div>
    //                         <div className="font-medium truncate">{session?.user?.email}</div>
    //                         </div>
    //                         <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
    //                         <li>
    //                             <Link href="/admin">
    //                                 <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
    //                             </Link>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Configurações</a>
    //                         </li>
    //                         </ul>
    //                         <div className="py-1">
    //                             <a href="#" onClick={() => signOut()} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
    //                         </div>
    //                     </div>
    //                 </Popover.Panel>
    //             </Popover>
    //         </div>
    //     );
    // }
    
    return (
        <nav>
            {menuLogin}
        </nav>
    );
}