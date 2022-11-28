import Image from "next/image";

export default function Home() {
  return <div>
    <Image
      src="https://apiscouternase.cdn.triggerfish.cloud/uploads/2021/03/Scouter_bygger_bro_Foto_Jenny_Modess_1800x1200.jpg"
      width="1800"
      height="1200"
      alt="img"
    />
    <Image
      src="https://apiscouternase.cdn.triggerfish.cloud/uploads/2021/03/Scouter_bygger_bro_Foto_Jenny_Modess_1800x1200.jpg"
      width="1800"
      height="1200"
      sizes="100vw"
      alt="img"
    />
  </div>
}
