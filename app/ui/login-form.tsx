'use client';

import { Button } from "./button";
import { useFormState } from "react-dom";
import { authenticate } from "../lib/actions";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );
  
  return (
    <form action={formAction} className="space-y-3">
      <div className="w-full">
        <div>
          <div className="relative">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mb-4 peer block w-full rounded-md border border-gray-200 py-[8px] pl-1 text-sm text-black outline-2 placeholder:text-gray-500 text-center"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="relative">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[8px] pl-1 text-sm text-black outline-2 placeholder:text-gray-500 text-center"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full" aria-disabled={isPending}>
        Log in as User
      </Button>
      <Button className="mt-4 w-full" aria-disabled={isPending}>
        Log in as Artist
      </Button>
      <Button className="mt-4 w-full" aria-disabled={isPending}>
        Create User account
      </Button>
      <Button className="mt-4 w-full" aria-disabled={isPending}>
        Create Artist account
      </Button>
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
