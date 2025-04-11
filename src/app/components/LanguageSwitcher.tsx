"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
  
    const switchTo = (lang: 'en' | 'es') => {
      const newPath = pathname.replace(/^\/(en|es)/, `/${lang}`);
      router.push(newPath);
    };
  
    return (
      <div className="flex gap-2">
        <button onClick={() => switchTo('en')}>English</button>
        <button onClick={() => switchTo('es')}>Español</button>
      </div>
    );
  }