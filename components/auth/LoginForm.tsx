"use client";

import BackButton from "@/components/BackButon";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Card, CardContent,CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Title is required",
  }).email({
    message: "Please enter a valie email"
  }),
  password: z.string().min(1, {
    message: "Body is required",
  })
})


const LoginForm = () => {
const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push('/')
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
            Login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password"
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-full">
            Sign In
          </Button>

            </form>
        </Form>

      </CardContent>
    </Card>
  );
};

export default LoginForm;
