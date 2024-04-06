import { Link } from "@nextui-org/link";
import Image from "next/image";

type Member = {
  name: string;
  description: string;
  linkedin: string;
  // farcaster?: string;
  image: string;
};

export default function TeamCard({ member }: { member: Member }) {
  return (
    <div className="rounded-full h-[442px] w-[304px] flex flex-col items-center p-5 gap-y-6" style={{ backgroundColor: '#64B7F3' }}>
      <Image
        src={member.image}
        height={264}
        width={264}
        alt={member.name}
        className="rounded-full"
      />
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <h4>{member.description}</h4>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Link href={member.linkedin} isExternal>
          <Image
            src={"/linkedin.svg"}
            height={24}
            width={24}
            alt={"Linkedin logo"}
          />
        </Link>
        {/* {member.farcaster && (
          <Link href={member.farcaster} isExternal>
            <Image
              src={"/farcaster.svg"}
              height={18}
              width={18}
              color="#222222"
              alt={"Farcaster logo"}
            />
          </Link>
        )} */}
      </div>
    </div>
  );
}
