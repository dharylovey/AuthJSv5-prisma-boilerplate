import { RiLoader4Line } from "react-icons/ri";

export default function Loading() {
    return (
        <div className="flex h-[80vh] w-screen items-center justify-center">
            <RiLoader4Line className="text-5xl animate-spin" />
        </div>
    );
}