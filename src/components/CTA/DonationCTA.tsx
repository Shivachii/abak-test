import { ChevronRight, HandHeart } from "lucide-react";
import Link from "next/link";
import { Btn } from "../Buttons/Btn";

export default function DonationCTA() {
  return (
    <Link
      href="/donate"
      className="group block md:hidden w-full bg-slate-100 p-4 mb-8   transition-colors "
    >
      <div className="flex justify-between items-center group-hover:bg-primary group-hover:text-white transition-colors gap-5 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <HandHeart
            size={30}
            className="text-primary group-hover:text-white"
          />
          <Btn btnLabel="Donate" className="p-4" />
        </div>
        <ChevronRight
          size={30}
          className="text-gray-800 group-hover:text-white group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Link>
  );
}
