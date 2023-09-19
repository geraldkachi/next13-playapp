import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meta Development',
  description: 'Generated by Meta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
// with, toSorted, toRevered, splice,

// ls -la
// meaning lsit everything is the file directory including the hidden files
// .  meanis period
// git reset HEAD~1   // this would point to the last commit in git to undo a commit
// {date && format(new Date(), "do MMMM yyyy, hh:mm a")}


// Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`
