import { Inter, Karla, Open_Sans } from 'next/font/google';
import { cn } from '/src/utils/classnames';

const interBold = Inter({
  weight: '700',
});

const openSans = Open_Sans({
  weight: '400',
});

const openSansBold = Open_Sans({
  weight: '700',
});

const karla = Karla({
  weight: '400',
});

const karlaMedium = Karla({
  weight: '500',
});

const karlaBold = Karla({
  weight: '700',
});

export default function Home() {
  return (
    <main
      className={cn(
        'Home',
        //
        //
        interBold.className,
        openSans.className,
        openSansBold.className,
        karla.className,
        karlaMedium.className,
        karlaBold.className
      )}
    ></main>
  );
}
