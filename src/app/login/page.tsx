"use client";
import { Button, Box, Text, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/components/ErrorMessage";

// 验证模式
const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError("");

      // 这里处理账号密码登录逻辑
      // TODO: 实现具体的登录逻辑

      router.push("/dashboard");
    } catch (error) {
      setError("登录失败，请检查账号密码");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Box className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <Text size="6" weight="bold">
            登录账号
          </Text>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="邮箱地址"
                {...register("email")}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>

            <div>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="password"
                placeholder="密码"
                {...register("password")}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
          </div>

          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "登录中..." : "登录"}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator size="4" />
            </div>
            <div className="relative flex justify-center text-sm">
              <Text className="px-2 bg-white text-gray-500">
                或使用以下方式登录
              </Text>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => signIn("github")}
              className="w-full"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </Button>
            <Button
              variant="outline"
              onClick={() => signIn("google")}
              className="w-full"
            >
              <i className="fab fa-google mr-2"></i>
              Google
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
