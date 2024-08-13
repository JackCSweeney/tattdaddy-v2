import Image from "next/image";
import LoginForm from "./ui/login-form";

export default function Page() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Image
          src="/1.jpg"
          alt="TattDaddy logo image as background"
          quality="100"
          height={400}
          width={400}
        />
      </div>
      <div style={{justifyContent:"center", display:"flex"}}>
        <LoginForm />
      </div>
    </div>
  );
}
