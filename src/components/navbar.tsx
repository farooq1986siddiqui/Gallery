import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <Link href={'/'}>
                         <div><h1 className="text-3xl font-bold tracking-tight">Picture Gallary</h1></div>
                    </Link>
                    <div className="ml-auto flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="FK" />
                            <AvatarFallback>FK</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
