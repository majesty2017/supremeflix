import { signOut } from "next-auth/react"
import useCurrentUser from "../hooks/useCurrentUser"

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu = ({visible}: AccountMenuProps) => {
    if (!visible) {
        return null
    }

    const {data} = useCurrentUser()

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                <img src="/images/default-blue.png" alt="profile" className="w-8 rounded-full" />
                <p className="text-sm group-hover/item:underline">{data?.name}</p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div className="px-3 text-center text-sm hover:underline" onClick={() => signOut()}>
                Sign out of Supremeflix
            </div>
        </div>
    </div>
  )
}

export default AccountMenu