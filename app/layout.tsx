// '@' 是一个路径别名(path alias)，在Next.js中默认配置
// 它指向项目的根目录，所以 '@/app' 等同于从根目录开始的 '/app' 路径
// 这行代码导入了全局CSS文件
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
