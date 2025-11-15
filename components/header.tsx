"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  Menu,
  X,
  Video,
  MessageSquare,
  Building2,
  Rocket,
  Building,
  Users,
  Info,
  Handshake,
  Shield,
  Briefcase,
  FileText,
  UserCheck,
  UserCircle,
  UserPlus,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Products Menu Items
const menuItems = [
  {
    trigger: "Products",
    items: [
      {
        title: "Vetted Interviews",
        href: "/vetted-interviews",
        description: "Remote expert-led technical assessments",
        icon: Video,
      },
      {
        title: "Interview Bites",
        href: "/interview-bites",
        description: "One-way self-recorded interviews",
        icon: MessageSquare,
      },
    ],
  },
  {
    trigger: "Solutions",
    items: [
      {
        title: "Global Capability Centers",
        href: "/global-capability-centers",
        description:
          "Assessments Tailored for offshore units managing key functions for MNCs.",
        icon: Building2,
      },
      {
        title: "Startups",
        href: "/start-ups",
        description:
          "Interviews Crafted for emerging, innovation-driven disruptors.",
        icon: Rocket,
      },
      {
        title: "Enterprises",
        href: "/enterprises",
        description:
          "Built to assess candidates for large, established commercial enterprises.",
        icon: Building,
      },
      {
        title: "Recruiting Agencies",
        href: "/recruitment-agencies",
        description:
          "Empowering recruiters and staffing agencies with targeted assessments.",
        icon: Users,
      },
    ],
  },
  {
    trigger: "Company",
    items: [
      {
        title: "About Us",
        href: "/about",
        description: "Learn about our mission and values.",
        icon: Info,
      },
      {
        title: "Partners",
        href: "/partners",
        description: "Meet our trusted partners and collaborators.",
        icon: Handshake,
      },
      {
        title: "Trust Center",
        href: "/trust-center",
        description: "Security, compliance, and privacy information.",
        icon: Shield,
      },
      {
        title: "Hiring Now",
        href: "/hiring-now",
        description: "Current job openings at VProple.",
        icon: Briefcase,
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Latest insights and industry updates.",
        icon: FileText,
      },
    ],
  },
  {
    trigger: "How It Works",
    items: [
      {
        title: "Employer",
        href: "/employer",
        description: "How employers can hire top talent efficiently.",
        icon: UserCheck,
      },
      {
        title: "Expert Interviewer",
        href: "/expert-interviewer",
        description: "Become an expert interviewer on our platform.",
        icon: UserCircle,
      },
      {
        title: "Affiliate Partner",
        href: "/affiliate-partners",
        description: "Join our affiliate program and earn rewards.",
        icon: UserPlus,
      },
    ],
  },
  {
    trigger: "Login",
    items: [
      {
        title: "Employer Login",
        href: "https://platform.vprople.com",
        description: "Access your employer dashboard and manage hires.",
        icon: UserCheck,
      },
      {
        title: "Expert Login",
        href: "https://expert.vprople.com",
        description: "Access your expert interviewer dashboard.",
        icon: UserCircle,
      },
    ],
  },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <NavigationMenu viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">
                  {menuItems.map((menu) => (
                    <NavigationMenuItem key={menu.trigger}>
                      <NavigationMenuTrigger className="bg-transparent">
                        {menu.trigger}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {menu.items.map((item) => (
                            <ListItemWithIcon
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItemWithIcon>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      <Link href="/pricing">Pricing</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                {menuItems.map((menu) => (
                  <Accordion type="single" collapsible key={menu.trigger}>
                    <AccordionItem value={menu.trigger}>
                      <AccordionTrigger>{menu.trigger}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4">
                        {menu.items.map((item) => (
                          <Link
                            href={item.href}
                            key={item.title}
                            className="space-y-2"
                          >
                            <div className="text-sm leading-none font-medium flex items-center gap-2 ">
                              <item.icon className="size-4" />
                              {item.title}
                            </div>
                            <p className="text-muted-foreground text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
              <Button asChild>
                <Link href={"/contact"}>
                  Contact Us <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

function ListItemWithIcon({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: LucideIcon;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium flex items-center gap-2">
            <Icon />
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
