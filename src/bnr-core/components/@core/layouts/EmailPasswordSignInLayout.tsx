import { FormEvent, useCallback, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "src/@lib/hooks/useSignInWithEmailAndPassword"
import Link from 'next/link'

function EmailPasswordSignInFormLayout(
  props: React.PropsWithChildren<{
    onSignIn: () => void;
  }>
) {
  const [signIn, state] = useSignInWithEmailAndPassword();
  const loading = state.loading;
  const error = state.error;

  useEffect(() => {
    if (state.success) {
      props.onSignIn();
    }
  }, [props, state.success]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      const data = new FormData(event.currentTarget);
      const email = data.get(`email`) as string;
      const password = data.get(`password`) as string;

      // sign user in
      return signIn(email, password);
    },
    [loading, signIn]
  );

  return (
    <form className={"w-full"} onSubmit={onSubmit}>
      <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase">faça login</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <div className={"flex-col"}>
        <label className="mt-4 block text-gray-700 text-sm font-bold">Endereço de email:</label>
        <input
          required
          name="email"
          type="email"
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        />

        <label className="mt-2 block text-gray-700 text-sm font-bold">Senha:</label>
        <input
          required
          name="password"
          type="password"
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        />

        {
          error ? <span className="text-red-500">{error.message}</span> : null
        }

        <button disabled={loading} className="mt-10 bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Entrar
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between invisible">
          <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href="/cadastro" className="text-xs text-gray-500 uppercase">
              ou cadastre-se
            </Link>
          <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </form>
  );
}

export default EmailPasswordSignInFormLayout