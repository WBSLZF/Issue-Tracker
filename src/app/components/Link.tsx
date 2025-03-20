import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";
interface props {
  href: string;
  children: React.ReactNode;
}
const Link = ({ href, children }: props) => {
  return (
    <NextLink href={href} legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
