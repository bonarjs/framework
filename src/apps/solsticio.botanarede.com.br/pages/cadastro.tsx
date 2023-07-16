import { useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { GoogleAuthProvider } from "firebase/auth"

import EmailPasswordSignUpForm from 'src/@core/context/EmailPasswordSignUp'

const CadastroPage = () => {
  const router = useRouter()

  const onSignup = useCallback(async () => {
    router.push("/admin/dashboard");
  }, [router]);

  return (
    <div className="flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12">
      <div>
        <h1 className="Hero">Sign Up</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <EmailPasswordSignUpForm onSignup={onSignup} />
      </div>
    </div>
  );
};

export default CadastroPage;
